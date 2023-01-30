import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Autocomplete,
    Box, Button,
    FormControl,
    FormControlLabel,
    FormLabel, Modal, Radio,
    RadioGroup,
    TextField,
    Typography, useTheme
} from "@mui/material";
import {DesktopDatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {tokens} from "../theme";

FormManageUser.propTypes = {
    modal: PropTypes.bool,
    closeModal: PropTypes.func,
    isEditForm: PropTypes.bool,
    dataUser: PropTypes.object,
};

FormManageUser.defaultProps = {
    modal: false,
    closeModal: null,
    isEditForm: false,
    dataUser: {},
}

function FormManageUser(props) {
    const { modal, closeModal, isEditForm, dataUser } = props;

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const currentDate = new Date();
    const dateTime = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    // console.log(`in edit form: modal: ${modal}, edit form: ${isEditForm}`);

    const roleList = [
        'Quản lý',
        'Kế toán',
        'Kỹ thuật',
        'Phục vụ',
        'Bảo vệ',
    ]

    const initialValue = isEditForm ? {
        name: dataUser.name,
        phone: dataUser.phone,
        email: dataUser.email,
        birthDay: dataUser.birthDay,
        gender: dataUser.gender,
        address: dataUser.address,
        role: dataUser.role,
        username: dataUser.username,
        password: dataUser.password,
        hasAccount: dataUser.hasAccount,
    } : {
        name: "",
        phone: "",
        email: "",
        birthDay: dayjs(dateTime),
        gender: "Nam",
        address: "",
        role: "",
        username: "",
        password: "",
        hasAccount: true,
    };

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        birthDay: dayjs(dateTime),
        gender: "Nam",
        address: "",
        role: "",
        username: "",
        password: "",
        hasAccount: true,
    });


    useEffect(() => {
        if (dataUser.role === roleList[0] || dataUser.role === roleList[1] || dataUser.role === roleList[2])
            setUser({
                ...initialValue,
                hasAccount: true,
            });
        else
            setUser({
                ...initialValue,
                hasAccount: false,
            });
    }, [isEditForm]);

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

    const handleGenderChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            gender: event.target.value,
        }));
    };

    const handleCloseModal = () => {
        if (!closeModal)
            return;

        closeModal();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(`${user.name}; ${user.phone}; ${user.birthDay.format('DD-MM-YYYY')} ${user.email}; ${user.address}; ${user.gender}; ${user.role}; ${user.username}; ${user.password}`);
    };

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
                    Thêm nhân viên
                </Typography>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-name"
                    label={'Họ và tên'}
                    sx={styleTextField}
                    onChange={(e) => setUser(prevState => ({
                        ...prevState,
                        name: e.target.value,
                    }))}
                    value={user.name}
                ></TextField>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-phone"
                    label={'Số điện thoại'}
                    onChange={(e) => setUser(prevState => ({
                        ...prevState,
                        phone: e.target.value,
                    }))}
                    value={user.phone}
                    sx={styleTextField}
                ></TextField>

                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-email"
                    label={'Email'}
                    onChange={(e) => setUser(prevState => ({
                        ...prevState,
                        email: e.target.value,
                    }))}
                    value={user.email}
                    sx={styleTextField}
                ></TextField>
                <TextField
                    variant={'outlined'}
                    required={true}
                    id="input-address"
                    label={'Địa chỉ'}
                    onChange={(e) => setUser(prevState => ({
                        ...prevState,
                        address: e.target.value,
                    }))}
                    value={user.address}
                    sx={styleTextField}
                ></TextField>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label={'Ngày sinh'}
                        onChange={(newValue) => setUser(prevState => ({
                            ...prevState,
                            birthDay: newValue,
                        }))}
                        value={user.birthDay}
                        renderInput={(params) => <TextField {...params} sx={styleTextField} />}
                        inputFormat={'DD-MM-YYYY'}
                        minDate={dayjs('1960-01-01')}
                    >
                    </DesktopDatePicker>
                </LocalizationProvider>

                <Autocomplete
                    id={'roles'}
                    renderInput={(params) => (
                        <TextField sx={styleTextField} {...params} label={'Chức vụ'}/>
                    )}
                    options={ roleList }
                    defaultValue={ dataUser.role ? dataUser.role : roleList[0] }
                    inputValue={ user.role }
                    onInputChange={(event, newRoleChange) => {
                        if (newRoleChange === roleList[0] || newRoleChange === roleList[1] || newRoleChange === roleList[2])
                            setUser(prevState => ({
                                ...prevState,
                                hasAccount: true,
                                role: newRoleChange,
                            }));
                        else
                            setUser(prevState => ({
                                ...prevState,
                                hasAccount: false,
                                role: newRoleChange,
                            }));
                    }}
                />

                <FormControl
                    sx={{
                        marginBottom: '15px',
                        color: colors.grey[100],
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '300px',
                        '& label.Mui-focused': {
                            color: colors.grey[100],
                        },
                    }}
                >
                    <FormLabel sx={{ fontSize: '16px' }} id={'label-gender-radio-buttons-group'}>Giới tính</FormLabel>
                    <RadioGroup
                        aria-label={'label-gender-radio-buttons-group'}
                        name={'gender-radio-buttons-group'}
                        value={user.gender}
                        onChange={handleGenderChange}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            width: '100%',

                        }}
                    >
                        <FormControlLabel
                            control={ <Radio sx={{
                                '&, &.Mui-checked': {
                                    color: colors.greenAccent[700],
                                },
                            }} />}
                            label={'Nam'}
                            value={'Nam'}/>
                        <FormControlLabel
                            control={ <Radio sx={{
                                '&, &.Mui-checked': {
                                    color: colors.greenAccent[700],
                                },
                            }}/> }
                            label={'Nữ'}
                            value={'Nữ'}/>
                    </RadioGroup>
                </FormControl>

                {user.hasAccount && (
                    <>
                        <TextField
                            variant={'outlined'}
                            required={true}
                            id="input-username"
                            label={'Tài khoản'}
                            onChange={(e) => setUser(prevState => ({
                                ...prevState,
                                username: e.target.value,
                            }))}
                            value={user.username}
                            sx={styleTextField}
                        ></TextField>
                        <TextField
                            variant={'outlined'}
                            required={true}
                            id="input-password"
                            label={'Mật khẩu'}
                            onChange={(e) => setUser(prevState => ({
                                ...prevState,
                                password: e.target.value,
                            }))}
                            value={user.password}
                            sx={styleTextField}
                        ></TextField>
                    </>
                )}

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

export default FormManageUser;