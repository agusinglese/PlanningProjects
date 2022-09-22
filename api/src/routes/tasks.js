const { Router } = require("express");
const router = Router();
const TasksController = require("../controllers/tasks.js");

router.get("/", TasksController.getAll);
router.get("/:idTask", TasksController.getOneById);
router.get("/project/:idProject");
router.post("/", TasksController.create);
router.delete("/:idTask", TasksController.delete);
router.put("/", TasksController.update);
module.exports = router;
