import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Course } from "./Course.js";
export const Teacher = sequelize.define("teachers", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});
Teacher.hasMany(Course, { foreignKey: "teacher_id" });
Course.belongsTo(Teacher, { foreignKey: "teacher_id" });
