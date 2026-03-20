import { Router } from "express"
import { authUserMiddleware } from "../middleware/authUser.middleware.js";
import { generateInterviewReportController, getReportController } from "../controller/interview.controller.js";
import upload from "../middleware/multer.middleware.js";

const router = Router();

// Route
router.post(
    "/",
    authUserMiddleware,
    upload.single("resume"),
    generateInterviewReportController
);

router.get(
    "/report",
    authUserMiddleware,
    getReportController,
)

export default router;