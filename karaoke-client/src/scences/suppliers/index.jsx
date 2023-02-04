import React, {useEffect, useState} from 'react';
import {Box, Button, Tooltip, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {DataGrid} from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FormManageSupplier from "../../components/FormManageSupplier";
// import PropTypes from 'prop-types';

Supplier.propTypes = {
    
};

function Supplier(props) {
    const initialList = [
        {
            id: 1,
            name: 'Công ty TNHH MTV Thương mại Bia Sài Gòn',
            address: 'Khu phố 6, Quận 7, Thành phố Hồ Chí Minh',
            phone: '0394819301',
        },
        {
            id: 2,
            name: 'CÔNG TY TRÁCH NHIỆM HỮU HẠN BIA SÀI GÒN',
            address: 'Khu công nghiệp Thành Hải, Xã Thành Hải, TP. Phan Rang-Tháp Chàm, Tỉnh Ninh Thuận, Việt Nam',
            phone: '02593937156',
        },
        {
            id: 3,
            name: 'Cơ Sở Bánh Kẹo Quê Hương',
            address: '04 Đường Số 25A, Phường 10, Quận 6,Tp. Hồ Chí Minh',
            phone: '0913847158',
        },
        {
            id: 4,
            name: 'Công Ty CP TM DV SX Vạn Thịnh Phú',
            address: 'Tầng 5, Thiên Sơn Plaza, 800 Nguyễn Văn Linh, P. Tân Phú, Q. 7,Tp. Hồ Chí Minh',
            phone: '02854112199',
        },
        {
            id: 5,
            name: 'Công ty TNHH MTV Thuốc lá Sài Gòn',
            address: 'Lô C45/I, Đường số 7, Khu công nghiệp Vĩnh Lộc, Huyện Bình Chánh, Thành phố Hồ Chí Minh',
            phone: '02837657878',
        },
    ];

    const [supplierList, setSupplierList] = useState(initialList);

    const [statusModal, setStatusModal] = useState({
        modal: false,
        isEditForm: false,
        selectedRow: {},
    });

    useEffect(() => {
        document.title = 'Quản lý nhà cung cấp'
    }, [supplierList]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleDeleteClick = (row) => {
        const newSupplierList = supplierList.filter((u) => {
            return u.id !== row.id;
        });
        setSupplierList([...newSupplierList]);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "name",
            headerName: 'Tên nhà cung cấp',
            flex: 1,
            cellClassName: 'name-column--cell',
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'address',
            headerName: 'Địa chỉ',
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'phone',
            headerName: 'Số điện thoại',
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'action',
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
                        <Tooltip title={'Cập nhật thông tin nhà cung cấp'} arrow={true}>
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
                                        selectedRow: row,
                                    });
                                }}
                            >
                                <EditOutlinedIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip title={'Xóa nhà cung cấp'} arrow={true}>
                            <Button
                                variant={'outlined'}
                                style={{
                                    margin: "5px",
                                    backgroundColor: colors.redAccent[500],
                                    width: 50,
                                }}
                                onClick={() => handleDeleteClick(row)}
                            >
                                <DeleteForeverOutlinedIcon/>
                            </Button>
                        </Tooltip>
                    </Box>
                );
            }
        },
    ];

    const handleCloseModal = () => {
        setStatusModal({
           modal: false,
           isEditForm: false,
           selectedRow: {},
        });
    }

    const openAddModal = () => {
        setStatusModal({
            modal: true,
            isEditForm: false,
            selectedRow: {},
        });
    }

    return (
        <Box sx={{ m: "20px" }}>
            <Header title="QUẢN LÝ NHÀ CUNG CẤP" subtitle="Quản lý các nhà cung cấp hàng hóa cho cửa hàng" />
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
                <Tooltip title={'Thêm mới nhà cung cấp'} arrow={true}>
                    <Button
                        variant={'outlined'}
                        style={{
                            margin: "0 0 20px 0",
                            backgroundColor: colors.greenAccent[500],
                            width: 300,
                            fontWeight: "bold",
                            height: 50,
                            fontSize: "16px",
                        }}
                        onClick={openAddModal}
                    >
                        Thêm mới nhà cung cấp
                        <AddCircleOutlineOutlinedIcon style={{ marginLeft: "10px", fontSize: "32px" }}/>
                    </Button>
                </Tooltip>

                <FormManageSupplier
                    closeModal={handleCloseModal}
                    selectedRow={statusModal.selectedRow}
                    modal={statusModal.modal}
                    isEditForm={statusModal.isEditForm}/>

                <DataGrid rows={supplierList} columns={columns}/>
            </Box>
        </Box>
    );
}

export default Supplier;