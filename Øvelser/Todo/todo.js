let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// Browseren bliver bet om at hente værdien, som ligger under tasks i local storage
//JSON.parse gør at hvis der er noget gemt , bliver det gemt som strings og laver det om til et array

const form = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");
const doneList = document.querySelector(".done-list");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", toggleDone);
doneList.addEventListener("click", toggleDone);

function addTask(e) {
  e.preventDefault();
  const text = form.task.value.trim();
  if (!text) return;

  const newTask = {
    id: crypto.randomUUID(),
    text,
    done: false,
  };

  tasks.push(newTask);
  saveAndRender();
  form.reset();
}

function toggleDone(e) {
  if (!e.target.matches("input[type=checkbox]")) return;

  const id = e.target.closest("li").dataset.id;
  const task = tasks.find((t) => t.id === id);

  task.done = !task.done;
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderLists();
}

function renderLists() {
  const active = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);

  taskList.innerHTML = active
    .map(
      (t) => `
      <li data-id="${t.id}">
        <input type="checkbox">
        <label>${t.text}</label>
      </li>`,
    )
    .join("");

  doneList.innerHTML = done
    .map(
      (t) => `
      <li data-id="${t.id}">
        <input type="checkbox" checked>
        <label>${t.text}</label>
      </li>`,
    )
    .join("");
}

renderLists();

// lave et lig element og lave et elemente for hver af dem i todoobj arrayet, ned i html'en og have knapper til.
// Så man kan lave done om til do og kalder filterAndSortTaskArr

//Tjekboksen skal fjerne sin funktionalitet og sætte det til done, brug prevent defaul til tjekboksen, så den ikke setter tjek, by default.
