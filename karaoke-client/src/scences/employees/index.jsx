import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Tooltip,
    useTheme
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FormManageUser from "../../components/FormManageUser";
// import PropTypes from 'prop-types';

Employees.propTypes = {

};

function Employees(props) {
    useEffect(() => {
        document.title = 'Quản lý nhân viên'
    }, []);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [statusModal, setStatusModal] = useState({
        modal: false,
        isEditForm: false,
    });

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "name",
            headerName: "Họ tên",
            flex: 1,
            cellClassName: 'name-column--cell',
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'birthDay',
            headerName: 'Ngày sinh',
            width: 100,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            width: 100,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: "role",
            headerName: "Chức vụ",
            // flex: 1,
            width: 100,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: "address",
            headerName: "Địa chỉ",
            flex: 1,
            headerAlign: "left",
            align: "left",
            width: "auto",
            sortable: false,
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
            width: 200,
            sortable: false,
            renderCell: ({row}) => {
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
                        <Tooltip title={'Cập nhật thông tin nhân viên'} arrow={true}>
                            <Button
                                variant={'outlined'}
                                style={{
                                    margin: "5px",
                                    backgroundColor: colors.blueAccent[500],
                                    width: 50,
                                }}
                                onClick={() => {
                                    setStatusModal({
                                        modal: true,
                                        isEditForm: true,
                                    });

                                    // console.log(`modal: ${statusModal.modal}, edit form: ${statusModal.isEditForm}`);
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
        setStatusModal({
            modal: true,
            isEditForm: false,
        });

        // console.log(`modal: ${statusModal.modal}, edit form: ${statusModal.isEditForm}`);
    };

    const closeAddModal = () => {
        setStatusModal({
            isEditForm: false,
            modal: false,
        });

        // console.log(`modal: ${statusModal.modal}, edit form: ${statusModal.isEditForm}`);
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

                <FormManageUser modal={statusModal.modal} closeModal={closeAddModal} isEditForm={statusModal.isEditForm}/>

                <DataGrid rows={userList} columns={columns}/>
            </Box>
        </Box>
    );
}

export default Employees;