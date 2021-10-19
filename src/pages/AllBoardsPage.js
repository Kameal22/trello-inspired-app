import React, {useState} from 'react';
import {mockedBoards} from "../data/mockedBoards";
import {Button, Card, Grid} from "@mui/material";
import BoardIcon from "../components/BoardIcon/BoardIcon";
import AddIcon from '@mui/icons-material/Add';

const AllBoardsPage = () => {
    const [boards] = useState(mockedBoards)

    const handleNewBoard = () => {
        //TODO add showing popup window with adding board form
        console.log("Adding new board")
    }

    return (
        <Grid container spacing={{xs: 3, md: 10}} columns={{xs: 4, sm: 10, md: 12}} justify="center">
            {boards.map(board => (
                <Grid item xs={4} sm={4} md={3} key={board.boardId}>
                    <BoardIcon {...board}/>
                </Grid>))}
            <Grid item xs={4} sm={4} md={3}>
                <Card sx={{height: 150, display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(217,217,252,0.44)'}}>
                    <Button style={{width: '100%'}} onClick={handleNewBoard}>
                        <AddIcon/>
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default AllBoardsPage;