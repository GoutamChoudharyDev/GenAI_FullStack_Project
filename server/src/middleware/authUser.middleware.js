// Middleware to protect private routes...
// 👉 It checks “Is this user logged in or not?”
// 👉 It verifies the JWT token before allowing access.

import jwt from "jsonwebtoken";
import { Blacklist } from "../models/blacklist.model.js";

const authUserMiddleware = async (req, res, next) => {
    try {
        // get token from cookies
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "Unautherized access token not found!"
            })
        }

        // token verification
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;

        // check if token is blacklisted
        const blacklistedToken = await Blacklist.findOne({ token });
        if (blacklistedToken) {
            return res.status(401).json({
                message: "Unautherized access token is blacklisted!"
            })
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Unautherized access login first"
        })
    }
}

export { authUserMiddleware }