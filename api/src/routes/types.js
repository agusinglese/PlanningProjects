const { Router } = require("express");
const typesController = require("../controllers/types");
const router = Router();

router.get("/", typesController.getAll);
router.post("/", typesController.create);
router.put("/", typesController.update);
router.delete("/:idType", typesController.delete);

module.exports = router;
