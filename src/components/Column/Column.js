import React from 'react';
import {Typography} from "@mui/material";

const Column = ({columnId, name}) => {
    console.log(columnId);
    console.log(name);
    return (
        <div style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <Typography variant="h6">{name}</Typography>
            <div style={{backgroundColor: 'rgba(37,37,76,0.24)', flexGrow: 1}}>
            </div>
        </div>

    );
};

export default Column;