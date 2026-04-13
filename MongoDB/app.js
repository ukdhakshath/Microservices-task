require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api", require("./routes/department.routes"));
app.use("/api", require("./routes/intern.routes"));
app.use("/api", require("./routes/task.routes"));

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000 🚀");
});