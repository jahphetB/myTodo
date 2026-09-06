import Project from "./project.js";

const projects = [];

const defaultProject = new Project("Default");
projects.push(defaultProject);

function addProject(name) {
  const newProject = new Project(name);
  projects.push(newProject);

  return newProject;
}

export { projects, defaultProject, addProject };