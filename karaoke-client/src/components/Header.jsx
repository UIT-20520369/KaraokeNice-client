import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import PropTypes from 'prop-types';

Header.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Header.defaultProps = {
    title: "",
    subtitle: "",
}

function Header({ title, subtitle }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box sx={{ mb:"30px" }}>
            <Typography
                variant="h2"
                sx={{ m: "0 0 5px 0", color: `${colors.grey[100]}`, fontWeight: "bold" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" sx={{ color: `${colors.greenAccent[400]}` }}>
                {subtitle}
            </Typography>
        </Box>
    );
}

export default Header;