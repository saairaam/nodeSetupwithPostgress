import { Student } from "./Students.js";
import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";

export const Mark = sequelize.define(
  "mark",
  {
    mark_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maths: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    science: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    social: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    english: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tamil: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    updatedAt: "updatedat",
    createdAt: "createdat",
  }
);

