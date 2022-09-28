const typesService = require("../services/types");

const typesController = {
  getAll: async (req, res) => {
    const allTypes = await typesService.getAll();
    if (req.query.name) {
      const type = allTypes.filter((t) => t.name === req.query.name);
      if (!type) {
        return res.status(404).send("Type not found");
      } else {
        return res.status(200).send(type);
      }
    } else {
      res.status(200).send({ total: allTypes.length, data: allTypes });
    }
  },
  create: async (req, res) => {
    const newType = { ...req.body };
    const options = { where: { name: newType.name } };
    const searchType = await typesService.getOne(options);
    if (searchType) {
      res.status(404).send("Type already exists");
    } else {
      await typesService.create(newType);
      res.status(200).send("Type created");
    }
  },
  update: async (req, res) => {
    const data = { ...req.body };
    await typesService.update(data);
    res.status(200).send("Type modified");
  },
  delete: async (req, res) => {
    const options = { where: { id: parseInt(req.params.idType) } };
    await typesService.delete(options);
    res.status(200).send("Type deleted");
  },
};

module.exports = typesController;
