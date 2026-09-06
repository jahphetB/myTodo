import Todo from "./todo.js";
import { projects, defaultProject } from "./app.js";
import { renderProjects } from "./dom.js";

const testTodo = new Todo(
  "Finish Todo List",
  "Work on The Odin Project assignment",
  "2026-09-10",
  "high"
);

defaultProject.addTodo(testTodo);

renderProjects();

/*
console.log(defaultProject);
console.log(projects);
console.log(testTodo); */