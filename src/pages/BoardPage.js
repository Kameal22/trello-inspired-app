import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {mockedColumns} from "../data/mockedColumns";
import Column from "../components/Column/Column";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

const BoardPage = ({boardId}) => {
    const [columns, setColumns] = useState(mockedColumns);

    const columnItems = columns.map(column =>
        <Grid key={column.columnId}
              style={{marginLeft: 15}}
              item
              xs={8} md={4} xl={2}>
            <Droppable droppableId={column.columnId.toString()}>
                {provided => (
                        <Column {...column} provided={provided}/>
                )}
            </Droppable>
        </Grid>);

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <DragDropContext>
                <Typography variant="h3" style={{height: '10%'}}>Hello! You are on board with board
                    id {boardId}</Typography>
                <Grid container style={{flexGrow: 1}} wrap="nowrap">
                    {columnItems}
                </Grid>
            </DragDropContext>
        </div>
    );
};

export default BoardPage;