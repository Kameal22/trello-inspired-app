import React from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import useInputState from "../../../hooks/useInputState";
import DeleteIcon from '@mui/icons-material/Delete';

const TaskDetailsDialog = ({open, toggleDialog, task, editTask, deleteTask, columnId, boardMembers}) => {
    const [title, updateTitle, resetTitle, titleError, setTitleError] = useInputState(task.title);
    const [description, updateDescription, resetDescription] = useInputState(task.description);
    const [assignedTo, updateAssignedTo, resetAssignedTo] = useInputState(task.assignee != null ? task.assignee.userId : null);

    const closeDialog = () => {
        resetTitle(task.title);
        resetDescription(task.description);
        resetAssignedTo(task.assignedTo);
        toggleDialog();
    }

    const handleChangeTitle = e => {
        updateTitle(e);

        if (titleError && title) {
            setTitleError(false);
        }
    }

    const handleEditingTask = e => {
        e.preventDefault();
        if (!title) {
            setTitleError(true);
            return;
        }

        const editedTask = {
            title: title,
            description: description,
            assigneeId: assignedTo
        };
        editTask(editedTask, columnId, task.taskId);
        toggleDialog();
    }

    const boardMembersMenuItems = boardMembers.map(boardMember =>
        <MenuItem value={boardMember.userId} key={boardMember.userId}>
            {boardMember.name} {boardMember.surname}
        </MenuItem>);

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>
                {task.title}
                <DeleteIcon style={{float: "right", cursor: "pointer"}}
                            onClick={() => deleteTask(task.taskId, columnId)}/>
            </DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleEditingTask}>
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
                    <FormControl margin="normal" fullWidth>
                        <InputLabel id="assigned-to">Assigned to</InputLabel>
                        <Select labelId="assigned-to"
                                label="Assigned to"
                                value={assignedTo == null ? '' : assignedTo}
                                onChange={updateAssignedTo}>
                            <MenuItem value={''}>
                                <em>None</em>
                            </MenuItem>
                            {boardMembersMenuItems}
                        </Select>
                    </FormControl>
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