import React, {useEffect} from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import PropTypes from 'prop-types';

Devices.propTypes = {

};

function Devices(props) {
    useEffect(() => {
        document.title = 'Quản lý thiết bị'
    }, []);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box sx={{ m: "20px" }}>
            {/* HEADER */}
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Header title="QUẢN LÝ THIẾT BỊ" subtitle="Quản lý thông tin các thiêt bị của quán" />

            </Box>
        </Box>
    );
}

export default Devices;