import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button, Modal, TextField, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme";

FormManageSupplier.propTypes = {
    modal: PropTypes.bool,
    closeModal: PropTypes.func,
    isEditForm: PropTypes.bool,
    selectedRow: PropTypes.object,
};

FormManageSupplier.defaultProps = {
    modal: false,
    closeModal: null,
    isEditForm: false,
    selectedRow: {},
}

function FormManageSupplier(props) {
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
        marginBottom: "10px",
    };

    const { modal, closeModal, isEditForm, selectedRow } = props;

    const initialValue = isEditForm ? {
        id: selectedRow.id,
        name: selectedRow.name,
        phone: selectedRow.phone,
        address: selectedRow.address,
    } : {
        id: "",
        name: "",
        phone: "",
        address: "",
    };

    const [supplier, setSupplier] = useState({
        id: "",
        name: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        setSupplier({
            ...initialValue,
        })
    }, [isEditForm]);

    const handleCloseModal = () => {
        if (!closeModal)
            return;

        closeModal();
    }

    const handleFormSubmit = () => {
        console.log(`${supplier.id}-${supplier.name}-${supplier.phone}-${supplier.address}`);
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
                    Thêm nhà cung cấp
                </Typography>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-name"
                    label={'Tên nhà cung cấp'}
                    sx={styleTextField}
                    onChange={(e) => setSupplier(prevState => ({
                        ...prevState,
                        name: e.target.value,
                    }))}
                    value={supplier.name}
                ></TextField>
                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-phone"
                    label={'Số điện thoại'}
                    sx={styleTextField}
                    onChange={(e) => setSupplier(prevState => ({
                        ...prevState,
                        phone: e.target.value,
                    }))}
                    value={supplier.phone}
                ></TextField>
                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-address"
                    label={'Địa chỉ'}
                    sx={styleTextField}
                    onChange={(e) => setSupplier(prevState => ({
                        ...prevState,
                        address: e.target.value,
                    }))}
                    value={supplier.address}
                    multiline={true}
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

export default FormManageSupplier;