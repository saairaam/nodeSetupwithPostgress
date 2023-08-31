import { Module } from "../models/Modules.js";

// Read all
export const getModules = async (req, res) => {
  console.log("get modules");
  try {
    const modules = await Module.findAll({
      attributes: [
        "id",
        "title",
        "description",
        "completed",
        "checked",
        "projectId",
      ],
      order: [["id", "DESC"]],
    });
    res.json(modules);
    console.log("got modules");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Create
export const createModule = async (req, res) => {
  const { title, description, completed, checked, projectId } = req.body;
  try {
    console.log("create modules");
    const newModule = await Module.create({
      projectId,
      title,
      description,
      completed,
      checked,
    });
    res.json(newModule);
    console.log("created modules");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Read 1
export const getModule = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("get module " + id);
    const Module = await Module.findOne({
      where: { id },
      attributes: [
        "id",
        "projectId",
        "title",
        "description",
        "completed",
        "checked",
      ],
    });
    res.json(Module);
    console.log("got module " + id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update
export const updateModule = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("update module " + id);
    const Module = await Module.findOne({
      attributes: [
        "title",
        "description",
        "completed",
        "checked",
        "id",
        "projectId",
      ],
      where: { id },
    });
    Module.set(req.body);
    await Module.save();
    console.log("updated module " + id);
    return res.json(Module);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteModule = async (req, res) => {
  const { id } = req.params;
  try {
    console.log("delete module " + id);
    await Module.destroy({ where: { id } });
    console.log("deleted module " + id);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
