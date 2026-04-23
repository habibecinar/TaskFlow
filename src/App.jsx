import initialProjects from "./data/mockData";
import { useState } from "react";
import Project from "./components/Project";

function App() {
    const [projects, setProjects] = useState(initialProjects);
    const addProject = () => {
        const newProject = {
             id: Date.now(),
    name: `New Project`,
    createdAt: new Date().toISOString().split("T")[0],
    tasks: [],
        };
        setProjects((prev) => [...prev, newProject]);
    };
    function deleteProject(id) {
        setProjects((prev) => prev.filter((project) => project.id !== id));
    }
    
    function addTask(projectId) {
        const taskTitle = prompt("Task adı girin:");
        if (taskTitle) {
            setProjects((prev) =>
                prev.map((project) =>
                    project.id === projectId
                        ? {
                            ...project,
                            tasks: [
                                ...project.tasks,
                                {
                                    id: Date.now(),
                                    title: taskTitle,
                                    status: "todo",
                                    createdAt: new Date().toISOString().split("T")[0]
                                }
                            ]
                        }
                        : project
                )
            );
        }
    }

    function deleteTask(projectId, taskId) {
        setProjects((prev) =>
            prev.map((project) =>
                project.id === projectId
                    ? {
                        ...project,
                        tasks: project.tasks.filter((task) => task.id !== taskId)
                    }
                    : project
            )
        );
    }

    function updateTaskStatus(projectId, taskId) {
        const statusOrder = ["todo", "in-progress", "done"];
        setProjects((prev) =>
            prev.map((project) =>
                project.id === projectId
                    ? {
                        ...project,
                        tasks: project.tasks.map((task) =>
                            task.id === taskId
                                ? {
                                    ...task,
                                    status: statusOrder[(statusOrder.indexOf(task.status) + 1) % statusOrder.length]
                                }
                                : task
                        )
                    }
                    : project
            )
        );
    }
    return (
        <div>   
            <h1>Project List</h1>
            <div>
                {projects.map((project) => (
                    <Project 
                        key={project.id}
                        project={project}
                        deleteProject={deleteProject}
                        addTask={addTask}
                        deleteTask={deleteTask}
                        updateTaskStatus={updateTaskStatus}
                    />
                ))}
            </div>
            <button onClick={addProject}>Add Project</button>
        </div>
    );
}
export default App;