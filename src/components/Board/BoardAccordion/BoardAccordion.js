import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMoreOutlined} from "@mui/icons-material";
import BoardMembersTable from "./BoardMembersTable";

const boardAccordionStyle = {
    backgroundColor: "rgba(62,60,60)",
    color: "white",
    marginBottom: 50
}

const BoardAccordion = ({name, members, boardId, addAdminRights}) => {
    return (
        <Accordion style={boardAccordionStyle}>
            <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                <Typography gutterBottom variant="h5">{name}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{color: "white"}}>
                {members.length > 0 ?
                    <BoardMembersTable members={members} boardId={boardId} addAdminRights={addAdminRights}/> :
                    //Todo: this could probably be deleted
                    <Typography>You are the only member</Typography>}
            </AccordionDetails>
        </Accordion>
    );
};

export default BoardAccordion;