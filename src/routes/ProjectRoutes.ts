import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";

const router = Router()

router.post("/projects", ProjectController.create)

export default router