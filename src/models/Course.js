import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Enrollment } from "./Entrollment.js";

export const Course = sequelize.define("course", {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});
Course.hasMany(Enrollment, { foreignKey: "course_id" });
Course.afterCreate(async (course, options) => {
  try {
    await Enrollment.create({
      course_id: course.id,
    });
    console.log(`course added with ID ${course.id}`);
  } catch (error) {
    console.error(`Error adding course with ID ${course.id}:`, error);
  }
});
