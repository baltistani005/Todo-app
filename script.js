const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => li.classList.toggle("done"));

  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.className = "delete-btn";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}