# My Todo

A project-based todo application built with JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

The application allows users to create projects, organize todos inside those projects, edit and delete both projects and todos, and persist data between browser sessions using `localStorage`.

## Live Demo

[View the live project](https://jahphetb.github.io/myTodo/)

## Features

- Create multiple projects
- Rename projects
- Delete projects
- Create todos
- Assign todos to specific projects
- View todos grouped by project
- Expand and collapse todo details
- Edit existing todos
- Delete todos
- Set todo:
  - Title
  - Description
  - Due date
  - Priority
- Save application data with `localStorage`
- Automatically restore projects and todos after refreshing the page
- Responsive, organized user interface
- Separate application logic from DOM manipulation

## Built With

- HTML
- CSS
- JavaScript
- JavaScript ES Modules
- Webpack
- Web Storage API (`localStorage`)
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
myTodo/
├── src/
│   ├── app.js
│   ├── dom.js
│   ├── index.js
│   ├── project.js
│   ├── styles.css
│   ├── template.html
│   └── todo.js
│
├── dist/
│   ├── index.html
│   └── main.js
│
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── package.json
└── README.md
```

### Main Modules

#### `todo.js`

Defines the `Todo` class used to create todo objects.

Each todo contains:

- title
- description
- due date
- priority

#### `project.js`

Defines the `Project` class.

A project contains its own array of todos and provides methods for operations such as:

- adding todos
- updating todos
- deleting todos

#### `app.js`

Handles application-level data and logic, including:

- storing projects
- creating projects
- renaming projects
- deleting projects
- saving data to `localStorage`
- loading data from `localStorage`

#### `dom.js`

Handles rendering and user-interface behavior.

Responsibilities include:

- rendering projects
- rendering todos
- showing todo details
- creating edit forms
- connecting UI controls to application logic
- updating project selection options

#### `index.js`

Acts as the application entry point.

It connects the forms and event listeners to the application's modules and starts the initial rendering process.

## Design Approach

One of the main goals of this project was to keep the code organized and maintainable.

Instead of putting all functionality into one JavaScript file, responsibilities were separated into modules.

For example:

```text
Todo data       → todo.js
Project logic   → project.js
App/data logic  → app.js
DOM/UI logic    → dom.js
Startup/events  → index.js
```

This separation makes the application easier to understand, debug, extend, and refactor.

The project also uses classes to model `Todo` and `Project` objects, providing a clearer object-oriented structure for managing application data.

## Local Storage

The application uses the browser's `localStorage` API to preserve projects and todos.

Before saving, the projects array is converted to JSON:

```js
localStorage.setItem("projects", JSON.stringify(projects));
```

When the application starts, the saved JSON is parsed and converted back into `Project` and `Todo` instances.

Reconstructing the objects is important because `JSON.parse()` creates plain JavaScript objects and does not restore class methods automatically.

## Getting Started

Clone the repository:

```bash
git clone git@github.com:jahphetB/myTodo.git
```

Move into the project directory:

```bash
cd myTodo
```

Install the dependencies:

```bash
npm install
```

Start the webpack development server:

```bash
npm run dev
```

Open the localhost URL provided by webpack in your browser.

## Available Scripts

### Development

```bash
npm run dev
```

Runs the application using `webpack-dev-server` and the development webpack configuration.

### Production Build

```bash
npm run build
```

Creates an optimized production build inside the `dist` directory.

## Webpack Configuration

The project separates webpack configuration by environment.

```text
webpack.common.js
webpack.dev.js
webpack.prod.js
```

### `webpack.common.js`

Contains configuration shared by development and production.

### `webpack.dev.js`

Adds development-specific settings such as:

```js
mode: "development"
```

and the webpack development server.

### `webpack.prod.js`

Adds production-specific configuration:

```js
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
});
```

This allows development and production concerns to stay separate while sharing common configuration.

# Deployment

The application is deployed using GitHub Pages.

The source code lives on the `main` branch, while the generated contents of the `dist` directory are published to the `gh-pages` branch.

## Clean Deployment Process

The normal deployment workflow should be performed from the `main` branch.

### 1. Make sure you are on `main`

```bash
git switch main
```

### 2. Build the production version

```bash
npm run build
```

Webpack generates:

```text
dist/
├── index.html
└── main.js
```

### 3. Commit the latest changes

Because `dist` may be ignored by Git, force-add it when necessary:

```bash
git add .
git add dist -f
git commit -m "Build project for deployment"
```

### 4. Push the source code

```bash
git push origin main
```

### 5. Publish `dist` to GitHub Pages

For a fresh deployment where the `gh-pages` branch does not already have conflicting history:

```bash
git subtree push --prefix dist origin gh-pages
```

This publishes only the contents of `dist` to the root of the `gh-pages` branch.

The deployed branch therefore contains:

```text
index.html
main.js
```

rather than the complete source project.

### 6. Configure GitHub Pages

In the GitHub repository, go to:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
```

Select:

```text
Branch: gh-pages
Folder: / (root)
```

Then save the configuration.

GitHub Pages will publish the site at:

```text
https://jahphetb.github.io/myTodo/
```

## Future Deployments

After making additional changes:

```bash
git switch main
npm run build
git add .
git add dist -f
git commit -m "Update project"
git push origin main
git subtree push --prefix dist origin gh-pages
```

The important architectural distinction is:

```text
main       → source code and development history
gh-pages   → generated production website
```

Development should happen on `main`. The `gh-pages` branch should be treated only as a deployment branch.

## What I Learned

This project provided practice with:

- ES6 modules
- Object-oriented programming
- Classes and object instances
- Separating application logic from UI logic
- DOM manipulation
- Event listeners
- Dynamic form creation
- Managing collections of objects
- Browser `localStorage`
- JSON serialization and deserialization
- Reconstructing class instances from stored data
- Webpack development and production configurations
- Git branching
- GitHub Pages deployment
- Maintaining a modular project structure

## Future Improvements

Possible improvements include:

- Add todo completion status
- Add visual indicators for priority levels
- Sort todos by due date or priority
- Add project deletion confirmation
- Prevent deletion of the default project
- Add form validation
- Improve accessibility
- Improve mobile responsiveness
- Add automated tests
- Refactor larger DOM functions into smaller reusable components
- Add date formatting with `date-fns`

## Acknowledgements

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.