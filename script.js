const toDoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const toDoList = document.getElementById("todo-list");

let task = [];
addTaskBtn.addEventListener("click", function () {
  const taskText = toDoInput.value.trim();
  if (taskText === "") return;
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  task.push(newTask);
  toDoInput.value = ""; //clears the input field
  console.log(task);
});
