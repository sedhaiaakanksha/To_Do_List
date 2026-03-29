document.addEventListener("DOMContentLoaded", () => {
  const toDoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const toDoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask());

  addTaskBtn.addEventListener("click", function () {
    const taskText = toDoInput.value.trim();
    if (taskText === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    toDoInput.value = ""; //clears the input field
    console.log(tasks);
  });

  function renderTask(task) {
    console.log(task);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
