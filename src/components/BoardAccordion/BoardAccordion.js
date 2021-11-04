import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMoreOutlined} from "@mui/icons-material";
import BoardMembersTable from "../BoardMembersTable/BoardMembersTable";

const BoardAccordion = ({name, users}) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <BoardMembersTable users={users}/>
            </AccordionDetails>
        </Accordion>
    );
};

export default BoardAccordion;