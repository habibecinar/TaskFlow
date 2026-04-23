function Project({ project, deleteProject, addTask, deleteTask, updateTaskStatus }) {
    return (
        <div>
            <h2>
                {project.name}
                <button onClick={() => deleteProject(project.id)}>Delete</button>
            </h2>
            <ul>
                {project.tasks.map(task => (
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