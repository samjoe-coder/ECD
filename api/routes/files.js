import { Router } from "express";
import sendEmail from "../controllers/sendFile.js";
const router = Router();

router.get("/send/file", sendEmail)

export default router;

