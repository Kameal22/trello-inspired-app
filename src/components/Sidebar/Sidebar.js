import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import {makeStyles} from '@mui/styles';
import {NavLink, useRouteMatch} from "react-router-dom";
import "./Sidebar.css"

const mockedUsername = "Lukasz";

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
    }
}

const Sidebar = () => {
    const styles = useStyles();
    return (
        <Drawer sx={drawerStyles} variant="permanent" anchor="left" classes={{paper: styles.paper}}>
            <Toolbar>
                {/*TODO: add real username from jwt*/}
                <Typography style={{color: "#050079"}} variant="h5">Hello {mockedUsername}!</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem button key={"All boards"}
                          component={NavLink}
                          exact to={"/main-page/all-boards"}
                          activeClassName="active-link">
                    <ListItemText primary={"All boards"}/>
                </ListItem>
                {/*TODO insert user id here*/}
                <ListItem button key={"Subscribed boards"} component={NavLink}
                          exact to={"/main-page/1/boards"} activeClassName="active-link">
                    <ListItemText primary={"Subscribed boards"}/>
                </ListItem>
                {/*TODO insert user id here*/}
                <ListItem button key={"Manage created boards"} component={NavLink}
                          exact to={"/main-page/1/manage-boards"} activeClassName="active-link">
                    <ListItemText primary={"Manage created boards"}/>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;