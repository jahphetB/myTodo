import {
  projects,
  saveProjects,
  renameProject,
  deleteProject,
} from "./app.js";

function renderProjects() {

  console.log("projects inside renderProjects:", projects);
  const projectsContainer = document.querySelector("#projects");

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    const projectElement = document.createElement("div");

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.name;

    const editProjectButton = document.createElement("button");
    editProjectButton.textContent = "Edit Project";

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.textContent = "Delete Project";

    editProjectButton.addEventListener("click", () => {
      const editForm = document.createElement("form");

      const nameInput = document.createElement("input");
      nameInput.value = project.name;
      nameInput.required = true;

      const saveButton = document.createElement("button");
      saveButton.type = "submit";
      saveButton.textContent = "Save";

      editForm.appendChild(nameInput);
      editForm.appendChild(saveButton);

      projectElement.appendChild(editForm);

      editForm.addEventListener("submit", (event) => {
        event.preventDefault();

        renameProject(project, nameInput.value);

        saveProjects();
        renderProjects();
        renderProjectOptions();
      });
    });

    deleteProjectButton.addEventListener("click", () => {
      deleteProject(project);

      saveProjects();
      renderProjects();
      renderProjectOptions();
    });

    projectElement.appendChild(projectTitle);
    projectElement.appendChild(editProjectButton);
    projectElement.appendChild(deleteProjectButton);

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

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";

      editButton.addEventListener("click", () => {
        const editForm = document.createElement("form");

        const titleInput = document.createElement("input");
        titleInput.value = todo.title;

        const descriptionInput = document.createElement("input");
        descriptionInput.value = todo.description;

        const dueDateInput = document.createElement("input");
        dueDateInput.type = "date";
        dueDateInput.value = todo.dueDate;

        const prioritySelect = document.createElement("select");

        ["low", "medium", "high"].forEach((priority) => {
          const option = document.createElement("option");
          option.value = priority;
          option.textContent = priority;

          if (priority === todo.priority) {
            option.selected = true;
          }

          prioritySelect.appendChild(option);
        });

        const saveButton = document.createElement("button");
        saveButton.type = "submit";
        saveButton.textContent = "Save";

        editForm.appendChild(titleInput);
        editForm.appendChild(descriptionInput);
        editForm.appendChild(dueDateInput);
        editForm.appendChild(prioritySelect);
        editForm.appendChild(saveButton);

        todoElement.appendChild(editForm);

        editForm.addEventListener("submit", (event) => {
          event.preventDefault();

          project.updateTodo(
            todo,
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            prioritySelect.value
          );

          saveProjects();
          renderProjects();
        });
      });

      deleteButton.addEventListener("click", () => {
        project.deleteTodo(todo);

        saveProjects();
        renderProjects();
      });

      todoElement.appendChild(todoSummary);
      todoElement.appendChild(todoDetails);
      todoElement.appendChild(editButton);
      todoElement.appendChild(deleteButton);

      projectElement.appendChild(todoElement);
    });

    projectsContainer.appendChild(projectElement);
  });
}

function renderProjectOptions() {
  const projectSelect = document.querySelector("#todo-project");

  projectSelect.innerHTML = "";

  projects.forEach((project, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = project.name;

    projectSelect.appendChild(option);
  });
}

export { renderProjects, renderProjectOptions };