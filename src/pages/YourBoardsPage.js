import React from 'react';
import BoardList from "../components/Board/BoardList/BoardList";
import {Typography} from "@mui/material";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const YourBoardsPage = () => {
    return (
        <div>
            {/*TODO: refactor this so it will use text in Typography from some boolean variable added as prop"*/}
            <Typography variant="h2" style={boardsPageStyle}>Your boards:</Typography>
            <BoardList numberOfBoards={3}/>
        </div>
    );
};

export default YourBoardsPage;