import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useInputState from "../../hooks/useInputState";

const BoardFormDialog = ({open, toggleDialog, addNewBoard}) => {
    const [name, updateName, resetName] = useInputState("");
    const [description, updateDescription, resetDescription] = useInputState("");

    const closeDialog = () => {
        resetName();
        resetDescription();
        toggleDialog();
    }

    //TODO: handle getting response if board was successfully added
    const handleAddNewBoard = () => {
        addNewBoard(name, description);
        closeDialog();
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                Add new board
            </DialogTitle>
            <DialogContent>
                <Box component="form">
                    <TextField id="title"
                               label="Board name"
                               value={name}
                               onChange={updateName}
                               variant="outlined"
                               fullWidth
                               autoComplete="off"
                               margin="normal"
                               autoFocus/>
                    <TextField id="description"
                               label="Description"
                               value={description}
                               onChange={updateDescription}
                               multiline fullWidth
                               autoComplete="off"
                               margin="normal" rows={2}/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={closeDialog}>Cancel</Button>
                <Button variant="outlined" onClick={handleAddNewBoard}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default BoardFormDialog;