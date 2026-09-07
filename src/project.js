class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo) {
    const todoIndex = this.todos.indexOf(todo);

    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    }
  }

  updateTodo(todo, title, description, dueDate, priority) {
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.priority = priority;
  }
}

export default Project;