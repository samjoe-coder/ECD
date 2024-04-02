import { Router } from "express";

import { fileUpload } from "../controllers/upload.controller.js";
import { fileDownload } from "../controllers/download.controller.js";


const router = Router();

router.get("/uploadFile", fileUpload);
router.get("/downloadFile", fileDownload);

export default router;