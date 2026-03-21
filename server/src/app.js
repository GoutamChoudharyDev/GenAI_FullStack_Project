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
// app.use(cors({
//     // origin: "http://localhost:5173",
//     origin: "https://gen-ai-full-stack-project-git-main-goutam-choudhary-s-projects.vercel.app/",
//     // origin: "https://gen-ai-full-stack-project-brown.vercel.app/",
//     credentials: true
// }));


const allowedOrigins = [
    "http://localhost:5173",
    "https://gen-ai-full-stack-project-brown.vercel.app",
    "https://gen-ai-full-stack-project-298a1y5ab-goutam-choudhary-s-projects.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("CORS not allowed"));
        }
    },
    credentials: true
}));

app.options("*", cors());

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