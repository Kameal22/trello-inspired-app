import React, {useState} from 'react';
import {Button, Card, Typography} from "@mui/material";
import {mockedTasks} from "../../data/mockedTasks";
import Task from "../Task/Task";
import AddIcon from "@mui/icons-material/Add";
import TaskFormDialog from "../TaskFormDialog/TaskFormDialog";
import {Draggable} from "react-beautiful-dnd";

const Column = ({columnId, name}) => {
    const [tasks, setTasks] = useState(mockedTasks[columnId]);
    const [formOpen, setFormOpen] = useState(false);

    const toggleFormDialog = () => {
        setFormOpen(!formOpen);
    }

    const editTask = editedTask => {
        //TODO: add integration with database
        const editedTasks = tasks.map(task => task.taskId === editedTask.taskId ? editedTask : task);
        setTasks(editedTasks);
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.taskId !== id));
    }

    const addNewTask = (title, description) => {
        const newTask = {
            taskId: tasks.length > 0 ? tasks[tasks.length - 1].taskId + 1 : 0,
            title: title,
            description: description
        };

        setTasks([...tasks, newTask]);
    }

    const mappedTasks = tasks.map(task =>
        <Draggable key={task.taskId} draggableId={task.taskId.toString()} index={task.taskId}>
            {provided => (
                <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Task task={task}
                          editTask={editTask}
                          deleteTask={deleteTask}/>
                </li>
            )}
        </Draggable>);

    return (
        <div style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <Typography variant="h6">{name}</Typography>
            <div style={{backgroundColor: 'rgba(37,37,76,0.24)', flexGrow: 1, borderRadius: '10px'}}>
                {mappedTasks}
                <Card sx={{margin: 2}}>
                    <Button style={{width: '100%'}} onClick={toggleFormDialog}>
                        <AddIcon/>
                    </Button>
                </Card>
            </div>
            <TaskFormDialog open={formOpen} toggleDialog={toggleFormDialog} addNewTask={addNewTask}/>
        </div>
    );
};

export default Column;