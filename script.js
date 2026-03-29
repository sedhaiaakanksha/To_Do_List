const toDoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const toDoList = document.getElementById("todo-list");

let tasks = [];
addTaskBtn.addEventListener("click", function () {
  const taskText = toDoInput.value.trim();
  if (taskText === "") return;
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  task.push(newTask);
  saveTask();
  toDoInput.value = ""; //clears the input field
  console.log(tasks);
});

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
