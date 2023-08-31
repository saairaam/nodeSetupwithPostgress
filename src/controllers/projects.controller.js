import { Project } from "../models/Project.js";
import { Module } from "../models/Modules.js";

export const getProjects = async (req, res) => {
  console.log("get projects ");
  try {
    const projects = await Project.findAll({
      attributes: ["id", "title", "description"],
    });
    res.json(projects);
    console.log("got projects");
  } catch (error) {}
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("get project " + id);
    const project = await Project.findOne({
      where: {
        id,
      },
    });
    console.log("got project " + id);
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newProject = await Project.create({
      title,
      description,
    });

    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const project = await Project.findByPk(id);
    project.title = title;
    project.description = description;
    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    await Project.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProjectModules = async (req, res) => {
  const { id } = req.params;
  console.log("project id is: ", id);
  try {
    const Module = await Module.findAll({
      attributes: [
        "id",
        "projectId",
        "title",
        "description",
        "completed",
        "checked",
      ],
      where: { projectId: id },
    });
    console.log("module; ", Module);
    res.json(Module);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
