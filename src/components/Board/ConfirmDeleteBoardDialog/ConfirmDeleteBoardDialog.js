import React from 'react';
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";

const ConfirmDeleteBoardDialog = ({open, toggleDialog, boardId, name, deleteBoard}) => {

    const handleDeletingBoard = () => {
        deleteBoard(boardId)
        toggleDialog();
    }

    return (
        <Dialog open={open} onClose={toggleDialog} fullWidth>
            <DialogTitle>
                Do you really want to delete board {name}?
            </DialogTitle>
            <DialogActions style={{justifyContent: "center"}}>
                <Button variant="contained" color="error" onClick={handleDeletingBoard}>Yes</Button>
                <Button variant="outlined" onClick={toggleDialog}>No</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteBoardDialog;