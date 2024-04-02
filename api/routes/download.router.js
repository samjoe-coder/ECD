import { Router } from "express";

import downloads from "../controllers/download.controller.js";

const router = Router();

router.get("/downloadFile", downloads.downloadFile);


export default router;