import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  getStudentMarks,
} from "../controllers/students.controller.js";
const router = Router();
router.get("/", getAllStudents);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);
router.get("/:id", getStudentById);
router.get("/mark/:id", getStudentMarks);
router.post("/mark/:id");
export default router;
