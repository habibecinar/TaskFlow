import { useState } from "react";

function Project({ project, deleteProject, addTask, deleteTask, updateTaskStatus }) {
    const [filter, setFilter] = useState("all");

    const filteredTasks =
        filter === "all"
            ? project.tasks
            : project.tasks.filter((task) => task.status === filter);

    return (
        <div>
            <h2>
                {project.name}
                <button onClick={() => deleteProject(project.id)}>Delete</button>
            </h2>
            <div style={{ marginBottom: '10px' }}>
                <label>Task Durumu Filtrele: </label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all">Tümü</option>
                    <option value="todo">Todo</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        {task.title} - {task.status}
                        <button style={{marginLeft: '10px'}} onClick={() => deleteTask(project.id, task.id)}>Sil</button>
                        <button style={{marginLeft: '10px'}} onClick={() => updateTaskStatus(project.id, task.id)}>Durumu Değiştir</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addTask(project.id)}>Add Task</button>
        </div>
    );
}
export default Project;