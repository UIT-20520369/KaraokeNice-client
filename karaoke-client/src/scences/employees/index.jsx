import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Modal, TextField,
    Tooltip,
    Typography,
    useTheme
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import PropTypes from 'prop-types';

Employees.propTypes = {

};


function Employees(props) {
    useEffect(() => {
        document.title = 'Quản lý nhân viên'
    }, []);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "name",
            headerName: "Họ tên",
            flex: 1,
            cellClassName: 'name-column--cell',
            headerAlign: "left",
            align: "left",
        },
        {
            field: 'birthDay',
            headerName: 'Ngày sinh',
            // flex: 1,
            width: 100,
            headerAlign: "left",
            align: "left",
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            // flex: 1,
            width: 100,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "role",
            headerName: "Chức vụ",
            // flex: 1,
            width: 100,
            headerAlign: "left",
            align: "left",
        },
        {
            field: "address",
            headerName: "Địa chỉ",
            flex: 1,
            headerAlign: "left",
            align: "left",
            width: "auto",
        },
        {
            field: "shiftCount",
            headerName: "Số ca làm",
            // flex: 1,
            width: 100,
            headerAlign: "left",
            align: "left",
            type: 'number',
        },
        {
            field: 'chucnang',
            headerName: 'Thao tác',
            // flex: 1,
            width: 200,
            renderCell: ({ row: { chucnang }}) => {
                return (
                    <Box
                        sx={{
                            width: "60%",
                            m: "0 auto",
                            p: "5px",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {/*<Tooltip title={'Thêm mới nhân viên'} arrow={true}>*/}
                        {/*    <Button*/}
                        {/*        variant={'outlined'}*/}
                        {/*        style={{*/}
                        {/*            margin: "5px",*/}
                        {/*            backgroundColor: colors.greenAccent[500],*/}
                        {/*            width: 50,*/}
                        {/*        }}*/}
                        {/*        onClick={() => {*/}
                        {/*            console.log('Add')*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        <AddCircleOutlineOutlinedIcon/>*/}
                        {/*    </Button>*/}
                        {/*</Tooltip>*/}
                        <Tooltip title={'Cập nhật thông tin nhân viên'} arrow={true}>
                            <Button
                                variant={'outlined'}
                                style={{
                                    margin: "5px",
                                    backgroundColor: colors.blueAccent[500],
                                    width: 50,
                                }}
                            >
                                <EditOutlinedIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip title={'Xóa nhân viên'} arrow={true}>
                            <Button
                                variant={'outlined'}
                                style={{
                                    margin: "5px",
                                    backgroundColor: colors.redAccent[500],
                                    width: 50,
                                }}
                            >
                                <DeleteForeverOutlinedIcon/>
                            </Button>
                        </Tooltip>
                    </Box>
                );
            }
        }
    ];

    const openAddModal = () => {
        setModal(true);
    };

    const closeAddModal = () => {
        setModal(false);
    }

    const userList = [
        {
            id: 1,
            name: 'Trương Xuân Vương',
            birthDay: '21/05/2002',
            phone: '0393320811',
            email: 'vuong@gmail.com',
            role: 'Quản lý',
            address: 'Quận 5, Thành phố Hồ Chí Minh',
            shiftCount: 15,
        },
        {
            id: 2,
            name: 'Bùi Đoàn Khánh Ân',
            birthDay: '01/01/2002',
            phone: '0393172931',
            email: 'khanhan@gmail.com',
            role: 'Kế toán',
            address: 'Quận Bình Tân, Thành phố Hồ Chí Minh',
            shiftCount: 7,
        },
        {
            id: 3,
            name: 'Nguyễn Đông Anh',
            birthDay: '12/03/2002',
            phone: '0336112231',
            email: 'donganh123@gmail.com',
            role: 'Kỹ thuật',
            address: 'Thành phố Thủ Đức, Thành phố Hồ Chí Minh',
            shiftCount: 10,
        },
        {
            id: 4,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 5,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 6,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 7,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 8,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 9,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 10,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 11,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 12,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 13,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 14,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
        {
            id: 15,
            name: 'Trần Nam Đô',
            birthDay: '17/02/2002',
            phone: '03367946131',
            email: 'namdo1241@gmail.com',
            role: 'Phục vụ',
            address: 'Quận 7, Thành phố Hồ Chí Minh',
            shiftCount: 4,
        },
    ];

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
    };

    return (
        <Box sx={{ m: "20px" }}>
            <Header title="QUẢN LÝ NHÂN VIÊN" subtitle="Quản lý thông tin của các nhân viên trong cửa hàng" />
            <Box sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    m: "40px 0 0 0",
                    height: "75vh",
                }}
            >
                <Tooltip title={'Thêm mới nhân viên'} arrow={true}>
                    <Button
                        variant={'outlined'}
                        style={{
                            margin: "0 0 20px 0",
                            backgroundColor: colors.greenAccent[500],
                            width: 200,
                            fontWeight: "bold",
                            height: 50,
                            fontSize: "16px",
                        }}
                        onClick={openAddModal}
                    >
                        Thêm nhân viên
                        <AddCircleOutlineOutlinedIcon style={{ marginLeft: "10px", fontSize: "32px" }}/>
                    </Button>
                </Tooltip>

                <Modal
                    open={modal}
                    aria-labelledby="modal-modal-title"
                    // aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 600,
                            backgroundColor: colors.primary[400],
                            border: '1px solid #000',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: "5px",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography
                            style={{
                                marginBottom: "10px",
                                color: colors.grey[100],
                            }}
                            id="modal-modal-title" variant="h6" component="h2">
                            Thêm nhân viên
                        </Typography>

                        <TextField
                            variant={'filled'}
                            required={true}
                            id="input-name"
                            label={'Họ và tên'}
                            style={{
                                color: 'white',
                                width: "400px",
                                marginBottom: "10px",
                                outlineColor: colors.grey[100],
                            }}
                        ></TextField>

                        <div
                            style={{
                                marginBottom: '10px',
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexDirection: 'row',
                                width: "400px",
                            }}
                        >
                            <Button
                                type={'submit'}
                                style={{
                                    backgroundColor: colors.greenAccent[300],
                                    color: colors.primary[600],
                                    fontWeight: 'bold',
                                }}
                                onClick={handleFormSubmit}
                            >Lưu thông tin</Button>
                            <Button
                                type={'submit'}
                                style={{
                                    backgroundColor: colors.redAccent[300],
                                    color: colors.primary[600],
                                    fontWeight: 'bold',
                                }}
                                onClick={closeAddModal}
                            >Hủy thao tác</Button>
                        </div>
                    </Box>
                </Modal>

                <DataGrid rows={userList} columns={columns}/>

                <TextField
                    variant={'filled'}
                    required={true}
                    label={'Họ và tên'}
                    style={{
                        color: 'red',
                        width: "400px",
                        marginBottom: "10px",
                        outlineColor: colors.grey[100],
                        marginTop: "10px"
                    }}
                ></TextField>
            </Box>
        </Box>
    );
}

export default Employees;