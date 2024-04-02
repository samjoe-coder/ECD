import { Router } from "express";

import uploads from "../controllers/upload.controller.js";

const router = Router();

router.get("/uploadFile", uploads.uploadFile);


export default router;