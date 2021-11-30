import React from 'react';
import {Typography} from "@mui/material";
import BoardList from "../components/Board/BoardList/BoardList";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const AllBoardsPage = ({userId}) => {
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>
                {userId ? "Subscribed boards" : "All boards:"}
            </Typography>
            <BoardList userId={userId}/>
        </div>
    );
};

export default AllBoardsPage;