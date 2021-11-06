import React, {useState} from 'react';
import {Avatar, Card, CardContent, Divider, Typography} from "@mui/material";
import TaskDetailsDialog from "./TaskDetailsDialog/TaskDetailsDialog";


const Task = ({task, editTask, deleteTask, columnId, isDragging, boardMembers}) => {
    const hasAssignee = task.assignedTo != null && task.assignedTo !== '';
    const [detailsOpen, setDetailsOpen] = useState(false);

    const toggleDetailsDialog = () => {
        setDetailsOpen(!detailsOpen);
    }

    const openDialog = () => {
        if (!detailsOpen) {
            setDetailsOpen(true);
        }
    }

    const getNameFirstLetter = () => {
        return task.assignedTo.charAt(0);
    }

    const taskCardStyle = {
        backgroundColor: isDragging ? "rgba(62,60,60,0.85)" : "rgba(62,60,60)",
        color: "white",
        margin: 2
    };

    return (
        <Card sx={taskCardStyle} onClick={openDialog}>
            <CardContent>
                <div style={{width: "100%"}}>
                    <Typography gutterBottom variant="h5">
                        {task.title}
                    </Typography>
                    {hasAssignee && <Avatar style={{float: "right", margin: 5, backgroundColor: "#1976d2"}}>
                        {getNameFirstLetter()}
                    </Avatar>}
                </div>
                <Divider sx={{background: "white"}}/>
                {task.description && (
                    <>
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
                               columnId={columnId}
                               boardMembers={boardMembers}/>
        </Card>
    );
};

export default Task;