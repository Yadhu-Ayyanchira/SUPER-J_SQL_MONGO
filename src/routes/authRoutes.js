import express from "express";
import authController from "../controllers/authController.js";
import { errorHandler } from "../middlewares/errorHandler.js";

const authRoute = express.Router();

authRoute.post("/signup", authController.signUp);
authRoute.post("/verify-otp", authController.verifyOtp);

authRoute.use(errorHandler)

export default authRoute;