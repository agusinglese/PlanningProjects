const { Project } = require("../db");

const ProjectsService = {
  getAll: () => {
    try {
      return Project.findAll();
    } catch (error) {
      return error;
    }
  },
  getOneById: (options) => {
    try {
      return Project.findOne({ ...options });
    } catch (error) {
      return error;
    }
  },

  create: (newProject) => {
    try {
      return Project.create({ ...newProject });
    } catch (error) {
      return error;
    }
  },
  update: (searchProject, newData) => {
    try {
      return searchProject.update({ ...newData });
    } catch (error) {
      return error;
    }
  },
};

module.exports = ProjectsService;
