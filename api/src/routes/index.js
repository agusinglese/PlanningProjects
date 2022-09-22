const { Router } = require("express");

const router = Router();
const projectsRoutes = require("./projects.js");
const typesRoutes = require("./types.js");
const tasksRoutes = require("./tasks.js");

router.use("/projects", projectsRoutes);
router.use("/types", typesRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;
