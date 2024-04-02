import { Router } from "express";

import { fileDownload } from "../controllers/download.controller.js";

const router = Router();

router.get("/downloadFile", fileDownload);


export default router;