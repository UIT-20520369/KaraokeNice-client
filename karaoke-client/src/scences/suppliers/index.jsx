import React, {useEffect} from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
// import PropTypes from 'prop-types';

Supplier.propTypes = {
    
};

function Supplier(props) {
    useEffect(() => {
        document.title = 'Quản lý nhà cung cấp'
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
                <Header title="QUẢN LÝ NHÀ CUNG CẤP" subtitle="Quản lý các nhà cung cấp hàng hóa cho cửa hàng" />

            </Box>
        </Box>
    );
}

export default Supplier;