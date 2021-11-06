import React from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import "./BoardMemberTable.css"
import {getRoleString, MEMBER_ROLE} from "../../../utils/RoleUtils";

const BoardMembersTable = ({users, boardId, addAdminRights}) => {
    const userRows = users.map(user =>
        <TableRow key={user.userId}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.taskCount}</TableCell>
            <TableCell>{user.joinedDate}</TableCell>
            <TableCell>
                <>
                    <span>{getRoleString(user.role)}</span>
                    {/*TODO: when integrated with backend check if user that clicks is admin to this board*/}
                    {user.role === MEMBER_ROLE &&
                    <Button variant="contained"
                            size="small"
                            onClick={() => addAdminRights(user.userId, boardId)}
                            style={{marginLeft: 30}}>
                        Add admin
                    </Button>}
                </>
            </TableCell>
        </TableRow>)

    return (
        <TableContainer className="board">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Number of tasks</TableCell>
                        <TableCell>Date of joining board</TableCell>
                        <TableCell>Role</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userRows}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BoardMembersTable;