import initialProjects from "./data/mockData";
import { useState } from "react";

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
    return (
        <div>   
            <h1>Project List</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                      
                    </li>
                ))}
            </ul>
            <button onClick={addProject}>Add Project</button>
        </div>
        
    );
}
export default App;