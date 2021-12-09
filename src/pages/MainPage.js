import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AllBoardsPage from "./AllBoardsPage";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import {Box} from "@mui/material";
import BoardPage from "./BoardPage";
import ManageBoardsPage from "./ManageBoardsPage";
import NotFoundPage from "./NotFoundPage";
import WelcomePage from "./WelcomePage";
import TeamsPage from "./TeamsPage";
import TeamsBoardPage from "./TeamsBoardPage";

const MainPage = () => {
    const {path} = useRouteMatch();

    return (
        <div style={{height: "100%"}}>
            <Box sx={{display: 'flex', height: '100%'}}>
                <Sidebar/>
                <Box component="main" sx={{
                    flexGrow: 1,
                    p: 3,
                    background: 'linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(207,205,226,0.788953081232493) 71%)'
                }}>
                    <Switch>
                        <Route exact path={`${path}`} component={WelcomePage}/>
                        <Route exact path={`${path}/all-boards`} component={AllBoardsPage}/>
                        <Route exact path={`${path}/:userId/boards`}
                               component={routeParams => <AllBoardsPage userId={routeParams.match.params.userId}/>}/>
                        <Route exact path={`${path}/:userId/manage-boards`}
                               render={routeParams => <ManageBoardsPage userId={routeParams.match.params.userId}/>}/>
                        <Route exact path={`${path}/boards/:boardId`}
                               render={routeParams => <BoardPage boardId={routeParams.match.params.boardId}/>}/>
                        <Route exact path={`${path}/all-teams`} component={TeamsPage}/>
                        <Route exact path={`${path}/teams/:teamId/boards`}
                               component={routeParams => <TeamsBoardPage teamId={routeParams.match.params.teamId}/>}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Box>
            </Box>
        </div>
    );
};

export default MainPage;