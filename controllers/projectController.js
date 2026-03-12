const projectService = require("../services/projectService");

exports.createProject = async (req, res) => {
  try {
    const project = await projectService.createProject(req.body, req.user);

    res.status(201).json({
      success: true,
      data: project
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


exports.getProjects = async (req, res) => {
  try {
    const projects = await projectService.getProjects(req.user);

    res.json({
      success: true,
      data: projects
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


exports.getProjectById = async (req, res) => {
  try {
    const project = await projectService.getProjectById(
      req.params.id,
      req.user
    );

    res.json({
      success: true,
      data: project
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};


exports.updateProject = async (req, res) => {
  try {
    const project = await projectService.updateProject(
      req.params.id,
      req.body,
      req.user
    );

    res.json({
      success: true,
      data: project
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


exports.deleteProject = async (req, res) => {
  try {
    const result = await projectService.deleteProject(
      req.params.id,
      req.user
    );

    res.json({
      success: true,
      message: result.message
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};