import { Router } from "express";
import files from "./sendFile.route.js";
import download from "./downloadFile.route.js";

const router = Router();

router.use('/files', files);
router.use('/download', download);

export default router;