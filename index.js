const express = require("express");
const app = express();
const productRoute = require("./routes/productRoute");
app.use(express.json());

app.use("/api/v1/products", productRoute);

module.exports = app;
