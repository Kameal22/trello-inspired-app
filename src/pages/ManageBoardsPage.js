import React from 'react';
import {Typography} from "@mui/material";
import {mockedBoards} from "../data/mockedBoards";
import BoardAccordion from "../components/Board/BoardAccordion/BoardAccordion";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const ManageBoardsPage = () => {
    const boardAccordions = mockedBoards.map(board => <BoardAccordion key={board.boardId}
                                                                      name={board.name}
                                                                      users={board.users}/>);
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>Manage boards:</Typography>
                {boardAccordions}
        </div>
    );
};

export default ManageBoardsPage;