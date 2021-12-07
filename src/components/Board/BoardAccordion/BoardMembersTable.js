import React from 'react';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import "./BoardMemberTable.css"
import {getRoleString, MEMBER_ROLE} from "../../../utils/RoleUtils";

const BoardMembersTable = ({members, boardId, addAdminRights}) => {
    const userRows = members.map(member =>
        <TableRow key={member.userId}>
            <TableCell>{member.name}</TableCell>
            {/*<TableCell>{member.taskCount}</TableCell>*/}
            <TableCell>{new Date(member.joinDate).toLocaleDateString()}</TableCell>
            <TableCell>
                <>
                    <span>{getRoleString(member.role)}</span>
                    {member.role === MEMBER_ROLE &&
                    <Button variant="contained"
                            size="small"
                            onClick={() => addAdminRights(member.userId, boardId)}
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
                        {/*<TableCell>Number of tasks</TableCell>*/}
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