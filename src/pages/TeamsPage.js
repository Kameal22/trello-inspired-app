import React, {useContext, useEffect, useState} from 'react';
import {fetchAllTeams, postTeam} from "../services/team-service";
import {Button, Card, Typography} from "@mui/material";
import TeamCard from "../components/Team/TeamCard";
import NewTeamDialog from "../components/Team/NewTeamDialog";
import {AuthContext} from "../contexts/AuthContext";

const teamsHeaderStyle = {
    textAlign: "center",
    marginBottom: 40
};

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [open, setOpen] = useState(false);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        fetchAllTeams()
            .then(teams => setTeams(teams));
    }, []);

    const toggleDialog = () => {
        setOpen(!open);
    }

    const addNewTeam = name => {
        postTeam({name: name}, token)
            .then(team => setTeams([...teams, team]))
    }

    const teamsMapped = teams.map(team => <TeamCard {...team} key={team.teamId}/>);
    return (
        <div>
            <Typography variant="h2" style={teamsHeaderStyle}>
                All teams
            </Typography>
            {teamsMapped}
            <div style={{textAlign: "center"}}>
                <Card sx={{width: "20%", margin: "auto"}}>
                    <Button sx={{width: "100%"}} onClick={toggleDialog}>Add new team</Button>
                </Card>
            </div>
            <NewTeamDialog open={open} toggleDialog={toggleDialog} addNewTeam={addNewTeam}/>
        </div>
    );
};

export default TeamsPage;