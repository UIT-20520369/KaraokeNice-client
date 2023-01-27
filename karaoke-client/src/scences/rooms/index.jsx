import React, {useEffect} from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import PropTypes from 'prop-types';

Rooms.propTypes = {

};

function Rooms(props) {
    useEffect(() => {
        document.title = 'Quản lý phòng'
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
                <Header title="QUẢN LÝ PHÒNG" subtitle="Quản lý thông tin của các phòng có trong cửa hàng" />

            </Box>
        </Box>
    );
}

export default Rooms;