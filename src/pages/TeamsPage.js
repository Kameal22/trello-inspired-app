import React, {useEffect, useState} from 'react';
import {fetchAllTeams} from "../services/team-service";
import {Typography} from "@mui/material";
import TeamCard from "../components/Team/TeamCard";

const teamsHeaderStyle = {
    textAlign: "center",
    marginBottom: 40
};

const TeamsPage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetchAllTeams()
            .then(teams => setTeams(teams));
    }, [])

    const teamsMapped = teams.map(team => <TeamCard {...team} key={team.teamId}/>);
    return (
        <div>
            <Typography variant="h2" style={teamsHeaderStyle}>
                All teams
            </Typography>
            {teamsMapped}
        </div>
    );
};

export default TeamsPage;