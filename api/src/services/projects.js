const { Project } = require("../db");

const ProjectsService = {
  getAll: (options) => {
    try {
      return Project.findAll({ ...options });
    } catch (error) {
      return error;
    }
  },
  getOneById: (idProject, options) => {
    try {
      return Project.findByPk(idProject, { ...options });
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
  delete: (options) => {
    try {
      return Project.destroy({ ...options });
    } catch (error) {
      return error;
    }
  },
};

module.exports = ProjectsService;
