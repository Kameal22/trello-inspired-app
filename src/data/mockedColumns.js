export const mockedColumns = [
    {
        columnId: 0,
        name: 'TODO',
        tasks:
            [
                {
                    taskId: 1,
                    title: "Do this",
                    description: "Just do it",
                    assignedTo: "Łukasz"
                },
                {
                    taskId: 2,
                    title: "Do this also",
                    description: "Please do it",
                    assignedTo: null
                },
                {
                    taskId: 3,
                    title: "And do this",
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
                    title: "Task in progress",
                    description: "Just do it",
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
                title: "Well done",
                description: "You did great",
                assignedTo: "Martyna"
            },
            {
                taskId: 6,
                title: "You also did well",
                description: "Nice",
                assignedTo: "Łukasz"
            }
        ]
    }
]