import React from 'react';
import {Typography} from "@mui/material";

const pageTitleStyle = {
    textAlign: "center",
    marginBottom: 40
};

const PageTitle = ({text}) => {
    return (
        <Typography variant="h2" style={pageTitleStyle}>
            {text}
        </Typography>
    );
};

export default PageTitle;