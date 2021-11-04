import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import "./BoardMemberTable.css"

const BoardMembersTable = ({users}) => {
    const userRows = users.map(user =>
        <TableRow key={user.userId}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.taskCount}</TableCell>
            <TableCell>{user.joinedDate}</TableCell> {/*TODO: remember to parse date from timestamp*/}
        </TableRow>)

    return (
        <TableContainer className="board">
            <Table >
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Number of tasks</TableCell>
                    <TableCell>Date of joining board</TableCell>
                </TableHead>
                <TableBody>
                    {userRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BoardMembersTable;