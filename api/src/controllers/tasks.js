const ProjectsService = require("../services/projects.js");
const tasksService = require("../services/tasks.js");
const { Project } = require("../db.js");

const tasksController = {
  getAll: async (req, res) => {
    const options = { include: { model: Project } };
    const allTasks = await tasksService.getAll(options);
    res.status(200).send({ total: allTasks.length, data: allTasks });
  },
  getOneById: async (req, res) => {
    const options = req.params.idTask;
    const searchTask = await tasksService.getOneById(options);
    res.status(200).send(searchTask);
  },
  getAllByProject: async (req, res) => {
    const options = { where: { projectId: parseInt(req.params.idProject) } };
    const allTasksByProject = await tasksService.getAllByProjects(options);
    if (allTasksByProject.length) {
      return res.status(200).send(allTasksByProject);
    } else {
      res.status(404).send("The project hasn't tasks");
    }
  },
  create: async (req, res) => {
    const {
      name,
      duration,
      estimatedCost,
      planningDate,
      realCost,
      realDate,
      idProject,
    } = req.body;
    if (!name || !duration || !planningDate || !idProject) {
      res.status(404).send("Incompleted data");
    } else {
      const newTask = {
        name,
        duration,
        estimatedCost,
        planningDate,
        realCost,
        realDate,
      };
      const taskCreated = await tasksService.create(newTask);
      const optionsProject = { where: { id: idProject } };
      const searchProject = await ProjectsService.getOneById(optionsProject);
      await taskCreated.setProject(searchProject);
      res.status(200).send(taskCreated);
    }
  },
  update: async (req, res) => {
    const {
      id,
      name,
      duration,
      estimatedCost,
      planningDate,
      realCost,
      realDate,
      idProject,
    } = req.body;
    const data = {
      name,
      duration,
      estimatedCost,
      planningDate,
      realCost,
      realDate,
    };
    const options = { where: { id }, include: { model: Project } };
    const searchTask = tasksService.getOneById(options);
    await searchTask.tasksService.update(data);

    res.status(200).send("Task updated");
  },
  delete: async (req, res) => {
    const options = { where: { id: req.params.idTask } };
    await tasksService.delete(options);
    res.status(200).send("Task deleted");
  },
  state: async (req, res) => {},
};
//{"name":"Projecto1", "planningDate": "2022-09-28", "duration": "10", "type": "Gestión" }
module.exports = tasksController;
