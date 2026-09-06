import { projects } from "./app.js";

function renderProjects() {
  
  console.log("projects inside renderProjects:", projects);
  const projectsContainer = document.querySelector("#projects");

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectElement = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;

    projectElement.appendChild(projectTitle);

    project.todos.forEach((todo) => {
      const todoElement = document.createElement("div");

      const todoSummary = document.createElement("p");
      todoSummary.textContent = `${todo.title} - ${todo.dueDate}`;

      const todoDetails = document.createElement("div");

      const description = document.createElement("p");
      description.textContent = todo.description;

      const priority = document.createElement("p");
      priority.textContent = `Priority: ${todo.priority}`;

      todoDetails.appendChild(description);
      todoDetails.appendChild(priority);

      todoDetails.style.display = "none";

      todoSummary.addEventListener("click", () => {
        if (todoDetails.style.display === "none") {
          todoDetails.style.display = "block";
        } else {
          todoDetails.style.display = "none";
        }
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", () => {
        const todoIndex = project.todos.indexOf(todo);

        project.todos.splice(todoIndex, 1);

        renderProjects();
      });

      todoElement.appendChild(todoSummary);
      todoElement.appendChild(todoDetails);
      todoElement.appendChild(deleteButton);

      projectElement.appendChild(todoElement);
    });

    projectsContainer.appendChild(projectElement);
  });
}

export { renderProjects };