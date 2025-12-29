import projects from "./data/mockData";

function App() {
    return (
        <div>   
            <h1>Project List</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;