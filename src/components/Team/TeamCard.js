import React, {useContext} from 'react';
import {Button, Card, Typography} from "@mui/material";
import './TeamCard.css';
import {AuthContext} from "../../contexts/AuthContext";

const TeamCard = (team) => {
    const {isAuthenticated, getUser} = useContext(AuthContext);

    let button;

    if (isAuthenticated()) {
        const user = getUser();

        if (team.members.some(member => member.userId === user.id)) {
            button = <Button variant="outlined" sx={{color: "white"}}>Open team</Button>
        } else {
            button = <Button variant="outlined" sx={{color: "white"}}>Join team</Button>
        }
    }

    const memberCount = team.members.length;
    return (
        <Card variant="outlined" sx={{
            backgroundColor: "rgb(62,60,60)",
            color: "white",
            marginBottom: 4
        }}>
            <div className="team-card">
                <div className="team-card-info">
                    <Typography variant="h4">{team.name}</Typography>
                    <Typography variant="p" sx={{marginRight: 1}}>{memberCount} member{memberCount > 1 && "s"}</Typography>
                </div>
                <div className="team-card-button">
                    {button}
                </div>
            </div>
        </Card>
    );
};

export default TeamCard;