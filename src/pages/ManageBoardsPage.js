import React, {useContext, useEffect, useState} from 'react';
import BoardAccordion from "../components/Board/BoardAccordion/BoardAccordion";
import {ADMIN_ROLE} from "../utils/RoleUtils";
import {postAdminRights} from "../services/board-service";
import {NO_CONTENT} from "../constants/http_statuses";
import {fetchAllBoardsAndMembersForUser} from "../services/user-service";
import {AuthContext} from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";

const ManageBoardsPage = ({userId}) => {
    const [boards, setBoards] = useState([]);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        const fetchBoards = async () => {
            const boards = await fetchAllBoardsAndMembersForUser(userId, token);
            setBoards(boards);
        }
        fetchBoards();
    }, [])

    const addAdminRights = (userId, boardId) => {
        postAdminRights(boardId, userId, token)
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
            <PageTitle text="Manage boards:"/>
            {boardAccordions}
        </div>
    );
};

export default ManageBoardsPage;