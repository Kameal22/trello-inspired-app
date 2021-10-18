import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import "./Sidebar.css"

const drawerWidth = 240;

const Sidebar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Typography>Lukasz</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem button key={"All boards"} component={NavLink}
                          exact to={"/all-boards"} activeClassName="active-link">
                    <ListItemText primary={"All boards"}/>
                </ListItem>
                {/*TODO insert user id here*/}
                <ListItem button key={"Your boards"} component={NavLink}
                          exact to={"/1234/boards"} activeClassName="active-link">
                    <ListItemText primary={"Your boards"}/>
                </ListItem>
            </List>
        </Drawer>
    );
}

export default Sidebar;