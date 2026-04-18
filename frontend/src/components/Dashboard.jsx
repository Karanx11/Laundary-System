import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard({ refresh }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://laundary-backend-jqf5.onrender.com/api/orders/dashboard")
      .then(res => setData(res.data));
  }, [refresh]);

  if (!data) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
  <div className="card text-center">
    <p className="text-gray-400">Total Orders</p>
    <h2 className="text-2xl font-bold">{data.totalOrders}</h2>
  </div>

  <div className="card text-center">
    <p className="text-gray-400">Revenue</p>
    <h2 className="text-2xl font-bold">₹{data.totalRevenue}</h2>
  </div>

  <div className="card text-center">
    <p className="text-gray-400">Status</p>
    {data.statusStats.map(s => (
      <p key={s._id}>{s._id}: {s.count}</p>
    ))}
  </div>
</div>
  );
}

export default Dashboard;