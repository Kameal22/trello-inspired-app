import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import BoardAccordion from "../components/Board/BoardAccordion/BoardAccordion";
import {ADMIN_ROLE} from "../utils/RoleUtils";
import {fetchAllBoards, fetchBoardMembers, postAdminRights} from "../services/board-service";
import {NO_CONTENT} from "../constants/http_statuses";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const ManageBoardsPage = () => {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchBoards = async () => {
            //TODO: Fetch boards for specific users here
            const boards = await fetchAllBoards();
            //TODO: Think about axios.all
            for (const board of boards) {
                board.members = await fetchBoardMembers(board.boardId);
            }
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