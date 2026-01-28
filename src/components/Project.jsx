function Project({ project , deleteProject, addTask }) {
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
                </li>

            ))}
        </ul>
        <button onClick={() => addTask(project.id)}>Add Task</button>
    </div>
);
}
export default Project;