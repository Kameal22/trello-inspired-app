import React from 'react';
import BoardList from "../components/Board/BoardList/BoardList";
import PageTitle from "../components/PageTitle";

const TeamsBoardPage = ({teamId}) => {
    return (
        <div>
            <PageTitle text="Team boards"/>
            <BoardList teamId={teamId}/>
        </div>
    );
};

export default TeamsBoardPage;