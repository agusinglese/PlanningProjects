const ProjectsService = require("../services/projects.js");
const typesService = require("../services/types.js");
const { Type, Task } = require("../db.js");
const tasksService = require("../services/tasks.js");

const ProjectsController = {
  getAll: async (req, res) => {
    const { type } = req.query;

    let options = {};
    //const options = { include: [{ model: Type }, { model: Task }] };
    if (type) {
      const optionsType = { where: { name: type } };
      const searchType = await typesService.getOne(optionsType);
      if (searchType) {
        options = {
          where: { typeId: searchType.id },
          include: [{ model: Type }, { model: Task }],
        };
      }
    } else {
      options = { include: [{ model: Type }, { model: Task }] };
    }
    console.log("h", options);
    const allProjects = await ProjectsService.getAll(options);

    if (allProjects.length) {
      return res
        .status(200)
        .send({ total: allProjects.length, data: allProjects });
    } else {
      res.status(404).send("Not found projects");
    }
  },
  getOneById: async (req, res) => {
    const idProject = parseInt(req.params.idProject);
    const options = { include: [{ model: Type }, { model: Task }] };
    const project = await ProjectsService.getOneById(idProject, options);
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send("Project not found");
    }
  },
  getByType: async (req, res) => {
    console.log("entre");
    const idType = req.params.nameType;
    console.log(idType);
    if (idType === "All") {
      console.log("soy all");
      const options = { include: [{ model: Type }, { model: Task }] };
      const allProjects = await ProjectsService.getAll(options);
      if (allProjects) {
        res.status(200).send(allProjects);
      } else {
        res.status(404).send("Project not found");
      }
    } else {
      const options = {
        where: { typeId: parseInt(idType) },
        include: [{ model: Type }, { model: Task }],
      };
      console.log("options type", options);
      const projects = await ProjectsService.getByType(options);
      if (projects) {
        res.status(200).send(projects);
      } else {
        res.status(404).send("Project not found");
      }
    }
  },
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
      type,
    } = req.body;
    if (!name || !planningDate || !duration || !type) {
      res.status(404).send("Incompleted data");
    } else {
      newProject = {
        name,
        description,
        objetives,
        proposals,
        planningDate,
        estimatedCost,
        duration,
      };
      const projectCreated = await ProjectsService.create(newProject);

      const optionsType = { where: { name: type } };
      const searchType = await typesService.getOne(optionsType);
      await projectCreated.setType(searchType);

      res.send(projectCreated);
    }
  },
  update: async (req, res) => {
    const newData = { ...req.body };
    const options = { where: { id: newData.id } };
    const searchProject = await ProjectsService.getOneById(options);
    await ProjectsService.update(searchProject, newData);
    res.send("The project was modified");
  },
  delete: async (req, res) => {
    const { idProject } = req.params;
    const optionsTasks = { where: { projectId: idProject } };
    await tasksService.delete(optionsTasks);

    const options = { where: { id: parseInt(idProject) } };
    await ProjectsService.delete(options);
    res.status(200).send("The project was deleted");
  },
};

module.exports = ProjectsController;
