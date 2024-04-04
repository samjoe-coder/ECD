import { Router } from "express";
import files from "./sendFile.route.js";
import download from "./downloadFile.route.js";
import authenticate from "../middlewares/apiKey.mw.js";

const router = Router();

router.use('/files', authenticate, files);
router.use('/download', download);

export default router;