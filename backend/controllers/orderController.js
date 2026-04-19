const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { customerName, phone, garments, quantities, pricePerItem } = req.body;

    const totalQuantity = quantities.reduce((a, b) => a + b, 0);
    const totalAmount = totalQuantity * pricePerItem;

    const orderId = "ORD-" + Date.now();

    const order = new Order({
      customerName,
      phone,
      garments,
      quantities,
      pricePerItem,
      totalAmount,
      orderId
    });

    await order.save();

    res.json({ message: "Order Created", order });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE STATUS
exports.updateStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findOneAndUpdate(
      { orderId },
      { status },
      { new: true }
    );

    res.json({ message: "Updated", order });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DASHBOARD
exports.getDashboard = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalRevenue = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    const statusStats = await Order.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } }
    ]);

    res.json({
      totalOrders,
      totalRevenue: totalRevenue[0]?.total || 0,
      statusStats
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// DELETE ORDER
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOneAndDelete({ orderId });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Clearr Orders
exports.clearOrders = async (req, res) => {
  await Order.deleteMany({});
  res.json({ message: "All orders cleared" });
};