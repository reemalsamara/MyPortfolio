import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Determine current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly load .env from  root folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("Loaded .env from:", path.resolve(__dirname, "../.env"));

export default {
    mongoUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,
    port: process.env.PORT || 3000,
};
