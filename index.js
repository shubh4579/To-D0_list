const input = document.querySelector("#input-box");

const button = document.querySelector(".addbtn");

const todo = document.querySelector(".todolist");

let task = JSON.parse(localStorage.getItem("task")) || [];

function saveTask() {
  localStorage.setItem("task", JSON.stringify(task));
}

function renderTask() {
  todo.innerHTML = "";

  task.forEach((tasks, index) => {
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo-item");
    if (tasks.completed) {
      tododiv.classList.add("checked");
    }

    tododiv.textContent = tasks.text;
    const span = document.createElement("span");
    span.innerHTML = "&times;";
    tododiv.appendChild(span);
    todo.appendChild(tododiv);

    tododiv.addEventListener("click", function () {
      task[index].completed = !task[index].completed;
      saveTask();
      renderTask();
    });
    span.addEventListener("click", function (e) {
      e.stopPropagation();
      task.splice(index, 1);
      saveTask();
      renderTask();
    });
  });
}

function addToDoListItem() {
  const inputValue = input.value.trim();
  if (inputValue == "") {
    alert("Add task first");
    return;
  }

  const newTask = {
    text: input.value,
    completed: false,
  };
  task.push(newTask);
  saveTask();
  renderTask();
  input.value = "";
}
button.addEventListener("click", addToDoListItem);
renderTask();
