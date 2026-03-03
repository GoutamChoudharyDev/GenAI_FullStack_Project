import "dotenv/config";
import app from "./app.js";
import connectDB from "./db/db.js";

// DB connection
connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("DB Connection failed:", error);
    })