import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Autocomplete, Box, Button, Modal, TextField, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";
import {preferencePanelStateInitializer} from "@mui/x-data-grid/internals";

FormManageGood.propTypes = {
    modal: PropTypes.bool,
    closeModal: PropTypes.func,
    isEditForm: PropTypes.bool,
    selectedRow: PropTypes.object,
};

FormManageGood.defaultProps = {
    modal: false,
    closeModal: null,
    isEditForm: false,
    selectedRow: {},
}

function FormManageGood({modal, closeModal, isEditForm, selectedRow}) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const styleTextField = {
        '& label.Mui-focused': {
            color: colors.grey[100],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: colors.grey[100],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colors.grey[100],
            },
            '&:hover fieldset': {
                borderColor: colors.grey[100],
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.grey[100],
            },
        },
        width: "400px",
        marginBottom: "15px",
    };

    const typeList = [
        'Đồ uống',
        'Đồ ăn',
        'Thuốc lá',
    ]

    const [good, setGood] = useState({
        id: "",
        nameGood: "",
        nameType: "",
        quantity: 0,
        importPrice: "0",
        salePrice: "0",
        unit: "",
    });

    const initialValue = isEditForm ? {
        id: selectedRow.id,
        nameGood: selectedRow.nameGood,
        nameType: selectedRow.nameType,
        quantity: selectedRow.quantity,
        importPrice: selectedRow.importPrice,
        salePrice: selectedRow.salePrice,
        unit: selectedRow.unit,
    } : {
        id: "",
        nameGood: "",
        nameType: "",
        quantity: 0,
        importPrice: "0",
        salePrice: "0",
        unit: "",
    };

    useEffect(() => {
        if (isEditForm) {
            setGood({
                ...initialValue,
            });
        } else {
            setGood({
                ...initialValue
            });
        }
    }, [isEditForm]);

    const handleCloseModal = () => {
        if (!closeModal)
            return;

        closeModal();
    };

    const handleFormSubmit = () => {
        console.log(`${good.id}-${good.nameGood}-${good.nameType}-${good.quantity}-${good.importPrice}-${good.salePrice}-${good.unit}`)
    }

    return (
        <Modal
            open={modal}
            aria-labelledby="modal-modal-title"
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
                    Thêm hàng hóa
                </Typography>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-name-good"
                    label={'Tên hàng hóa'}
                    sx={styleTextField}
                    onChange={(e) => setGood(prevState => ({
                        ...prevState,
                        nameGood: e.target.value,
                    }))}
                    value={good.nameGood}
                ></TextField>

                <Autocomplete
                    id={'types'}
                    renderInput={(params) => (
                        <TextField sx={styleTextField} {...params} label={'Chức vụ'}/>
                    )}
                    options={ typeList }
                    defaultValue={ selectedRow.nameType ? selectedRow.nameType : typeList[0] }
                    inputValue={ good.nameType }
                    onInputChange={(event, newType) => {
                        setGood(prevState => ({
                            ...prevState,
                            nameType: newType,
                        }));
                    }}
                />

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-quantity"
                    label={'Số lượng'}
                    sx={styleTextField}
                    onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                            setGood(prevState => ({
                                ...prevState,
                                quantity: e.target.value,
                            }));
                        }
                    }}
                    value={good.quantity}
                    inputProps={{
                        maxLength: 3,
                    }}
                ></TextField>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-import-price"
                    label={'Giá nhập'}
                    sx={styleTextField}
                    onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                            setGood(prevState => ({
                                ...prevState,
                                importPrice: e.target.value,
                            }));
                        }
                    }}
                    value={good.importPrice}
                    inputProps={{
                        maxLength: 7,
                    }}
                ></TextField>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-sale-price"
                    label={'Giá bán'}
                    sx={styleTextField}
                    onChange={(e) => {
                        const regex = /^[0-9\b]+$/;
                        if (e.target.value === "" || regex.test(e.target.value)) {
                            setGood(prevState => ({
                                ...prevState,
                                salePrice: e.target.value,
                            }));
                        }
                    }}
                    value={good.salePrice}
                    inputProps={{
                        maxLength: 7,
                    }}
                ></TextField>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-unit"
                    label={'Đơn vị'}
                    sx={styleTextField}
                    onChange={(e) => setGood(prevState => ({
                        ...prevState,
                        unit: e.target.value,
                    }))}
                    value={good.unit}
                ></TextField>

                <div
                    style={{
                        marginTop: '5px',
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
                            backgroundColor: colors.greenAccent[400],
                            color: colors.primary[400],
                            fontWeight: 'bold',
                        }}
                        onClick={handleFormSubmit}
                    >Lưu thông tin</Button>
                    <Button
                        style={{
                            backgroundColor: colors.redAccent[400],
                            color: colors.primary[400],
                            fontWeight: 'bold',
                        }}
                        onClick={handleCloseModal}
                    >Hủy thao tác</Button>
                </div>
            </Box>
        </Modal>
    );
}

export default FormManageGood;