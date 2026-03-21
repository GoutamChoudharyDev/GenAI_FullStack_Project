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
    origin: [
        "http://localhost:5173",
        "https://gen-ai-full-stack-project-brown.vercel.app/",
        "https://gen-ai-full-stack-project-i01oojjiu-goutam-choudhary-s-projects.vercel.app",
        "https://gen-ai-full-stack-project-298a1y5ab-goutam-choudhary-s-projects.vercel.app",
    ],
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