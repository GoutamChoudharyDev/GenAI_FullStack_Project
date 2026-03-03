// Import Statements.....................
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/user.route.js";

// Initialize express app
const app = express();

// Middlewares...........................
// CORS Enable
app.use(cors());

// Parse cookies and JSON bodies
app.use(cookieParser());

// Parse JSON bodies
app.use(express.json());

// Api Endpoints.........................
app.use("/api/auth", UserRoutes)

// Default route.........................
app.get('/', (req, res) => {
    res.send("Backend is runnig...")
})

export default app;