import React from 'react';
import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useInputState from "../../hooks/useInputState";

const NewTeamDialog = ({open, toggleDialog, addNewTeam}) => {
    const [name, updateName, resetName, nameError, setNameError] = useInputState("");

    const closeDialog = () => {
        resetName();
        toggleDialog();
    }

    const handleAddNewTeam = e => {
        e.preventDefault();
        if (!name) {
            setNameError(true);
            return;
        }

        setNameError(false);
        addNewTeam(name);
        closeDialog();
    }

    const handleChangeName = e => {
        updateName(e);

        if (nameError && name) {
            setNameError(false);
        }
    }

    return (
        <Dialog open={open} onClose={closeDialog} fullWidth>
            <DialogTitle>
                Add new team
            </DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleAddNewTeam}>
                    <TextField id="name"
                               label="Name"
                               value={name}
                               onChange={handleChangeName}
                               variant="outlined"
                               fullWidth
                               autoComplete="off"
                               margin="normal"
                               autoFocus
                               error={nameError}/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={closeDialog}>Cancel</Button>
                <Button variant="outlined" onClick={handleAddNewTeam}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewTeamDialog;