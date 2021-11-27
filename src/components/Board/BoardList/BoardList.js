import React, {useEffect, useState} from 'react';
import {Button, Card, Grid} from "@mui/material";
import BoardIcon from "../BoardIcon/BoardIcon";
import AddIcon from "@mui/icons-material/Add";
import BoardFormDialog from "../BoardFormDialog/BoardFormDialog";
import {fetchAllBoards, postBoard} from "../../../services/board-service";

const addButtonStyle = {
    height: 150,
    display: 'flex',
    justifyContent: 'center'
};

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchBoards = async () => {
            const boards = await fetchAllBoards();
            setBoards(boards);
        }
        fetchBoards();
    }, [])

    const addNewBoard = async (name, description) => {
        const newBoard = {
            name: name,
            description: description
        }

        postBoard(newBoard)
            .then(id => {
                newBoard.boardId = id;
                setBoards([...boards, newBoard]);
            });
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
                <Card sx={addButtonStyle}>
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