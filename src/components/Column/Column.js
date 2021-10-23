import React, {useState} from 'react';
import {Typography} from "@mui/material";
import {mockedTasks} from "../../data/mockedTasks";
import Task from "../Task/Task";

const Column = ({columnId, name}) => {
    const [tasks, setTasks] = useState(mockedTasks[columnId]);

    const mappedTasks = tasks.map(task => <Task key={task.taskId} {...task}/>);

    return (
        <div style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <Typography variant="h6">{name}</Typography>
            <div style={{backgroundColor: 'rgba(37,37,76,0.24)', flexGrow: 1}}>
                {mappedTasks}
            </div>
        </div>

    );
};

export default Column;