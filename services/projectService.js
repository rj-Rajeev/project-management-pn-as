const Project = require("../models/projectModel");

exports.createProject = async (data, user) => {

  const project = await Project.create({
    title: data.title,
    description: data.description,
    status: data.status,
    ownerId: user.userId,
    companyId: user.companyId
  });

  return project;
};

exports.getProjects = async (user) => {

  return await Project.find({
    companyId: user.companyId
  });

};

exports.getProjectById = async (id, user) => {

  const project = await Project.findOne({
    _id: id,
    companyId: user.companyId
  });

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};


exports.updateProject = async (id, data, user) => {

  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.ownerId.toString() !== user.userId) {
    throw new Error("Not authorized");
  }

  Object.assign(project, data);

  return await project.save();
};

exports.deleteProject = async (id, user) => {

  const project = await Project.findById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (project.ownerId.toString() !== user.userId) {
    throw new Error("Not authorized");
  }

  await project.deleteOne();

  return { message: "Project deleted" };
};