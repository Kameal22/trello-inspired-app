import React from 'react';
import {Card, CardContent, Divider, Typography} from "@mui/material";

const Task = ({taskId, title, description, assignedTo}) => {
    return (
        <Card sx={{backgroundColor: "rgb(62,60,60)", color: "white", margin: 2}}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                {description && (<><Divider sx={{background: "white"}}/>
                    <Typography variant="p">
                        {description}
                    </Typography></>)}
            </CardContent>
        </Card>
    );
};

export default Task;