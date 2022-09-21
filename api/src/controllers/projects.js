const ProjectsService = require("../services/projects.js");
const express = require("express");
const ProjectsController = {
  getAll: async (req, res) => {
    const allProjects = await ProjectsService.getAll();
    return res
      .status(200)
      .send({ total: allProjects.length, data: allProjects });
  },
  getOneById: async (req, res) => {
    const { idProject } = req.params;
    const options = { where: { id: idProject } };
    const project = await ProjectsService.getOneById(options);
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send("Project not found");
    }
  },
  getByType: () => {},
  getByPlant: () => {},
  create: async (req, res) => {
    const {
      name,
      description,
      objetives,
      proposals,
      planningDate,
      estimatedCost,
      duration,
    } = req.body;
    if (!name || !planningDate || !duration) {
      res.status(404).send("Incompleted data");
    } else {
      newProject = { ...req.body };
      await ProjectsService.create(newProject);
      res.send("The project was created");
    }
  },
  update: async (req, res) => {
    const newData = { ...req.body };
    const options = { where: { id: newData.id } };
    const searchProject = await ProjectsService.getOneById(options);
    await ProjectsService.update(searchProject, newData);
    res.send("The project was modified");
  },
};

module.exports = ProjectsController;
