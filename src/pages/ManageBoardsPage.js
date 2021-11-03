import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {ExpandMoreOutlined} from "@mui/icons-material";

const boardsPageStyle = {
    textAlign: "center",
    marginBottom: 40
};

const ManageBoardsPage = () => {
    return (
        <div>
            <Typography variant="h2" style={boardsPageStyle}>Manage boards:</Typography>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                    <Typography>
                        Board 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Number of tasks</TableCell>
                                    <TableCell>Joined to board</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Łukasz
                                    </TableCell>
                                    <TableCell>
                                        12
                                    </TableCell>
                                    <TableCell>
                                        03.11.2021
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Katarzyna
                                    </TableCell>
                                    <TableCell>
                                        3
                                    </TableCell>
                                    <TableCell>
                                        12.06.2021
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ManageBoardsPage;