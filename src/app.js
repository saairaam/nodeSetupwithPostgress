import express from "express";
import morgan from "morgan";
import { sequelize } from "./db/database.js";
import projectsRoutes from "./routes/projects.routes.js";
import moduleRoutes from "./routes/modules.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import courseRoutes from "./routes/course.routes.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/v1/projects", projectsRoutes);
app.use("/api/v1/modules", moduleRoutes);
app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/teachers", teacherRoutes);
app.use("/api/v1/courses", courseRoutes);
export default app;
