const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");
const { createProjectValidation } = require("../validators/projectValidator");
const validationMiddleware = require("../middleware/validationMiddleware");

router.post(
  "/",
  authMiddleware,
  createProjectValidation,
  validationMiddleware,
  projectController.createProject,
);

router.get("/", authMiddleware, projectController.getProjects);
router.get("/:id", authMiddleware, projectController.getProjectById);
router.put("/:id", authMiddleware, projectController.updateProject);
router.delete("/:id", authMiddleware, projectController.deleteProject);

module.exports = router;
