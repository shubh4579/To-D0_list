const textArea = document.getElementById("input-box");
const button = document.querySelector(".addbtn");
const todolist = document.querySelector(".todolist");

button.addEventListener("click", addToDoListItem);

function addToDoListItem() {
  const inputValue = textArea.value.trim();
  if (inputValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Create main todo item div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo-item");

  // Add task text
  tododiv.textContent = inputValue;

  // Add delete span (×)
  const span = document.createElement("span");
  span.innerHTML = "&times;";
  tododiv.appendChild(span);

  // Append to list
  todolist.appendChild(tododiv);

  // Clear input
  textArea.value = "";

  // Toggle checked on click
  tododiv.addEventListener("click", function () {
    tododiv.classList.toggle("checked");
  });

  // Delete on span click
  span.addEventListener("click", function (e) {
    e.stopPropagation();
    tododiv.remove();
  });
}
