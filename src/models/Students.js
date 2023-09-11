import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import { Mark } from "./Marks.js";
import { Course } from "./Course.js";
import { Enrollment } from "./Entrollment.js";
export const Student = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "createdat",
    updatedAt: "updatedat",
  }
);
Student.hasMany(Enrollment, { foreignKey: "student_id" });
Student.hasMany(Mark, { foreignKey: "student_id" });

Mark.belongsTo(Student, { foreignKey: "student_id" });
Student.afterCreate(async (student, options) => {
  try {
    await Mark.create({
      student_id: student.id,
      maths: 0,
      science: 0,
      social: 0,
      english: 0,
      tamil: 0,
    });
    console.log("************************");
    await Enrollment.create({
      student_id: student.id,
    });
  } catch (error) {
    console.error(error);
  }
});
Student.beforeDestroy(async (student, options) => {
  try {
    await Mark.destroy({
      where: {
        student_id: student.id,
      },
    });
    await Enrollment.destroy({
      where: {
        student_id: student.id,
      },
    });
    console.log(
      `Marks and enrollment deleted for student with ID ${student.id}`
    );
  } catch (error) {
    console.error(
      `Error deleting marks and enrollment for student with ID ${student.id}:`,
      error
    );
  }
});
