import React, {useState} from 'react';
import {Button, Card, Typography} from "@mui/material";
import {mockedTasks} from "../../data/mockedTasks";
import Task from "../Task/Task";
import AddIcon from "@mui/icons-material/Add";
import TaskFormDialog from "../TaskFormDialog/TaskFormDialog";

const Column = ({columnId, name}) => {
    const [tasks, setTasks] = useState(mockedTasks[columnId]);
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open)
    }

    const addNewTask = (title, description) => {
        const newTask = {
            taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 0,
            title: title,
            description: description
        }

        setTasks([...tasks, newTask])
    }

    const mappedTasks = tasks.map(task => <Task key={task.taskId} {...task}/>);

    return (
        <div style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <Typography variant="h6">{name}</Typography>
            <div style={{backgroundColor: 'rgba(37,37,76,0.24)', flexGrow: 1}}>
                {mappedTasks}
                <Card sx={{margin: 2}}>
                    <Button style={{width: '100%'}} onClick={toggleDialog}>
                        <AddIcon/>
                    </Button>
                </Card>
            </div>
            <TaskFormDialog open={open} toggleDialog={toggleDialog} addNewTask={addNewTask}/>
        </div>
    );
};

export default Column;