import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectModules,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);
router.get("/:id", getProject);
router.get("/:id/modules", getProjectModules);

export default router;
