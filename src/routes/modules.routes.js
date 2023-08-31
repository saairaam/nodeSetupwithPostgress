import { Router } from "express";

import {
  getModules,
  createModule,
  updateModule,
  deleteModule,
  getModule,
} from "../controllers/modules.controller.js";

const router = Router();

router.get("/", getModules);
router.post("/", createModule);
router.put("/:id", updateModule);
router.delete("/:id", deleteModule);
router.get("/:id", getModule);

export default router;
