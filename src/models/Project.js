import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Module } from "./Modules.js";
import { Student } from "./Students.js";
export const Project = sequelize.define(
  "projects",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Student,
        key: "id",
      },
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
Project.hasMany(Module, {
  foreignKey: "projectId",
  sourceKey: "id",
});
Project.belongsTo(Student, {
  foreignKey: "student_id",
});
Student.hasMany(Project, {
  foreignKey: "student_id",
});
Module.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
