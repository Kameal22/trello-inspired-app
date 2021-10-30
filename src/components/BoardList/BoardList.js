import React, {useState} from 'react';
import {Button, Card, Grid} from "@mui/material";
import BoardIcon from "../BoardIcon/BoardIcon";
import AddIcon from "@mui/icons-material/Add";
import {mockedBoards} from "../../data/mockedBoards";
import BoardFormDialog from "../BoarFormDialog/BoardFormDialog";

const BoardList = ({numberOfBoards}) => {
    const [boards, setBoards] = useState(mockedBoards.slice(0, numberOfBoards));
    const [open, setOpen] = useState(false);

    //TODO: change it to send post to database and open popup window
    const addNewBoard = (name, description) => {
        const newBoard = {
            boardId: boards[boards.length - 1].boardId + 1,
            name: name,
            description: description
        }

        setBoards([...boards, newBoard]);
    }

    const toggleDialog = () => {
        setOpen(!open);
    }

    const boardsMapped = boards.map(board => (
        <Grid item xs={4} sm={4} md={3} key={board.boardId}>
            <BoardIcon {...board}/>
        </Grid>))

    return (
        <Grid container spacing={{xs: 3, md: 10}} columns={{xs: 4, sm: 10, md: 12}} justify="center">
            {boardsMapped}
            <Grid item xs={4} sm={4} md={3}>
                <Card sx={{
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Button style={{width: '100%'}} onClick={toggleDialog}>
                        <AddIcon/>
                    </Button>
                </Card>
            </Grid>
            <BoardFormDialog open={open} toggleDialog={toggleDialog} addNewBoard={addNewBoard}/>
        </Grid>
    );
};

export default BoardList;