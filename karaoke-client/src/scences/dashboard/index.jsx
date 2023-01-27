import React, {useEffect} from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
// import PropTypes from 'prop-types';

Dashboard.propTypes = {
    
};

function Dashboard(props) {
    useEffect(() => {
        document.title = 'Trang chủ'
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
                <Header title="TRANG CHỦ" subtitle="Chào mừng tới trang chủ" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    gridAutoRows: "140px",
                    gap: "20px",
                }}
            >
                {/* ROW 1 */}
                <Box
                    sx={{
                        gridColumn: "span 3",
                        backgroundColor: `${colors.primary[400]}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 3",
                        backgroundColor: `${colors.primary[400]}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.50"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: `${colors.greenAccent[600]}`, fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 3",
                        backgroundColor: `${colors.primary[400]}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{ color: `${colors.greenAccent[600]}`, fontSize: "26px" }}
                            />
                        }
                    />
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 3",
                        backgroundColor: `${colors.primary[400]}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{ color: `${colors.greenAccent[600]}`, fontSize: "26px" }}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    sx={{
                        gridColumn: "span 8",
                        gridRow: "span 2",
                        backgroundColor: `${colors.primary[400]}`,
                    }}
                >
                    <Box
                        sx={{
                            mt: "25px",
                            p: "0 30px",
                            display: "flex ",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                style={{ fontWeight: "600", color: `${colors.grey[100]}` }}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                style={{ fontWeight: "bold", color: `${colors.greenAccent[500]}` }}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: `${colors.greenAccent[500]}` }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ height: "250px", m: "-20px 0 0 0", }}>
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 4",
                        gridRow: "span 2",
                        backgroundColor: `${colors.primary[400]}`,
                        overflow: "auto",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: `4px solid ${colors.primary[500]}`,
                            colors: `${colors.grey[100]}`,
                            p: "15px",
                        }}
                    >
                        <Typography sx={{ color: `${colors.grey[100]}`, fontWeight:"600" }} variant="h5" >
                            Recent Transactions
                        </Typography>
                    </Box>
                    {/*{mockTransactions.map((transaction, i) => (*/}
                    {/*    <Box*/}
                    {/*        sx={{*/}
                    {/*            key: `${transaction.txId}-${i}`,*/}
                    {/*            p: "15px",*/}
                    {/*            borderBottom: `4px solid ${colors.primary[500]}`,*/}
                    {/*            display: 'flex',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'space-between',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <Box>*/}
                    {/*            <Typography*/}
                    {/*                variant="h5"*/}
                    {/*                style={{*/}
                    {/*                    color: `${colors.greenAccent[500]}`,*/}
                    {/*                    fontWeight: "600",*/}
                    {/*                }}*/}
                    {/*            >*/}
                    {/*                {transaction.txId}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography style={{ color: `${colors.grey[100]}`, }}>*/}
                    {/*                {transaction.user}*/}
                    {/*            </Typography>*/}
                    {/*        </Box>*/}
                    {/*        <Box sx={{ color: `${colors.grey[100]}` }}>{transaction.date}</Box>*/}
                    {/*        <Box*/}
                    {/*            sx={{*/}
                    {/*                backgroundColor: `${colors.greenAccent[500]}`,*/}
                    {/*                p: "5px 10px",*/}
                    {/*                borderRadius: "4px",*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            ${transaction.cost}*/}
                    {/*        </Box>*/}
                    {/*    </Box>*/}
                    {/*))}*/}
                </Box>

                {/* ROW 3 */}
                <Box
                    sx={{
                        gridColumn: "span 4",
                        gridRow: "span 2",
                        backgroundColor: `${colors.primary[400]}`,
                        p: "30px",
                    }}
                >
                    <Typography variant="h5" style={{ fontWeight: "600", }}>
                        Campaign
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mt: "25px",
                        }}
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            style={{ color: `${colors.greenAccent[500]}`, marginTop: "15px", }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 4",
                        gridRow: "span 2",
                        backgroundColor: `${colors.primary[400]}`,
                    }}
                >
                    <Typography
                        variant="h5"
                        style={{ fontWeight: "600", padding: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box sx={{ height: "250px", mt: "-20px", }}>
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 4",
                        gridRow: "span 2",
                        backgroundColor: `${colors.primary[400]}`,
                        padding: "30px",
                    }}
                >
                    <Typography
                        variant="h5"
                        style={{ fontWeight: "600", marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>
                    <Box sx={{ height: "200px" }}>
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;