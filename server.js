const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// MongoDB Connection
// ===============================
mongoose.connect("mongodb://127.0.0.1:27017/pwa-store")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// ===============================
// Product Model
// ===============================
const Product = require("./models/Product");


// ===============================
// Home Route (Server Test)
// ===============================
app.get("/", (req, res) => {
    res.send("Server Working ✅");
});


// ===============================
// Get Products
// ===============================
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});


// ===============================
// Add Product
// ===============================
app.post("/add-product", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: "Product Added" });
});


// ===============================
// Start Server
// ===============================
app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});