// Import Statements.....................
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/user.route.js";
import InterviewRoutes from "./routes/interview.route.js"

// Initialize express app
const app = express();

// Middlewares...........................
// CORS Enable
app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://gen-ai-full-stack-project-brown.vercel.app/",
    credentials: true
}));

// Parse cookies and JSON bodies
app.use(cookieParser());

// Parse JSON bodies
app.use(express.json());

// Api Endpoints.........................
app.use("/api/auth", UserRoutes)
app.use("/api/interview", InterviewRoutes)

// Default route.........................
app.get('/', (req, res) => {
    res.send("Backend is runnig...")
})

export default app;