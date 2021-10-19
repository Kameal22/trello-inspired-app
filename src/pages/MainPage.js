import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AllBoardsPage from "./AllBoardsPage";
import {Route} from "react-router-dom";
import {Box} from "@mui/material";
import YourBoardsPage from "./YourBoardsPage";
import Board from "../components/Board/Board";

const MainPage = () => {
    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <Sidebar/>
                <Box
                    component="main"
                    sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
                >
                    <Route exact path={"/all-boards"} component={AllBoardsPage}/>
                    <Route exact path={"/:userId/boards"}
                           render={routeParams => <YourBoardsPage {...routeParams}/>}/>
                    <Route exact path={"/boards/:boardId"}
                           render={routeParams => <Board boardId={routeParams.match.params.boardId}/>}/>
                </Box>
            </Box>
        </div>
    );
};

export default MainPage;