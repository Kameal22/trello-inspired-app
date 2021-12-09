import React, {useContext} from 'react';
import {Button, Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {NavLink, useHistory} from "react-router-dom";
import "./Sidebar.css"
import {AuthContext} from "../../contexts/AuthContext";

const useStyles = makeStyles({
    paper: {
        background: 'linear-gradient(0deg, rgba(4,0,64,1) 0%, rgba(233,233,233,0.3519782913165266) 27%, rgba(207,207,207,1) 100%);'
    }
})

const drawerStyles = {
    width: '15%',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: '15%'
    },
    display: "flex",
    height: "100%"
}

const Sidebar = () => {
    const styles = useStyles();
    const {isAuthenticated, getUser, logout} = useContext(AuthContext);
    const history = useHistory();

    const handleSignButton = () => {
        if (isAuthenticated()) {
            logout();
        }

        history.push("/login")
    }

    const userHeader = (
        <Typography style={{color: "#050079"}} variant="h5">
            Hello {isAuthenticated() ? getUser().name : "guest"}!
        </Typography>
    )

    const signButton = (
        <Button
            onClick={handleSignButton}
            sx={{
                color: "white",
                width: "100%"
            }}
            color="warning"
            size="large"
            variant="outlined">
            {isAuthenticated() ? 'Sign out' : 'Sign in'}
        </Button>
    )
    return (
        <Drawer sx={drawerStyles} variant="permanent" anchor="left" classes={{paper: styles.paper}}>
            <Toolbar>
                {userHeader}
            </Toolbar>
            <Divider/>
            <List>
                <ListItem button key={"All boards"}
                          component={NavLink}
                          exact to={"/main-page/all-boards"}
                          activeClassName="Mui-selected">
                    <ListItemText primary={"All boards"}/>
                </ListItem>
                {isAuthenticated() && (
                    <>
                        <ListItem button key={"Subscribed boards"} component={NavLink}
                                  exact to={`/main-page/${getUser().id}/boards`} activeClassName="Mui-selected">
                            <ListItemText primary={"Subscribed boards"}/>
                        </ListItem>
                        <ListItem button key={"Manage created boards"} component={NavLink}
                                  exact to={`/main-page/${getUser().id}/manage-boards`} activeClassName="Mui-selected">
                            <ListItemText primary={"Manage created boards"}/>
                        </ListItem>
                    </>)}
                <ListItem button key={"All teams"} component={NavLink}
                          exact to={`/main-page/all-teams`} activeClassName="Mui-selected">
                    <ListItemText primary={"All teams"}/>
                </ListItem>
            </List>
            <List style={{marginTop: "auto"}}>
                {signButton}
            </List>
        </Drawer>
    );
}

export default Sidebar;