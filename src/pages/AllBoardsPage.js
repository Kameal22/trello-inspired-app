import React from 'react';
import {Typography} from "@mui/material";
import BoardList from "../components/Board/BoardList/BoardList";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const AllBoardsPage = () => {
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>All boards:</Typography>
            <BoardList/>
        </div>
    );
};

export default AllBoardsPage;