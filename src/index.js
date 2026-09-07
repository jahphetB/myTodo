import "./styles.css";

import Todo from "./todo.js";
import {
  projects,
  addProject,
  saveProjects,
} from "./app.js";
import { renderProjects, renderProjectOptions } from "./dom.js";

const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#todo-title").value;
  const description = document.querySelector("#todo-description").value;
  const dueDate = document.querySelector("#todo-due-date").value;
  const priority = document.querySelector("#todo-priority").value;
  const projectIndex = document.querySelector("#todo-project").value;

  const newTodo = new Todo(
    title,
    description,
    dueDate,
    priority
  );

  projects[projectIndex].addTodo(newTodo);

  saveProjects();
  renderProjects();

  todoForm.reset();
});

const projectForm = document.querySelector("#project-form");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const projectName = document.querySelector("#project-name").value;

  addProject(projectName);
  
  saveProjects();

  renderProjects();
  renderProjectOptions();

  projectForm.reset();
});

renderProjects();
renderProjectOptions();