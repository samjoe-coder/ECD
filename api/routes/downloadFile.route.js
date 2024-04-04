import { Router } from "express";
import downloadFileController from "../controllers/downloadFile.controller.js";

const router = Router();

router.get("/file", downloadFileController)

export default router;

