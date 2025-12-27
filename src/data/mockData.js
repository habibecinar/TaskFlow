const projects = [
  {id:1,
    name: "Project Alpha",
    createdAt: "2023-01-15",
    tasks: [
      {id: 1, title: "Design UI", status: "done", createdAt: "2023-01-16"},
      {id: 2, title: "Set up database", status: "in-progress", createdAt: "2023-01-17"},
    ],
  },
  {
    id: 2,
    name: "Project Beta",
    createdAt: "2023-02-20",
    tasks: [
      {id: 1, title: "Implement authentication", status: "todo", createdAt: "2023-02-21"},
      {id: 2, title: "Create API endpoints", status: "in-progress", createdAt: "2023-02-22"},
    ],
  },
];

export default projects;