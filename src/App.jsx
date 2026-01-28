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
                    />
                ))}
            </div>
            <button onClick={addProject}>Add Project</button>
        </div>
        
    );
}
export default App;