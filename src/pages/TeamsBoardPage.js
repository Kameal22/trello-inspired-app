import React from 'react';
import {Typography} from "@mui/material";
import BoardList from "../components/Board/BoardList/BoardList";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const TeamsBoardPage = ({teamId}) => {
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>
                Teams boards
            </Typography>
            <BoardList teamId={teamId}/>
        </div>
    );
};

export default TeamsBoardPage;