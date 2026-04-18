import { useState } from "react";
import CreateOrder from "./components/CreateOrder";
import OrdersList from "./components/OrdersList";
import Dashboard from "./components/Dashboard";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-orange-500 tracking-wide">
   Laundry Management System
</h1>

      <Dashboard refresh={refresh} />

      <CreateOrder onCreated={() => setRefresh(prev => !prev)} />

      <OrdersList refresh={refresh} />
    </div>
  );
}

export default App;