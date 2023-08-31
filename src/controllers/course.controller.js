import { Course } from "../models/Course.js";

export const createCourse = async (req, res) => {
  console.log("Create course");
  try {
    const { name } = req.body;
    const course = await Course.create({ name });
    res.status(201).json(course);
    console.log("Created course");
  } catch (error) {
    res.status(500).json({ error: "Error creating course." });
  }
};

export const getCourses = async (req, res) => {
  console.log("Get course");
  try {
    const courses = await Course.findAll();
    res.json(courses);
    console.log("got course");
  } catch (error) {
    res.status(500).json({ error: "Error fetching courses." });
  }
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("Update course");
    const [updatedCount, updatedCourses] = await Course.update(
      { name: req.body.name },
      { where: { ID: id }, returning: true }
    );
    if (updatedCount === 0) {
      res.status(404).json({ error: "Course not found." });
    } else {
      res.json(updatedCourses[0]);
      console.log("Updated course");
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating course." });
  }
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("Delete course");
    const deletedCount = await Course.destroy({ where: { ID: id } });
    if (deletedCount === 0) {
      res.status(404).json({ error: "Course not found." });
    } else {
      res.status(204).send();
      console.log("Deleted course");
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting course." });
  }
};
