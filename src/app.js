import Project from "./project.js";
import Todo from "./todo.js";

function loadProjects() {
  const savedProjects = localStorage.getItem("projects");

  if (!savedProjects) {
    return [new Project("Default")];
  }

  const parsedProjects = JSON.parse(savedProjects);

  return parsedProjects.map((projectData) => {
    const project = new Project(projectData.name);

    projectData.todos.forEach((todoData) => {
      const todo = new Todo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority
      );

      project.addTodo(todo);
    });

    return project;
  });
}

const projects = loadProjects();

function addProject(name) {
  const newProject = new Project(name);
  projects.push(newProject);

  return newProject;
}

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function renameProject(project, newName) {
  project.name = newName;
}

function deleteProject(project) {
  const projectIndex = projects.indexOf(project);

  if (projectIndex !== -1) {
    projects.splice(projectIndex, 1);
  }
}

export {
  projects,
  addProject,
  saveProjects,
  renameProject,
  deleteProject,
};