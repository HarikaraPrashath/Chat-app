import express from "express";
import { loginUser,logoutUser,signupUser } from "../controllers/authController.js";

const router = express.Router();


router.post("/login",loginUser)

router.post("/signUp",signupUser)

router.post("/logout",logoutUser)
export default router;