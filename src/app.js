import Project from "./project.js";

const projects = [];
const defaultProject = new Project("Default");

projects.push(defaultProject);

export { projects, defaultProject };