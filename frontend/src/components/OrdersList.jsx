import { useEffect, useState } from "react";
import axios from "axios";

function OrdersList({ refresh }) {
  const [orders, setOrders] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  // 🎨 Status color
  const getStatusColor = (status) => {
    switch (status) {
      case "RECEIVED": return "bg-blue-500";
      case "PROCESSING": return "bg-yellow-500";
      case "READY": return "bg-green-500";
      case "DELIVERED": return "bg-gray-500";
      default: return "bg-gray-700";
    }
  };

  // 📡 Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/orders", {
        params: { search, status }
      });

      setOrders(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refresh, search, status]);

  // 🔄 Update Status
  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/update/${orderId}`,
        { status: newStatus }
      );

      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  // 🗑️ DELETE ORDER
  const deleteOrder = async (orderId) => {
    try {
      const confirmDelete = window.confirm("Delete this order?");
      if (!confirmDelete) return;

      await axios.delete(
        `http://localhost:5000/api/orders/delete/${orderId}`
      );

      fetchOrders(); // refresh after delete
    } catch (err) {
      console.error(err);
    }
  };

  // ⏳ Loading
  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-xl mb-3 text-white">Orders</h2>

      {/* 🔍 Search + Filter */}
      <div className="flex gap-2 mb-4">
        <input
          placeholder="Search name/phone"
          className="p-2 rounded bg-gray-700 text-white w-full"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(searchInput);
            }
          }}
        />

        <button
          className="bg-orange-500 px-4 py-2 rounded text-white"
          onClick={() => setSearch(searchInput)}
        >
          Search
        </button>

        <select
          className="p-2 rounded bg-gray-700 text-white"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option>RECEIVED</option>
          <option>PROCESSING</option>
          <option>READY</option>
          <option>DELIVERED</option>
        </select>
      </div>

      {/* Orders */}
      {orders.length === 0 ? (
        <p className="text-gray-400">No orders found</p>
      ) : (
        orders.map(o => (
          <div key={o._id} className="bg-gray-700 p-3 rounded mb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-white">
                  {o.customerName}
                </p>
                <p className="text-sm text-gray-300">{o.phone}</p>
              </div>

              <span className="text-orange-400 font-bold">
                ₹{o.totalAmount}
              </span>
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span className={`text-sm px-2 py-1 rounded text-white ${getStatusColor(o.status)}`}>
                {o.status}
              </span>

              <div className="flex gap-2">
                {/* Update */}
                <select
                  className="bg-gray-600 text-white p-1 rounded"
                  defaultValue=""
                  onChange={(e) => {
                    if (!e.target.value) return;
                    updateStatus(o.orderId, e.target.value);
                  }}
                >
                  <option value="" disabled>Update</option>
                  <option>RECEIVED</option>
                  <option>PROCESSING</option>
                  <option>READY</option>
                  <option>DELIVERED</option>
                </select>

                {/* Delete */}
                <button
                  onClick={() => deleteOrder(o.orderId)}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersList;