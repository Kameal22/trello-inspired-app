import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useInputState from "../../hooks/useInputState";

const TaskFormDialog = ({open, toggleDialog, addNewTask}) => {
    const [title, updateTitle, resetTitle] = useInputState("");
    const [description, updateDescription, resetDescription] = useInputState("");

    const closeDialog = () => {
        resetTitle();
        resetDescription();
        toggleDialog();
    }

    //TODO: handle getting response if board was successfully added
    const handleAddNewTask = e => {
        e.preventDefault()
        addNewTask(title, description);
        closeDialog();
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                Add new task
            </DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleAddNewTask}>
                    <TextField id="title"
                               label="Title"
                               value={title}
                               onChange={updateTitle}
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
                <Button variant="outlined" onClick={handleAddNewTask}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskFormDialog;