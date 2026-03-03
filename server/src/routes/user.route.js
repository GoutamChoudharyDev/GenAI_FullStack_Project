import { Router } from "express";
import { getMe, loginUser, logoutUser, registerUser } from "../controller/user.controller.js";
import { authUserMiddleware } from "../middleware/authUser.middleware.js";

const router = Router();

// User routes
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)
router.get("/get-me", authUserMiddleware, getMe)

// export the router
export default router;