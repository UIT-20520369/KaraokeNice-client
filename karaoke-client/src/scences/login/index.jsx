import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, TextField, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";

Login.propTypes = {
    onLoginClick: PropTypes.func,
};

Login.defaultProps = {
    onLoginClick: null,
}

function Login({ onLoginClick }) {
    useEffect(() => {
        document.title = 'Đăng nhập'
    }, []);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const userNameValue = useRef('');
    const passwordValue = useRef('');

    const handleLoginClick = () => {
        if (!onLoginClick)
            return;

        onLoginClick(userNameValue.current.value, passwordValue.current.value);
    }

    return (
        <div className={'login-from'}>
            <Card sx={{
                display: 'flex',
                width: "600px",
                height: "400px",
                background: `${colors.primary[400]}`,
                borderRadius: "10px",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography
                    variant={'h3'}
                    style={{
                        fontWeight: 'bold',
                        marginBottom: "30px",
                        fontSize: "40px",
                    }}
                >ĐĂNG NHẬP</Typography>
                <TextField
                    style={{ margin: "10px", width: "70%", }}
                    id="userName"
                    label="Tài khoản"
                    variant="outlined"
                    color={ 'secondary' }
                    inputRef={userNameValue}
                />
                <TextField
                    style={{ margin: "10px", width: "70%", }}
                    id="password"
                    label="Mật khẩu"
                    variant="outlined"
                    color={ 'secondary' }
                    inputRef={passwordValue}
                    type={'password'}
                />
                <Button style={{
                    color: `${colors.grey[100]}`,
                    backgroundColor: colors.primary[600],
                    fontWeight: 'bold',
                    fontSize: '20px',
                    border: `1px solid ${colors.greenAccent[400]}`,
                    padding: "10px 30px",
                    marginTop: "10px",
                }}
                        onClick={handleLoginClick}
                >Đăng nhập</Button>
            </Card>
        </div>
    );
}

export default Login;