import React from 'react';
import {Card, CardContent, Divider, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import "./BoardIcon.css"

const BoardIcon = ({name, description, boardId}) => {
    return (
        <Link to={`/main-page/boards/${boardId}`} style={{textDecoration: 'none'}}>
            <Card className="board-card">
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