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

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" Connected to the MongoDB database!"))
  .catch((err) => {
    console.error(" Unable to connect to MongoDB:", err.message || err);
    process.exit(1);
  });

// Root route (browser view)
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my portfolio application." });
});

// API Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// Start the server
const PORT = config.port || 4000;
app.listen(PORT, () => {
  console.info(` Server started on http://localhost:${PORT}`);
});
