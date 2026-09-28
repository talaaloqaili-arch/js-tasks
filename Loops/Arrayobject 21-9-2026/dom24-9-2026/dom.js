let tasks = [
  { id: 1, text: "Check the rover battery", done: false },
  { id: 2, text: "Review the Mars landing map", done: true },
  { id: 3, text: "Brief Rania on the launch plan", done: false }
];

let nextId = 4;

const taskFormId = document.getElementById("task-form");
const taskInputId = document.getElementById("task-input");
const taskListId = document.getElementById("task-list");
const counterId = document.getElementById("counter");
const emptyMsgId = document.getElementById("empty-msg");
const clearDoneId = document.getElementById("clear-done");
const charCountId = document.getElementById("char-count");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderTasks() {
  taskListId.innerHTML = "";

  for(const task of tasks){

      if(currentFilter === "active" && task.done === true){
         continue;
      }

      if(currentFilter === "done" && task.done === false){
         continue;
      }

      const li = document.createElement("li");
      li.dataset.id = task.id;

      const span = document.createElement("span");
      span.textContent = task.text;
      span.classList.add("task-text");

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");

      li.appendChild(span);
      li.appendChild(deleteButton);

      if(task.done === true){
         li.classList.add("done");
      }

      taskListId.appendChild(li);
  }

  updateCounter();
}


function updateCounter() {
   let count = 0;
   
   for(const task of tasks){
         if(task.done === false){
            count++;
         }
   }

   counterId.textContent = count + " task(s) remaining";

   if(tasks.length === 0){
      emptyMsgId.classList.remove("hidden");
   }else {
      emptyMsgId.classList.add("hidden");
   }
}

function duplicate (desc){

   desc = desc.toLowerCase();

   for(const task of tasks){
      if(task.text.toLowerCase() === desc)
         return true;
   }

   return false;
}
taskFormId.addEventListener("submit", function(event) {
      event.preventDefault();
      const desc = taskInputId.value.trim();

      if(desc === "" || duplicate(desc)) {
         return;
      }

      let newTask = {
         id: nextId++,
         text: desc,
         done: false
      };

      tasks.push(newTask);

      taskInputId.value = "";
      charCountId.textContent = "0 / 50";

      renderTasks();
});


taskListId.addEventListener("click", function(event){

   const target = event.target;
   const li = target.parentElement;
   const id = Number(li.dataset.id);

   if(target.classList.contains("task-text")){
      for(const task of tasks){
         if(task.id === id){
            task.done = !task.done;
            break;
         }
      }
   }

   if (target.classList.contains("delete-btn")) {
      const newArray = [];
      
      for(const task of tasks){
         if (task.id !== id) {
            newArray.push(task);
         }
      }

      tasks = newArray;
   }

   renderTasks();
});


clearDoneId.addEventListener("click", function(){

   let newArray = [];
   
   for(const task of tasks){
      if(!task.done){
         newArray.push(task);
      }
   }
   tasks = newArray;
   renderTasks();
});


/* ============================================================
   BONUS CHALLENGES (for those who finish early)

   BONUS 3: FILTER BUTTONS (All / Active / Done)
   a) Create a variable: let currentFilter = "all";
   b) Select all buttons with the class "filter-btn"
      (querySelectorAll) and add a click listener to each
   c) On click: set currentFilter to the button's data-filter,
      move the "active" class to the clicked button, re-render
   d) In renderTasks, skip tasks that don't match the filter:
      "active" shows only not-done tasks
      "done"   shows only done tasks
      Hint: continue skips the current loop round
   ============================================================ */

taskInputId.addEventListener("input", function(){
   let count = taskInputId.value.length;
   charCountId.textContent = count + " / 50";
});

let currentFilter = "all";

filterButtons.forEach(function(button) {

   button.addEventListener("click", function() {

      currentFilter = button.dataset.filter;

      filterButtons.forEach(function(btn) {
         btn.classList.remove("active");
      });

      button.classList.add("active");

      renderTasks();

   });

});

renderTasks();