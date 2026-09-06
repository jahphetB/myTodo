import { projects } from "./app.js";

function renderProjects() {
  const projectsContainer = document.querySelector("#projects");

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.textContent = project.name;

    projectsContainer.appendChild(projectElement);
  });
}

export { renderProjects };