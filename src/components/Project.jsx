function Project({ project }) {
    return (
        <div>
            <h2>{project.name}</h2>
            <ul>
                {project.tasks.map(task => (
                    <li key={task.id}>{task.title} - {task.status}</li>
                ))}
            </ul>
        </div>
    );
}
export default Project;