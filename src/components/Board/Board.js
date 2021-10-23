import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {mockedColumns} from "../../data/mockedColumns";
import Column from "../Column/Column";

const Board = ({boardId}) => {
    const [columns, setColumns] = useState(mockedColumns);

    const columnItems = columns.map(column => <Grid style={{marginLeft: 15}} item xs={8} md={4} xl={2}>
        <Column {...column} />
    </Grid>);

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h3" style={{height: '10%'}}>Hello! You are on board with board
                id {boardId}</Typography>
            <Grid container style={{flexGrow: 1}} wrap="nowrap">
                {columnItems}
            </Grid>
        </div>
    );
};

export default Board;