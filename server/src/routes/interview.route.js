import { Router } from "express"
import { authUserMiddleware } from "../middleware/authUser.middleware.js";
import { generateInterviewReportController } from "../controller/interview.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

// Route
router.post(
    "/",
    authUserMiddleware,
    upload.single("resume"),
    generateInterviewReportController
);

export default router;