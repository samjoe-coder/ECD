import { Router } from "express";
import uploadFile from "./upload.routes.js";
import downloadFile from "./download.router.js";

const router = Router();

router.use('/files', uploadFile);
router.use('/downloads', downloadFile);

export default router;