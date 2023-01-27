import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import userImage from '../../assets/default-user-image.png';

Sidebar.propTypes = {
    
};

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: `${colors.grey[100]}`,
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

function Sidebar(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={false}>
                <Menu iconShape={'square'}>
                    {/* LOGO AND MENU ICON */}
                    <Box
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ml: "8px"}}>
                            <Typography variant="h3" color={colors.grey[100]}>
                                QUẢN LÝ KARAOKE
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: "50px" }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                alt="profile-user"
                                src={userImage}
                                style={{ borderRadius: "50%", width: 100, height: 100 }}
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center'}}>
                            <Typography
                                variant="h2"
                                sx={{ m: "10px 0 0 0", fontWeight: 'bold', color: `${colors.grey[100]}` }}
                            >
                                Xuân Vương
                            </Typography>
                            <Typography variant="h5" sx={{ color: `${colors.greenAccent[500]}` }}>
                                Nhân viên quản lý
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Item
                            title="Trang chủ"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Quản lý
                        </Typography>
                        <Item
                            title="Quản lý nhân viên"
                            to="/employees"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Quản lý kho hàng"
                            to="/stock"
                            icon={<InventoryOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Quản lý nhà cung cấp"
                            to="/suppliers"
                            icon={<StoreOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Quản lý phòng"
                            to="/rooms"
                            icon={<MeetingRoomOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Quản lý thiết bị"
                            to="/devices"
                            icon={<ImportantDevicesOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Tra cứu
                        </Typography>
                        <Item
                            title="Tìm kiến nhân viên"
                            to="/form"
                            icon={<PersonSearchOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geography"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;