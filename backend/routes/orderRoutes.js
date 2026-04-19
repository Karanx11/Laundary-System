const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// ✅ SAFE ROUTES
router.post("/create", orderController.createOrder);
router.put("/update/:orderId", orderController.updateStatus);
router.get("/", orderController.getOrders);
router.get("/dashboard", orderController.getDashboard);
router.delete("/delete/:orderId", orderController.deleteOrder);
router.delete("/clear", orderController.clearOrders);

module.exports = router;