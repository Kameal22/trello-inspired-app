import React, {useContext, useEffect, useState} from 'react';
import {Alert, Grid, Snackbar, Typography} from "@mui/material";
import Column from "../components/Column/Column";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import {useHistory} from "react-router-dom";
import ConfirmDeleteBoardDialog from "../components/Board/ConfirmDeleteBoardDialog/ConfirmDeleteBoardDialog";
import {deleteBoard, fetchBoardDetails, fetchBoardMembers} from "../services/board-service";
import {NO_CONTENT, NOT_FOUND} from "../constants/http_statuses";
import {deleteTask, editTask} from "../services/task-service";
import {addTask, updateTasksInColumn} from "../services/column-service";
import {AuthContext} from "../contexts/AuthContext";

const deleteIconStyle = {
    float: "right",
    cursor: "pointer",
    fontSize: 50
};

const BoardPage = ({boardId}) => {
    const [boardDetails, setBoardDetails] = useState({columns: [], members: []});
    const [members, setMembers] = useState([]);
    const [boardNotFound, setBoardNotFound] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        type: "info",
        message: ""
    });
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const history = useHistory();
    const {token} = useContext(AuthContext);

    useEffect(() => {
        fetchBoardDetails(boardId)
            .then(details => setBoardDetails(details))
            .catch(error => {
                if (error.response.status === NOT_FOUND) {
                    setBoardNotFound(true);
                }
            });
    }, [])

    useEffect(() => {
        fetchBoardMembers(boardId)
            .then(members => setMembers(members))
    }, [boardDetails])

    const toggleDeleteDialog = () => {
        setDeleteDialogOpen(!deleteDialogOpen);
    }

    const handleDroppingTask = result => {
        const {source, destination} = result;
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            changeOrderInSameColumn(source, destination);
        } else {
            handleChangeColumn(source, destination);
        }

    }

    const changeOrderInSameColumn = (source, destination) => {
        //TODO: do this with call to backend also
        let sourceTasks = boardDetails.columns.find(column => column.columnId.toString() === destination.droppableId).tasks;
        const [removedTask] = sourceTasks.splice(source.index, 1);
        sourceTasks.splice(destination.index, 0, removedTask);
        setBoardDetails({
            ...boardDetails,
            columns: boardDetails.columns.map(column => column.columnId.toString() === destination.droppableId ? {
                ...column,
                tasks: sourceTasks
            } : column)
        });
    }

    const handleChangeColumn = (source, destination) => {
        let sourceTasks = [...boardDetails.columns.find(column => column.columnId.toString() === source.droppableId).tasks];
        const [removedTask] = sourceTasks.splice(source.index, 1);

        let destinationTasks = [...boardDetails.columns.find(column => column.columnId.toString() === destination.droppableId).tasks];
        destinationTasks.splice(destination.index, 0, removedTask);

        const destinationTaskIds = destinationTasks.map(task => task.taskId);

        updateTasksInColumn(destinationTaskIds, destination.droppableId, token)
            .then(() => boardDetails.columns
                .map(column => column.columnId.toString() === source.droppableId ?
                    {
                        ...column,
                        tasks: sourceTasks
                    }
                    :
                    column)
                .map(column => column.columnId.toString() === destination.droppableId ?
                    {
                        ...column,
                        tasks: destinationTasks
                    }
                    :
                    column))
            .then(editedColumns => setBoardDetails({
                    ...boardDetails,
                    columns: editedColumns
                })
            )
            .catch(openAuthorizationError);
    }


    const handleEditTask = (editedTask, columnId, taskId) => {
        editTask(taskId, editedTask)
            .then(() => updateTasks(editedTask, columnId, taskId))
            .then(editedTasks => setBoardDetails({
                ...boardDetails,
                columns: boardDetails.columns.map(column => column.columnId === columnId ? {
                    ...column,
                    tasks: editedTasks
                } : column)
            }))
            .then(() => setSnackbar({
                    open: true,
                    type: "info",
                    message: "Task edited"
                })
            )
            .catch(openAuthorizationError);
    }

    const updateTasks = (editedTask, columnId, taskId) => {
        let tasks = boardDetails.columns.find(column => column.columnId === columnId).tasks;
        return tasks.map(task => {
            if (task.taskId === taskId) {
                task.title = editedTask.title;
                task.description = editedTask.description;
                if (editedTask.assigneeId) {
                    const assignee = members.find(member => member.userId === editedTask.assigneeId);
                    task.assignee = {
                        userId: assignee.userId,
                        username: assignee.username,
                        name: assignee.name,
                        surname: assignee.surname
                    };
                } else {
                    task.assignee = null;
                }
            }
            return task;
        });
    }

    const handleDeleteTask = (taskId, columnId) => {
        deleteTask(taskId)
            .then(() => boardDetails.columns.find(column => column.columnId === columnId).tasks
                .filter(task => task.taskId !== taskId)
            )
            .then(tasks => {
                setBoardDetails({
                    ...boardDetails,
                    columns: boardDetails.columns.map(column => column.columnId === columnId ? {
                        ...column,
                        tasks
                    } : column)
                });
            })
            .then(() => {
                setSnackbar({
                    open: true,
                    type: "error",
                    message: "Task deleted"
                })
            })
            .catch(openAuthorizationError);
    }

    const handleAddNewTask = (task, columnId) => {
        addTask(columnId, task, token)
            .then(newTask => {
                let tasks = boardDetails.columns.find(column => column.columnId === columnId).tasks;
                return [...tasks, newTask];
            })
            .then(tasks => {
                setBoardDetails({
                    ...boardDetails,
                    columns: boardDetails.columns.map(column => column.columnId === columnId ? {
                        ...column,
                        tasks
                    } : column),
                })
            })
            .then(() => {
                setSnackbar({
                    open: true,
                    type: "success",
                    message: "Task added"
                })
            })
            .catch(openAuthorizationError);
    }

    const handleDeleteBoard = boardId => {
        deleteBoard(boardId, token)
            .then(status => {
                if (status === NO_CONTENT)
                    history.push("/main-page/all-boards");
            })
            .catch(openAuthorizationError);
    }

    const openAuthorizationError = () => {
        setSnackbar({
            open: true,
            type: "error",
            message: "You need to be logged in to do this"
        })
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar({...snackbar, open: false});
    }

    const columnItems = boardDetails.columns.map(column =>
        <Grid key={column.columnId}
              style={{marginLeft: 15}}
              item
              xs={8} md={4} xl={2}>
            <Droppable droppableId={column.columnId.toString()}>
                {provided => (
                    <Column {...column}
                            provided={provided}
                            editTask={handleEditTask}
                            addNewTask={handleAddNewTask}
                            deleteTask={handleDeleteTask}
                            boardMembers={members}/>
                )}
            </Droppable>
        </Grid>);

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <div>
                <Typography variant="h3" style={{height: '10%'}}>
                    {boardNotFound ? "Board not found" : boardDetails.name}
                </Typography>
                {!boardNotFound && <DeleteIcon style={deleteIconStyle} onClick={toggleDeleteDialog}/>}
            </div>
            <DragDropContext onDragEnd={handleDroppingTask}>
                <Grid container style={{flexGrow: 1}} wrap="nowrap">
                    {columnItems}
                </Grid>
            </DragDropContext>
            <ConfirmDeleteBoardDialog
                open={deleteDialogOpen}
                deleteBoard={handleDeleteBoard}
                toggleDialog={toggleDeleteDialog}
                boardId={boardId}
                name={boardDetails.name}
            />
            <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbar.type} sx={{width: '100%'}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default BoardPage;