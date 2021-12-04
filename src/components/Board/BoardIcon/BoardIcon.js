import React from 'react';
import {Card, CardContent, Divider, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const boardIconStyle = {
    height: 150,
    backgroundColor: "rgb(62,60,60)",
    color: "white"
}

const BoardIcon = ({name, description, boardId}) => {
    return (
        <Link to={`/main-page/boards/${boardId}`} style={{textDecoration: 'none'}}>
            <Card sx={boardIconStyle}>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {name}
                    </Typography>
                    <Divider sx={{background: "white"}}/>
                    <Typography variant="p">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default BoardIcon;