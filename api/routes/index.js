import { Router } from "express";
import files from "./files.router.js";

const router = Router();

router.use('/files', files);

export default router;