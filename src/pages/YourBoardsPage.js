import React from 'react';
import BoardList from "../components/BoardList/BoardList";
import {Typography} from "@mui/material";

const YourBoardsPage = () => {
    return (
        <div>
            <Typography variant="h2" style={{textAlign: "center", marginBottom: 40}}>Your boards:</Typography>
            <BoardList numberOfBoards={3}/>
        </div>
    );
};

export default YourBoardsPage;