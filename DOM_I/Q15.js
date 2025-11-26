// Selecting input, button, and task list
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// Add Task button functionality
addBtn.addEventListener("click", function () {
  
  // Prevent adding empty tasks
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Creating <li> for the task
  let li = document.createElement("li");
  li.textContent = taskText;

  // Creating Complete button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";

  // Mark task as completed
  completeBtn.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  // Creating Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Remove task when Delete is clicked
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append buttons to <li>
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // Add <li> to the task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});
