const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
// route import
const products = require("./routes/productRoutes");

app.use("/api/v1", products);


module.exports = app;