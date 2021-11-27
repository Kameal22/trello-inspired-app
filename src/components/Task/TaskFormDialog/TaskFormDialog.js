import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useInputState from "../../../hooks/useInputState";

const TaskFormDialog = ({open, toggleDialog, addNewTask, columnId}) => {
    const [title, updateTitle, resetTitle, titleError, setTitleError] = useInputState("");
    const [description, updateDescription, resetDescription] = useInputState("");

    const closeDialog = () => {
        resetTitle();
        resetDescription();
        toggleDialog();
    }

    const handleChangeTitle = e => {
        updateTitle(e);

        if (titleError && title) {
            setTitleError(false);
        }
    }

    const handleAddNewTask = e => {
        e.preventDefault()
        if (!title) {
            setTitleError(true);
            return;
        }

        setTitleError(false);
        const task = {
            title: title,
            description: description
        }
        addNewTask(task, columnId);
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
                               onChange={handleChangeTitle}
                               variant="outlined"
                               fullWidth
                               autoComplete="off"
                               margin="normal"
                               autoFocus
                               error={titleError}/>
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