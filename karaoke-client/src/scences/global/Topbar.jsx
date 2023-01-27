import React, {useContext} from 'react';
import { IconButton, Box, useTheme, InputBase } from "@mui/material";
import { ColorModeContext, tokens} from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/Settings";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from '@mui/icons-material/Search';
//import PropTypes from 'prop-types';

Topbar.propTypes = {

};

function Topbar(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode =useContext(ColorModeContext);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            {/* SEARCH BAR */}
            <Box sx={{
                display: 'flex',
                backgroundColor: `${colors.primary[400]}`,
                borderRadius: "5px",
            }}>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box sx={{ display: 'flex' }}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;