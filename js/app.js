
let tasks = getTasks();
function addTask(text) {
    const task = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(task);
    saveTasks(tasks);
    updateUI();
}
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    saveTasks(tasks);
    updateUI();
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks(tasks);
    updateUI();
}
function updateUI() {
    const filter = getFilterState();
    renderTasks(tasks, filter);
}
document.getElementById("task-form")
    .addEventListener("submit", e => {
        e.preventDefault();
        const input = document.getElementById("task-input");
        addTask(input.value);
        input.value = "";
    });
document.getElementById("filter-today")
    .addEventListener("change", e => {
        saveFilterState(e.target.checked);
        updateUI();
    });
updateUI();