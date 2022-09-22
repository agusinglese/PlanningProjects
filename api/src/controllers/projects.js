const ProjectsService = require("../services/projects.js");
const typesService = require("../services/types.js");
const { Type, Task } = require("../db.js");
const tasksService = require("../services/tasks.js");

const ProjectsController = {
  getAll: async (req, res) => {
    const options = { include: [{ model: Type }, { model: Task }] };
    const allProjects = await ProjectsService.getAll(options);
    return res
      .status(200)
      .send({ total: allProjects.length, data: allProjects });
  },
  getOneById: async (req, res) => {
    const { idProject } = req.params;
    const options = { include: [{ model: Type }, { model: Task }] };
    const project = await ProjectsService.getOneById(idProject, options);
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
