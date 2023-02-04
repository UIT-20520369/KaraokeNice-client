import React, {useEffect, useState} from 'react';
import {Box, Button, Tooltip, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {DataGrid} from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import FormManageGood from "../../components/FormManageGood";
// import PropTypes from 'prop-types';

Stock.propTypes = {

};

function Stock(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [statusModal, setStatusModal] = useState({
        modal: false,
        isEditForm: false,
        selectedRow: {},
    });

    const initialList = [
        {
            id: 1,
            nameGood: 'Bia Sài Gòn',
            nameType: 'Đồ uống',
            quantity: 2,
            importPrice: '15000',
            salePrice: '17000',
            unit: 'lon',
        },
        {
            id: 2,
            nameGood: 'Snack',
            nameType: 'Đồ ăn',
            quantity: 4,
            importPrice: '10000',
            salePrice: '12000',
            unit: 'gói',
        },
        {
            id: 3,
            nameGood: 'Bia Tiger',
            nameType: 'Đồ uống',
            quantity: 5,
            importPrice: '15000',
            salePrice: '17000',
            unit: 'lon',
        },
        {
            id: 4,
            nameGood: 'Đậu phộng',
            nameType: 'Đồ ăn',
            quantity: 1,
            importPrice: '21000',
            salePrice: '22500',
            unit: 'hộp',
        },
    ];

    const [goodList, setGoodList] = useState(initialList);

    useEffect(() => {
        document.title = 'Quản lý kho'
    }, [goodList]);

    const handleDeleteClick = (row) => {
        const newGoodList = goodList.filter((u) => {
            return u.id !== row.id;
        });
        setGoodList([...newGoodList]);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 50 },
        {
            field: "nameGood",
            headerName: "Tên hàng hóa",
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: false,
            cellClassName: 'name-column--cell',
        },
        {
            field: "nameType",
            headerName: "Tên loại hàng",
            flex: 1,
            headerAlign: "left",
            align: "left",
            sortable: false,
        },
        {
            field: 'quantity',
            headerName: 'Số lượng',
            // width: 100,
            flex: 1,
            headerAlign: 'left',
            align: 'left',
            sortable: false,
        },
        {
            field: 'importPrice',
            headerAlign: "left",
            headerName: 'Giá nhập',
            align: 'left',
            flex: 1,
        },
        {
            field: 'salePrice',
            headerAlign: "left",
            headerName: 'Giá bán',
            align: 'left',
            flex: 1,
        },
        {
            field: 'unit',
            headerAlign: "left",
            headerName: 'Đơn vị',
            align: 'left',
            flex: 1,
        },
        {
            field: 'action',
            headerName: 'Thao tác',
            sortable: false,
            flex: 1,
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
                        <Tooltip title={'Cập nhật thông tin hàng hóa'} arrow={true}>
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
                                    // console.log(`modal: ${statusModal.modal}, edit form: ${statusModal.isEditForm}`);
                                }}
                            >
                                <EditOutlinedIcon/>
                            </Button>
                        </Tooltip>
                        <Tooltip title={'Xóa hàng'} arrow={true}>
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
        }
    ];

    const openAddModal = () => {
        setStatusModal({
            modal: true,
            isEditForm: false,
            selectedRow: {},
        });
    }

    const closeModal = () => {
        setStatusModal({
            modal: false,
            isEditForm: false,
            selectedRow: {},
        });
    }

    return (
        <Box sx={{ m: "20px" }}>
            <Header title="QUẢN LÝ KHO HÀNG" subtitle="Quản lý các hàng hóa trong kho của cửa hàng" />

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
                <Tooltip title={'Thêm mới hàng hóa'} arrow={true}>
                    <Button
                        variant={'outlined'}
                        style={{
                            margin: "0 0 20px 0",
                            backgroundColor: colors.greenAccent[500],
                            width: 250,
                            fontWeight: "bold",
                            height: 50,
                            fontSize: "16px",
                        }}
                        onClick={openAddModal}
                    >
                        Thêm hàng hóa
                        <AddCircleOutlineOutlinedIcon style={{ marginLeft: "10px", fontSize: "32px" }}/>
                    </Button>
                </Tooltip>

                <FormManageGood
                    selectedRow={statusModal.selectedRow}
                    isEditForm={statusModal.isEditForm}
                    closeModal={closeModal}
                    modal={statusModal.modal}
                />

                <DataGrid columns={columns} rows={goodList}/>
            </Box>
        </Box>
    );
}

export default Stock;