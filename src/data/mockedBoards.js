export const mockedBoards = [
    {
        boardId: 1,
        name: "Mocked board 1",
        description: "Some description",
        users:
            [
                {
                    userId: 1,
                    name: "Łukasz",
                    taskCount: 4,
                    joinedDate: "12.11.2021",
                    role: "ADMIN"
                },
                {
                    userId: 2,
                    name: "Marta",
                    taskCount: 3,
                    joinedDate: "10.11.2021",
                    role: "MEMBER"
                },
                {
                    userId: 3,
                    name: "Kamil",
                    taskCount: 0,
                    joinedDate: "04.05.2021",
                    role: "MEMBER"
                }
            ]
    },
    {
        boardId: 2,
        name: "Mocked board 2",
        description: "Some description",
        users:
            [
                {
                    userId: 4,
                    name: "Michał",
                    taskCount: 4,
                    joinedDate: "13.11.2021",
                    role: "MEMBER"
                },
                {
                    userId: 5,
                    name: "Grzegorz",
                    taskCount: 2,
                    joinedDate: "10.11.2021",
                    role: "ADMIN"
                }
            ]
    },
    {
        boardId: 3,
        name: "Another mocked board",
        description: "Another description",
        users: []
    },
    {
        boardId: 4,
        name: "Board",
        description: "Board description",
        users:
            [
                {
                    userId: 6,
                    name: "Kasia",
                    taskCount: 14,
                    joinedDate: "05.11.2021",
                    role: "MEMBER"
                }
            ]
    },
    {
        boardId: 5,
        name: "Mocked board 3",
        description: "Description description",
        users: []
    },
    {
        boardId: 6,
        name: "Pjatk board",
        description: "Pjatk description",
        users: []
    },
    {
        boardId: 7,
        name: "Test",
        description: "",
        users: []
    },
]