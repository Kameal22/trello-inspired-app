import React, {useContext, useEffect, useState} from 'react';
import {deleteTeam, fetchAllTeams, postTeam} from "../services/team-service";
import {Button, Card} from "@mui/material";
import TeamCard from "../components/Team/TeamCard";
import NewTeamDialog from "../components/Team/NewTeamDialog";
import {AuthContext} from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";

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

    const handleDeleteTeam = (teamId) => {
        deleteTeam(teamId, token)
            .then(() => setTeams(teams.filter(team => team.teamId !== teamId)))
    }

    const teamsMapped = teams.map(team => <TeamCard {...team} key={team.teamId} deleteTeam={handleDeleteTeam}/>);
    return (
        <div>
            <PageTitle text="All teams"/>
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