import { useState } from "react";
import axios from "axios";

function CreateOrder({ onCreated }) {
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    garments: "",
    quantities: "",
    pricePerItem: ""
  });

 const handleSubmit = async () => {
  try {
    await axios.post("http://localhost:5000/api/orders/create", {
      ...form,
      garments: form.garments.split(","),
      quantities: form.quantities.split(",").map(Number)
    });

    alert("Order Created!");

    onCreated(); 

  } catch (err) {
    console.error(err);
    alert("Error creating order");
  }
};

  return (
    <div className="card mb-6">
  <h2 className="text-xl font-semibold mb-4">Create Order</h2>

  <div className="grid grid-cols-2 gap-3">
    <input placeholder="Customer Name" className="input"
      onChange={e => setForm({...form, customerName: e.target.value})} />

    <input placeholder="Phone Number" className="input"
      onChange={e => setForm({...form, phone: e.target.value})} />

    <input placeholder="Garments (Shirt,Pant)" className="input col-span-2"
      onChange={e => setForm({...form, garments: e.target.value})} />

    <input placeholder="Quantities (2,3)" className="input"
      onChange={e => setForm({...form, quantities: e.target.value})} />

    <input placeholder="Price per item" className="input"
      onChange={e => setForm({...form, pricePerItem: e.target.value})} />
  </div>

  <button onClick={handleSubmit} className="btn mt-3 w-full">
    Create Order
  </button>
</div>
  );
}

export default CreateOrder;