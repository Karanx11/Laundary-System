const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const orderRoutes = require("./routes/orderRoutes");

// 🔧 ADD THIS
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/orders", orderRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Laundry API Running");
});

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});