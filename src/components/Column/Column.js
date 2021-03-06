import React, {useState} from 'react';
import {Button, Card, Typography} from "@mui/material";
import Task from "../Task/Task";
import AddIcon from "@mui/icons-material/Add";
import TaskFormDialog from "../Task/TaskFormDialog/TaskFormDialog";
import {Draggable} from "react-beautiful-dnd";

const outsideColumnStyle = {
    height: '100%',
    display: "flex",
    flexDirection: "column"
};

const insideColumnStyle = {
    backgroundColor: 'rgba(37,37,76,0.24)',
    flexGrow: 1,
    borderRadius: '10px'
};

const Column = ({columnId, name, provided, tasks, editTask, addNewTask, deleteTask, boardMembers}) => {
    const [formOpen, setFormOpen] = useState(false);

    const toggleFormDialog = () => {
        setFormOpen(!formOpen);
    }

    function getAnimation(style, snapshot) {
        if (!snapshot.isDropAnimating) {
            return style;
        }
        return {
            ...style,
            transitionDuration: `0.1s`,
        };
    }

    const mappedTasks = tasks.map((task, index) =>
        <Draggable key={task.taskId} draggableId={task.taskId.toString()} index={index}>
            {(provided, snapshot) => (
                <li {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
                    style={getAnimation(provided.draggableProps.style, snapshot)}>
                    <Task task={task}
                          editTask={editTask}
                          deleteTask={deleteTask}
                          columnId={columnId}
                          isDragging={snapshot.isDragging}
                          boardMembers={boardMembers}/>
                </li>
            )}
        </Draggable>);

    return (
        <div style={outsideColumnStyle}>
            <Typography variant="h6">{name}</Typography>
            <div style={insideColumnStyle}>
                <ul {...provided.droppableProps} ref={provided.innerRef}>
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