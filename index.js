const express = require("express");

const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

// health route
app.get("/health", (req, res) => {
  res.json({ message: "Working..." });
});

// routes
app.use("/auth", authRoutes);
app.use("/projects", projectRoutes);

app.use(errorMiddleware);

module.exports = app;
