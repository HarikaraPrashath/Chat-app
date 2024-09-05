import express from "express";
import { sendMessage,getMessage } from "../controllers/messageController.js";
import protectRoutes from "../middleware/protectRoutes.js";

const router = express.Router();

//in here protect is checking weather user is login or not
//main thing we use next() funtion that will help to execute the sendMessage function
router.get("/:id",protectRoutes,getMessage)
router.post("/send/:id",protectRoutes,sendMessage)

export default router;