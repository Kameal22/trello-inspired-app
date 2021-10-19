import React from 'react';
import {mockedBoards} from "../data/mockedBoards";
import {Typography} from "@mui/material";
import BoardList from "../components/BoardList/BoardList";

const AllBoardsPage = () => {
    return (
        <div>
            <Typography variant="h2" style={{textAlign: "center", marginBottom: 40}}>All boards:</Typography>
            <BoardList numberOfBoards={mockedBoards.length}/>
        </div>
    );
};

export default AllBoardsPage;