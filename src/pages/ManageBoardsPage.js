import React, {useState} from 'react';
import {Typography} from "@mui/material";
import {mockedBoards} from "../data/mockedBoards";
import BoardAccordion from "../components/Board/BoardAccordion/BoardAccordion";
import {ADMIN_ROLE} from "../utils/RoleUtils";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const ManageBoardsPage = () => {
    const [boards, setBoards] = useState(mockedBoards);

    const addAdminRights = (userId, boardId) => {
        const changedUsers = boards.find(board => board.boardId === boardId).users
            .map(user => user.userId === userId ? {...user, role: ADMIN_ROLE} : user);

        setBoards(boards.map(board => board.boardId === boardId ? {...board, users: changedUsers} : board));
    }

    const boardAccordions = boards.map(board => <BoardAccordion key={board.boardId}
                                                                name={board.name}
                                                                boardId={board.boardId}
                                                                users={board.users}
                                                                addAdminRights={addAdminRights}/>);
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>Manage boards:</Typography>
            {boardAccordions}
        </div>
    );
};

export default ManageBoardsPage;