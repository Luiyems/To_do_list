
const STORAGE_KEY = "todo_tasks";
/*
Función para obtener tareas guardadas
*/
function getTasks() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error leyendo localStorage", error);
        return [];
    }
}
/*
Guardar tareas
*/
function saveTasks(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error guardando tareas", error);
    }
}
/*
Estado del filtro (sessionStorage)
*/
function saveFilterState(state) {
    sessionStorage.setItem("task_filter", state);
}
function getFilterState() {
    return sessionStorage.getItem("task_filter") === "true";
}