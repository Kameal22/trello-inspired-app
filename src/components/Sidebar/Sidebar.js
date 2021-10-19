import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemText, Toolbar, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';
import {NavLink} from "react-router-dom";
import "./Sidebar.css"

const drawerWidth = 240;

const useStyles = makeStyles({
    paper: {
        background: 'linear-gradient(0deg, rgba(4,0,64,1) 0%, rgba(233,233,233,0.3519782913165266) 27%, rgba(207,207,207,1) 100%);'
    }
})

const Sidebar = () => {
    const styles = useStyles();
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
            classes={{paper: styles.paper}}
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