const { Task } = require("../db.js");

const tasksService = {
  getAll: (options) => {
    try {
      return Task.findAll({ ...options });
    } catch (error) {
      return error;
    }
  },
  getOneById: (options) => {
    try {
      return Task.findByPk(options);
    } catch (error) {
      return error;
    }
  },
  getAllByProjects: (options) => {
    try {
      return Task.findAll({ ...options });
    } catch (error) {
      return error;
    }
  },
  create: (newTask) => {
    try {
      return Task.create({ ...newTask });
    } catch (error) {
      return error;
    }
  },
  update: (data) => {
    try {
      return Task.update({ ...data });
    } catch (error) {
      return error;
    }
  },
  delete: (options) => {
    try {
      return Task.destroy({ ...options });
    } catch (error) {
      return error;
    }
  },
  state: () => {
    try {
      return;
    } catch (error) {
      return error;
    }
  },
};

module.exports = tasksService;
