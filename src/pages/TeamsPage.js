import React, {useContext, useEffect, useState} from 'react';
import {deleteTeam, fetchAllTeams, postTeam} from "../services/team-service";
import {Alert, Button, Card, Snackbar} from "@mui/material";
import TeamCard from "../components/Team/TeamCard";
import NewTeamDialog from "../components/Team/NewTeamDialog";
import {AuthContext} from "../contexts/AuthContext";
import PageTitle from "../components/PageTitle";

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);
    const [open, setOpen] = useState(false);
    const {token} = useContext(AuthContext);
    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "info",
        message: ""
    });

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
            .catch(() => setSnackbar({
                open: true,
                type: "error",
                message: "You need to be logged in to do this"
            }));
    }

    const handleDeleteTeam = (teamId) => {
        deleteTeam(teamId, token)
            .then(() => setTeams(teams.filter(team => team.teamId !== teamId)))
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
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
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.type} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
            <NewTeamDialog open={open} toggleDialog={toggleDialog} addNewTeam={addNewTeam}/>
        </div>
    );
};

export default TeamsPage;