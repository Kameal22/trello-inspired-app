import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AllBoardsPage from "./AllBoardsPage";
import {Route} from "react-router-dom";
import {Box} from "@mui/material";
import YourBoardsPage from "./YourBoardsPage";
import Board from "../components/Board/Board";

const MainPage = () => {
    return (
        <div style={{height: "100%"}}>
            <Box sx={{display: 'flex', height: '100%'}}>
                <Sidebar/>
                {/*TODO: fix background height*/}
                <Box component="main" sx={{
                    flexGrow: 1,
                    p: 3,
                    background: 'linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(207,205,226,0.788953081232493) 71%)'
                }}>
                    {/*background: 'linear-gradient(45deg, rgba(4,0,64,1) 0%, rgba(233,233,233,0.3519782913165266) 27%, rgba(207,207,207,1) 100%)'*/}
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