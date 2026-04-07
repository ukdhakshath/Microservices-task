require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const inventoryRoutes = require("./routes/inventory.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

// DB connection
connectDB();

// Routes
app.use("/inventory", inventoryRoutes);

// Error middleware
app.use(errorHandler);

app.listen(3005, () => {
    console.log("Inventory Service running on port 3005");
});