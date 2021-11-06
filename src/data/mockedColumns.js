export const mockedColumns = [
    {
        columnId: 0,
        name: 'TODO',
        tasks:
            [
                {
                    taskId: 1,
                    title: "Write backend",
                    description: "Backend should be implemented",
                    assignedTo: "Łukasz"
                },
                {
                    taskId: 2,
                    title: "Create database",
                    description: "Use h2 in memory or connect to pjakt database",
                    assignedTo: null
                },
                {
                    taskId: 3,
                    title: "Implement security",
                    description: "",
                    assignedTo: "Katarzyna"
                }
            ]
    },
    {
        columnId: 1,
        name: 'In progress',
        tasks:
            [
                {
                    taskId: 4,
                    title: "Finish frontend",
                    description: "Use mocked data",
                    assignedTo: null
                }
            ]
    },
    {
        columnId: 2,
        name: 'Waiting',
        tasks: []
    },
    {
        columnId: 3,
        name: 'Done',
        tasks: [
            {
                taskId: 5,
                title: "Create sidebar",
                description: "Sidebar should be displayed on the left",
                assignedTo: "Martyna"
            },
            {
                taskId: 6,
                title: "Allow adding new tasks",
                description: "",
                assignedTo: "Łukasz"
            }
        ]
    }
]