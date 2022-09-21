const { Router } = require("express");

const router = Router();
const projectsRoutes = require("./projects.js");

router.use("/projects", projectsRoutes);
module.exports = router;
