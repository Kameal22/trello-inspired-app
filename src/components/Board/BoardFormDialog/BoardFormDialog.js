import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useInputState from "../../../hooks/useInputState";

const BoardFormDialog = ({open, toggleDialog, addNewBoard}) => {
    const [name, updateName, resetName, nameError, setNameError] = useInputState("");
    const [description, updateDescription, resetDescription] = useInputState("");

    const closeDialog = () => {
        resetName();
        resetDescription();
        toggleDialog();
    }

    //TODO: handle getting response if board was successfully added
    const handleAddNewBoard = e => {
        e.preventDefault();
        if (!name) {
            setNameError(true);
            return;
        }

        setNameError(false);
        addNewBoard(name, description);
        closeDialog();
    }

    const handleChangeName = e => {
        updateName(e);

        if (nameError && name) {
            setNameError(false);
        }
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                Add new board
            </DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleAddNewBoard}>
                    <TextField id="title"
                               label="Name"
                               value={name}
                               onChange={handleChangeName}
                               variant="outlined"
                               fullWidth
                               autoComplete="off"
                               margin="normal"
                               autoFocus
                               error={nameError}/>
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