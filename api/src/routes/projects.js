const { Router } = require("express");
const router = Router();
const ProjectsController = require("../controllers/projects.js");

router.get("/", ProjectsController.getAll);
router.get("/filter/:nameType", ProjectsController.getByType);
router.get("/:idProject", ProjectsController.getOneById);
router.post("/", ProjectsController.create);
router.put("/:idProject", ProjectsController.update);
router.delete("/:idProject", ProjectsController.delete);

module.exports = router;
