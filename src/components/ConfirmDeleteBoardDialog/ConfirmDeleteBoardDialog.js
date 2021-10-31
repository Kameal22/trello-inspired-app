import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const ConfirmDeleteBoardDialog = ({open, toggleDialog, boardId, deleteBoard}) => {
    return (
        <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>
                Do you really want to delete board with id {boardId}?
            </DialogTitle>
            <DialogActions style={{justifyContent: "center"}}>
                <Button variant="contained" color="error" onClick={() => deleteBoard(boardId)}>Yes</Button>
                <Button variant="outlined" onClick={toggleDialog}>No</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDeleteBoardDialog;