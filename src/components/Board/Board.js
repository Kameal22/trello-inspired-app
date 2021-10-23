import React from 'react';
import {Box, List, ListItem, Typography} from "@mui/material";

const Board = ({boardId}) => {
    return (
        <div style={{height: '100vh', margin: 0, padding: 0}}>
            <Typography variant="h3">Hello! You are on board with board id {boardId}</Typography>
            <Box>
                <List style={{overflow: "auto"}}>
                    <ListItem>
                        <div style={{width: '500px', backgroundColor: "blue"}}>

                        </div>
                    </ListItem>
                </List>
            </Box>
        </div>
    );
};

export default Board;