// Helpers
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);
const create = (tag, content = null, attr = {}) => {
  const element = document.createElement(tag);
  element.innerHTML = content;
  Object.keys(attr).forEach((attribute) =>
    element.setAttribute(attribute, attr[attribute])
  );
  return element;
};
const read = (key, data = null) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return data;
};
const save = (key, data = null) => {
  localStorage.setItem(key, JSON.stringify(data));
  return read(key);
};

// Elements
let taskList = read("tareas", []);
const formAdd = create(
  "form",
  `<input type="text" id="task" placeholder="Ingresa una tarea"/>`
);
formAdd.className = "add";
document.body.append(formAdd);
const listTask = create("ul");
listTask.className = "tasks";
document.body.append(listTask);
const formRemoveAll = create(
  "form",
  `<button class="${
    taskList.length == 0 ? "hide" : ""
  }">Eliminar Tareas</button>`
);
document.body.append(formRemoveAll);

// Behaviours

const renderTask = (id, content) => {
  const task = create("li", `<span>${content}</span>`, {
    "data-id": id,
    class: "task",
  });
  const formRemove = create(
    "form",
    `<button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>`
  );
  formRemove.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("eliminar tarea");
    const element = event.target.parentElement;
    const taskId = element.dataset.id;
    let taskList = read("tareas", []);
    let sure = confirm(`Esta seguro de elimnar la tarea ${taskId}`);
    if (sure == true) {
      taskList = taskList.filter((task) => task.id != taskId);
    }
    save("tareas", taskList);
    renderListTask();
  });
  task.appendChild(formRemove);
  listTask.append(task);
};

const renderListTask = () => {
  let taskList = read("tareas", []);
  listTask.innerHTML = null;
  taskList.forEach((task) => renderTask(task.id, task.content));
  if (taskList.length > 0) {
    formRemoveAll.querySelector("button").classList.remove("hide");
  }
};

formAdd.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Agregando tarea");
  const input = event.target.elements.task;
  let content = input.value.trim();
  let taskList = read("tareas", []);
  if (content.length == 0) {
    return alert("La tarea no puede estar vacía");
  }
  if (
    taskList.some((task) => task.content.toLowerCase() == content.toLowerCase())
  ) {
    return alert("La tarea no se puede repetir");
  }

  taskList.push({ id: Date.now(), content });
  save("tareas", taskList);
  renderListTask();
});

renderListTask();
formRemoveAll.addEventListener("submit", function (event) {
  event.preventDefault();
  save("tareas", []);
  renderListTask();
  event.target.querySelector("button").classList.add("hide");
});
