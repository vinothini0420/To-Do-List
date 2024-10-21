// Function to add task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
  
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
  
    taskList.appendChild(li);
    taskInput.value = "";
  }
  
  // Function to delete task
  function deleteTask(element) {
    const taskItem = element.parentNode;
    taskItem.remove();
  }
  
  // Function to mark task as completed
  function toggleComplete(element) {
    const taskItem = element.parentNode;
    taskItem.classList.toggle("completed");
  }
  