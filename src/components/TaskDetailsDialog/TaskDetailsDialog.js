import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

const TaskDetailsDialog = ({open, toggleDialog, task}) => {

    const closeDialog = () => {
        toggleDialog();
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                {task.title}
            </DialogTitle>
            <DialogContent>
                {/*TODO write forms to edit tasks. They should be stored in state, and initially taken from task object*/}
            </DialogContent>
            <DialogActions>
                <Button variant="outlined">Cancel</Button>
                <Button variant="outlined">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDetailsDialog;