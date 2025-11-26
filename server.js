import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config/config.js";

// Import routes
import contactRoutes from "./server/routes/contact.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import qualificationRoutes from "./server/routes/qualification.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import authRoutes from "./server/routes/auth.routes.js";

const app = express();

//  Middleware — FIXED: Allow frontend access
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000", "https://myportfolio-frontend-56oe.onrender.com"], // frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); // Needed for JSON body parsing

//  MongoDB Connection
mongoose
  .connect(config.mongoUri)
  .then(() => console.log(" Connected to the MongoDB database!"))
  .catch((err) => {
    console.error(" Unable to connect to MongoDB:", err.message || err);
    process.exit(1);
  });

// Root route (browser view)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my portfolio application." });
});

//  API Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//  Start the server
const PORT = process.env.port || 5000;
app.listen(PORT, () => {
  console.info(` Server started on http://localhost:${PORT}`);
});
