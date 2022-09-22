const { Type } = require("../db.js");

const typesService = {
  getAll: () => {
    try {
      return Type.findAll();
    } catch (error) {
      return error;
    }
  },
  getOne: (optionsType) => {
    try {
      return Type.findOne({ ...optionsType });
    } catch (error) {
      return error;
    }
  },

  create: (newType) => {
    try {
      return Type.create({ ...newType });
    } catch (error) {
      return error;
    }
  },
  update: (data) => {
    try {
      return Type.update({ ...data });
    } catch (error) {
      return error;
    }
  },
  delete: (options) => {
    try {
      return Type.destroy({ ...options });
    } catch (error) {
      return error;
    }
  },
};

module.exports = typesService;
