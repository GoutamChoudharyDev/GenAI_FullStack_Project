import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Blacklist } from "../models/blacklist.model.js";

// Register Controller
const registerUser = async (req, res) => {
    try {
        // get data from request body
        const { username, email, password } = req.body;

        // validation
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        // encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create new user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        // return response
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error", error: error.message
        })
    }
}

// Login Controller
const loginUser = async (req, res) => {
    try {
        // get data from request body
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "User does not exist register first"
            })
        }

        // encrypt password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        // generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        )

        // set JWT token in cookie
        // res.cookie("token", token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        //     maxAge: 24 * 60 * 60 * 1000 // 24 hours
        // })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,           // ALWAYS true in production
            sameSite: "None",       // MUST for cross-origin
            maxAge: 24 * 60 * 60 * 1000,
            path: "/"
        });

        // return response
        return res
            .status(200)
            .json({
                message: "User logged in successfully",
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email
                }
            })

    } catch (error) {
        return res.status(500).json({
            message: "Server Error", error: error.message
        })
    }
}

// Logout Controller
const logoutUser = async (req, res) => {
    try {
        // get token from cookies
        const token = req.cookies.token;

        // if token does not exist
        if (!token) {
            return res.status(400).json({
                message: "No token found"
            })
        }

        // add token to blacklist
        await Blacklist.create({ token });

        // clear cookie
        // res.clearCookie("token");
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            path: "/"
        });

        // return response
        return res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log(error);
    }
}

// Get Me Controller
const getMe = async (req, res) => {
    try {
        // get user from request
        const user = await User.findById(req.user.id);

        // return response
        return res.status(200).json({
            message: "User details fetched successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {

    }
}

// Exporting the controller functions
export {
    registerUser,
    loginUser,
    logoutUser,
    getMe
}