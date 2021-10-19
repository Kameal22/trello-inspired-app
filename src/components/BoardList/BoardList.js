import React, {useState} from 'react';
import {Button, Card, Grid} from "@mui/material";
import BoardIcon from "../BoardIcon/BoardIcon";
import AddIcon from "@mui/icons-material/Add";
import {mockedBoards} from "../../data/mockedBoards";

const BoardList = ({numberOfBoards}) => {
    const [boards, setBoards] = useState(mockedBoards.slice(0, numberOfBoards));

    //TODO: change it to send post to database and open popup window
    const handleNewBoard = () => {
        const newBoard = {
            boardId: boards[boards.length - 1].boardId + 1,
            name: "Added mocked board",
            description: "New description"
        }

        setBoards([...boards, newBoard]);
    }

    return (
        <Grid container spacing={{xs: 3, md: 10}} columns={{xs: 4, sm: 10, md: 12}} justify="center">
            {boards.map(board => (
                <Grid item xs={4} sm={4} md={3} key={board.boardId}>
                    <BoardIcon {...board}/>
                </Grid>))}
            <Grid item xs={4} sm={4} md={3}>
                <Card sx={{
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(217,217,252,0.44)'
                }}>
                    <Button style={{width: '100%'}} onClick={handleNewBoard}>
                        <AddIcon/>
                    </Button>
                </Card>
            </Grid>
        </Grid>
    );
};

export default BoardList;