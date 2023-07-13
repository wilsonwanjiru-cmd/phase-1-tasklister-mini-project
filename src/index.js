document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
form.addEventListener("submit", function(event) {
  // Prevent the default behavior of the form submit event.
  event.preventDefault();

  // Get the task description from the input field.
  const taskDescription = document.getElementById("new-task-description").value;

  // Add the task to the DOM.
  const tasksList = document.getElementById("tasks");
  const listItem = document.createElement("li");
  listItem.textContent = taskDescription;
  tasksList.appendChild(listItem);
});
});
