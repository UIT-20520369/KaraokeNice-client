import React, {useEffect} from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import PropTypes from 'prop-types';

Stock.propTypes = {

};

function Stock(props) {
    useEffect(() => {
        document.title = 'Quản lý kho'
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
                <Header title="QUẢN LÝ KHO HÀNG" subtitle="Quản lý các hàng hóa trong kho của cửa hàng" />

            </Box>
        </Box>
    );
}

export default Stock;