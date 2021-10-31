import React, {useState} from 'react';
import {Card, CardContent, Divider, Typography} from "@mui/material";
import TaskDetailsDialog from "../TaskDetailsDialog/TaskDetailsDialog";

const taskCardStyle = {
    backgroundColor: "rgb(62,60,60)",
    color: "white",
    margin: 2
};

const Task = ({task, editTask, deleteTask, columnId}) => {
    const [detailsOpen, setDetailsOpen] = useState(false);

    const toggleDetailsDialog = () => {
        setDetailsOpen(!detailsOpen);
    }

    const openDialog = () => {
        if (!detailsOpen) {
            setDetailsOpen(true);
        }
    }

    return (
        <Card sx={taskCardStyle} onClick={openDialog}>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {task.title}
                </Typography>
                {task.description && (
                    <>
                        <Divider sx={{background: "white"}}/>
                        <Typography variant="p">
                            {task.description}
                        </Typography>
                    </>)}
            </CardContent>
            <TaskDetailsDialog open={detailsOpen}
                               toggleDialog={toggleDetailsDialog}
                               task={task}
                               editTask={editTask}
                               deleteTask={deleteTask}
                               columnId={columnId}/>
        </Card>
    );
};

export default Task;