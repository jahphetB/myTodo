import { projects } from "./app.js";

function renderProjects() {
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
        todoDetails.innerHTML = `
        <p>${todo.description}</p>
        <p>Priority: ${todo.priority}</p>
        `;

        todoDetails.style.display = "none";

        todoSummary.addEventListener("click", () => {
            todoDetails.style.display =
            todoDetails.style.display === "none" ? "block" : "none";
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