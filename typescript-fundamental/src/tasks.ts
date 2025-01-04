const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTasks)

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput?.value;
  if (taskDescription) {
    console.log(taskDescription);
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // add task to list
    addTask(task);
    // renders tasks
    renderTasks(task);
    // update local storage
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task description");
});

function addTask(task: Task): void {
  tasks.push(task);
  console.log(tasks);
}

function renderTasks(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;
    taskListElement?.appendChild(taskElement);
    
    // checkbox
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.checked = task.isCompleted

    // toggle checkbox

    taskCheckbox.addEventListener('change', () => { 
        task.isCompleted = !task.isCompleted
        updateStorage()
    })

    taskElement.appendChild(taskCheckbox)
    taskListElement?.appendChild(taskElement)
}

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
