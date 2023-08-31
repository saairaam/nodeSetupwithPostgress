import { Student } from "../models/Students.js";
import { Enrollment } from "../models/Entrollment.js";
import { Course } from "../models/Course.js";
import { Teacher } from "../models/Teacher.js";

export const getAllStudents = async (req, res) => {
  try {
    console.log("get AllStudents ");
    const students = await Student.findAll();
    res.status(200).json(students);
    console.log("got AllStudents ");
  } catch (error) {
    res.status(500).json({ error: "Error retrieving students" + error });
  }
};
export const getStudentMarks = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`get Student ${id} marks`);
    const student = await Student.findByPk(id, {
      include: [
        {
          model: Enrollment,
          include: [{ model: Course, include: [Teacher] }],
        },
      ],
    });
    if (!student) {
      return res.status(404).json({ error: "Student not found." });
    }
    res.json(student);
    console.log(`got Student ${id} marks`);
  } catch (error) {
    res.status(500).json({ error: "Error fetching student details. " + error });
  }
};

export const getStudentById = async (req, res) => {
  const studentId = req.params.id;
  try {
    console.log(`get Student ${studentId}`);
    const student = await Student.findByPk(studentId);
    if (!student) {
      res.status(404).json({ error: "Students not found" });
    } else {
      console.log(`got Student ${id}`);
      res.status(200).json(student);
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving student" });
  }
};

export const createStudent = async (req, res) => {
  const { name, age, dob, email } = req.body;
  try {
    console.log(`create Student `);
    const student = await Student.create({
      name,
      age,
      dob,
      email,
    });
    res.status(201).json(student);
    console.log(`created Student `);
  } catch (error) {
    res.status(500).json({ error: "Error creating student" + error });
  }
};

export const updateStudent = async (req, res) => {
  const studentId = req.params.id;
  const { name, age, dob, email } = req.body;
  try {
    console.log(`update Student ${studentId}`);
    const student = await Student.findByPk(studentId);
    if (!student) {
      res.status(404).json({ error: "Students not found" });
    } else {
      await student.update({
        name,
        age,
        dob,
        email,
      });
      res.status(200).json(student);
      console.log(`updated Student ${id}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating student" });
  }
};

export const deleteStudent = async (req, res) => {
  const studentId = req.params.id;
  try {
    console.log(`delete Student ${studentId}`);
    const student = await Student.findByPk(studentId);
    if (!student) {
      res.status(404).json({ error: "Students not found" });
    } else {
      await student.destroy();
      res.status(204).json(); // No content
      console.log(`delete Student ${studentId}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting student" });
  }
};
