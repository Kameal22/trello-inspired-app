import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import useInputState from "../../hooks/useInputState";
import DeleteIcon from '@mui/icons-material/Delete';

const TaskDetailsDialog = ({open, toggleDialog, task, editTask, deleteTask, columnId}) => {

    const [title, updateTitle, resetTitle] = useInputState(task.title);
    const [description, updateDescription, resetDescription] = useInputState(task.description);
    const [assignedTo, updateAssignedTo, resetAssignedTo] = useInputState(task.assignedTo);

    const closeDialog = () => {
        toggleDialog();
    }

    const handleEditingTask = e => {
        e.preventDefault();
        const editedTask = {
            taskId: task.taskId,
            title: title,
            description: description,
            assignedTo: assignedTo
        };
        editTask(editedTask, columnId);
        closeDialog();
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                {task.title}
                <DeleteIcon style={{float: "right"}} onClick={() => deleteTask(task.taskId, columnId)}/>
            </DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleEditingTask}>
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
                    <Typography>Assigned to: {assignedTo}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={closeDialog}>Cancel</Button>
                <Button variant="outlined" onClick={handleEditingTask}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDetailsDialog;