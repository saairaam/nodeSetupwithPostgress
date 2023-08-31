import { Teacher } from "../models/Teacher.js";
export const createTeacher = async (req, res) => {
  try {
    console.log(`create Teacher`);
    const { name } = req.body;
    const teacher = await Teacher.create({ name });
    res.status(201).json(teacher);
    console.log(`created Teacher`);
  } catch (error) {
    res.status(500).json({ error: "Error creating teacher." });
  }
};

export const getTeachers = async (req, res) => {
  try {
    console.log(`get Teacher`);
    const teachers = await Teacher.findAll();
    res.json(teachers);
    console.log(`got Teacher`);
  } catch (error) {
    res.status(500).json({ error: "Error fetching teachers." });
  }
};

export const updateTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`update Teacher ${id}`);
    const [updatedCount, updatedTeachers] = await Teacher.update(
      { name: req.body.name },
      { where: { ID: id }, returning: true }
    );
    if (updatedCount === 0) {
      res.status(404).json({ error: "Teacher not found." });
    } else {
      res.json(updatedTeachers[0]);
      console.log(`updated Teacher  ${id}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating teacher." });
  }
};

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(`delete Teacher  ${id}`);
    const deletedCount = await Teacher.destroy({ where: { ID: id } });
    if (deletedCount === 0) {
      res.status(404).json({ error: "Teacher not found." });
    } else {
      res.status(204).send();
      console.log(`deleted Teacher  ${id}`);
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting teacher." });
  }
};
