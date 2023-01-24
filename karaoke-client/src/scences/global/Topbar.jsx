import React, {useContext} from 'react';
import { IconButton, Box, useTheme, InputBase } from "@mui/material";
import { ColorModeContext, tokens} from "../../theme";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import Settings from "@mui/icons-material/Settings";
import PersonOutline from "@mui/icons-material/PersonOutline";
import SearchIcon from '@mui/icons-material/Search';
// import PropTypes from 'prop-types';

Topbar.propTypes = {

};

function Topbar(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode =useContext(ColorModeContext);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} p={2}>
            <Box sx={{ display: 'flex', backgroundColor: `${colors.primary[400]}`, borderRadius: 3 }}>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder={'Search'} />
                <IconButton type={'button'} sx={{ p: 1 }}>
                    <SearchIcon/>
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlined/>
                    ) : (
                        <LightModeOutlined/>
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
                <IconButton>
                    <PersonOutline/>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;