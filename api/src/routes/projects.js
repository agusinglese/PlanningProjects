const { Router } = require("express");
const router = Router();
const ProjectsController = require("../controllers/projects.js");

router.get("/", ProjectsController.getAll);
router.get("/:idProject", ProjectsController.getOneById);
router.post("/", ProjectsController.create);
router.put("/", ProjectsController.update);

module.exports = router;
