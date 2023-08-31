import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Student } from "./Students.js";

export const Enrollment = sequelize.define("enrollment", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  student_id: DataTypes.INTEGER,
  course_id: DataTypes.INTEGER,
});
