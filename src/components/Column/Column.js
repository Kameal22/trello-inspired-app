import React, {useState} from 'react';
import {Button, Card, Typography} from "@mui/material";
import Task from "../Task/Task";
import AddIcon from "@mui/icons-material/Add";
import TaskFormDialog from "../TaskFormDialog/TaskFormDialog";
import {Draggable} from "react-beautiful-dnd";

const Column = ({columnId, name, provided, tasks, editTask, addNewTask, deleteTask}) => {
    const [formOpen, setFormOpen] = useState(false);

    const toggleFormDialog = () => {
        setFormOpen(!formOpen);
    }

    const mappedTasks = tasks.map((task, index) =>
        <Draggable key={task.taskId} draggableId={task.taskId.toString()} index={index}>
            {provided => (
                <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Task task={task}
                          editTask={editTask}
                          deleteTask={deleteTask}
                          columnId={columnId}/>
                </li>
            )}
        </Draggable>);

    return (
        <div style={{height: '100%', display: "flex", flexDirection: "column"}}>
            <Typography variant="h6">{name}</Typography>
            <div style={{backgroundColor: 'rgba(37,37,76,0.24)', flexGrow: 1, borderRadius: '10px'}}>
                <ul style={{listStyleType: "none", margin: 0, padding: 0}}
                    {...provided.droppableProps}
                    ref={provided.innerRef}>
                    {mappedTasks}
                    {provided.placeholder}
                </ul>
                <Card sx={{margin: 2}}>
                    <Button style={{width: '100%'}} onClick={toggleFormDialog}>
                        <AddIcon/>
                    </Button>
                </Card>
            </div>
            <TaskFormDialog open={formOpen}
                            toggleDialog={toggleFormDialog}
                            addNewTask={addNewTask}
                            columnId={columnId}/>
        </div>
    );
};

export default Column;