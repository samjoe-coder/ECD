import { Router } from "express";

import { fileUpload } from "../controllers/upload.controller.js";

const router = Router();

router.get("/uploadFile", fileUpload);


export default router;