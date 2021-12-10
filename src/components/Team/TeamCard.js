import React, {useContext, useState} from 'react';
import {Button, Card, Typography} from "@mui/material";
import './TeamCard.css';
import {AuthContext} from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom";
import {joinTeam} from "../../services/team-service";
import ConfirmDeleteDialog from "../ConfirmDeleteDialog";
import DeleteIcon from "@mui/icons-material/Delete";

const deleteIconStyle = {
    cursor: "pointer",
    marginRight: 20
};

const TeamCard = ({teamId, members, name, deleteTeam}) => {
    const {token, isAuthenticated, getUser} = useContext(AuthContext);
    const history = useHistory();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const toggleDeleteDialog = () => {
        setDeleteDialogOpen(!deleteDialogOpen);
    }

    const handleJoinTeam = () => {
        joinTeam(teamId, getUser().id, token)
            .then(openTeam);
    }

    const openTeam = () => {
        history.push(`/main-page/teams/${teamId}/boards`);
    }

    let buttons;
    if (isAuthenticated()) {
        const user = getUser();

        if (members.some(member => member.userId === user.id)) {
            buttons = <>
                <DeleteIcon style={deleteIconStyle} onClick={toggleDeleteDialog} fontSize="large"/>
                <Button
                    variant="outlined"
                    sx={{color: "white"}}
                    onClick={openTeam}>
                    Open team
                </Button>
            </>
        } else {
            buttons = <Button
                variant="outlined"
                sx={{color: "white"}}
                onClick={handleJoinTeam}>
                Join team
            </Button>
        }
    }

    const memberCount = members.length;
    return (
        <Card variant="outlined" sx={{
            backgroundColor: "rgb(62,60,60)",
            color: "white",
            marginBottom: 4
        }}>
            <div className="team-card">
                <div className="team-card-info">
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="p"
                                sx={{marginRight: 1}}>{memberCount} member{memberCount > 1 && "s"}</Typography>
                </div>
                <div className="team-card-button">
                    {buttons}
                </div>
            </div>
            <ConfirmDeleteDialog
                open={deleteDialogOpen}
                deleteFunction={deleteTeam}
                toggleDialog={toggleDeleteDialog}
                itemId={teamId}
                name={name}
            />
        </Card>
    );
};

export default TeamCard;