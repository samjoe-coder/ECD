import { Router } from "express";
import sendEmail from "../controllers/sendFile.controller.js";

const router = Router();

router.get("/send/file", sendEmail)

export default router;

