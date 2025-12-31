function Project({ project , deleteProject }) {
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
    </div>
);
}
export default Project;