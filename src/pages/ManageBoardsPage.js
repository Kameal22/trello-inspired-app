import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import BoardAccordion from "../components/Board/BoardAccordion/BoardAccordion";
import {ADMIN_ROLE} from "../utils/RoleUtils";
import {fetchAllBoards, fetchBoardMembers, postAdminRights} from "../services/board-service";
import {NO_CONTENT} from "../constants/http_statuses";
import {fetchAllBoardsAndMembersForUser} from "../services/user-service";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const ManageBoardsPage = ({userId}) => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchBoards = async () => {
            const boards = await fetchAllBoardsAndMembersForUser(userId);
            setBoards(boards);
        }
        fetchBoards();
    }, [])

    const addAdminRights = (userId, boardId) => {
        postAdminRights(boardId, userId)
            .then(status => {
                if (status === NO_CONTENT) {
                    const changedUsers = boards.find(board => board.boardId === boardId).members
                        .map(user => user.userId === userId ? {...user, role: ADMIN_ROLE} : user);
                    setBoards(boards.map(board => board.boardId === boardId ? {
                        ...board,
                        members: changedUsers
                    } : board));
                }
            });
    }

    const boardAccordions = boards.map(board => <BoardAccordion key={board.boardId}
                                                                name={board.name}
                                                                boardId={board.boardId}
                                                                members={board.members}
                                                                addAdminRights={addAdminRights}/>);
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>Manage boards:</Typography>
            {boardAccordions}
        </div>
    );
};

export default ManageBoardsPage;