import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMoreOutlined} from "@mui/icons-material";
import BoardMembersTable from "../BoardMembersTable/BoardMembersTable";

const boardAccordionStyle = {
    backgroundColor: "rgba(62,60,60)",
    color: "white",
    marginBottom: 50
}

const BoardAccordion = ({name, users}) => {
    return (
        <Accordion style={boardAccordionStyle}>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography gutterBottom variant="h5">{name}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{color: "white"}}>
                {users.length > 0 ?
                    <BoardMembersTable users={users}/> : <Typography>You are the only member</Typography>}
            </AccordionDetails>
        </Accordion>
    );
};

export default BoardAccordion;