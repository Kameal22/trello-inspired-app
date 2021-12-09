import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Grid} from "@mui/material";
import BoardIcon from "../BoardIcon/BoardIcon";
import AddIcon from "@mui/icons-material/Add";
import BoardFormDialog from "../BoardFormDialog/BoardFormDialog";
import {fetchAllBoards, postBoard} from "../../../services/board-service";
import {fetchAllBoardsForUser} from "../../../services/user-service";
import {AuthContext} from "../../../contexts/AuthContext";
import {fetchAllBoardsForTeam} from "../../../services/team-service";

const addButtonStyle = {
    height: 150,
    display: 'flex',
    justifyContent: 'center'
};

const BoardList = ({userId, teamId}) => {
    const [boards, setBoards] = useState([]);
    const [open, setOpen] = useState(false);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        const fetchBoards = async () => {
            const boards = await fetchAllBoards();
            setBoards(boards);
        }
        const fetchBoardsForUser = async () => {
            const boards = await fetchAllBoardsForUser(userId, token);
            setBoards(boards);
        }
        const fetchBoardsForTeam = async () => {
            const boards = await fetchAllBoardsForTeam(teamId, token);
            setBoards(boards);
        }
        //TODO: this probably could be done better
        if (userId) {
            fetchBoardsForUser();
        } else if (teamId) {
            fetchBoardsForTeam();
        } else {
            fetchBoards();
        }
    }, [])

    const addNewBoard = async (name, description) => {
        const newBoard = {
            name: name,
            description: description
        }

        postBoard(newBoard, token)
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