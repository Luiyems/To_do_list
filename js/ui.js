function renderTasks(tasks, filterActive) {
    const list = document.getElementById("task-list");
    list.innerHTML = "";
    let filtered = tasks;
    if (filterActive) {
        filtered = tasks.filter(task => !task.completed);
    }
    filtered.forEach(task => {
        const li = document.createElement("li");
        /* TEXTO DE LA TAREA */
        const span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
            span.classList.add("completed");
        }
        /* CHECKBOX PARA MARCAR TAREA */
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        /* MENSAJE FLOTANTE */
        checkbox.title = "Marcar tarea como realizada";
        checkbox.onchange = () => toggleTask(task.id);
        /* BOTÓN ELIMINAR */
        const del = document.createElement("button");
        del.textContent = "Eliminar";
        del.onclick = () => deleteTask(task.id);
        /* ORDEN DE LOS ELEMENTOS */
        li.appendChild(span);
        li.appendChild(checkbox);
        li.appendChild(del);
        list.appendChild(li);
    });
}