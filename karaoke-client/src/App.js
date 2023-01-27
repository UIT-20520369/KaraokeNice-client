import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scences/global/Topbar";
import Sidebar from "./scences/global/Sidebar";
import Dashboard from "./scences/dashboard";
import Employees from "./scences/employees";
import Stock from "./scences/stock";
import Login from "./scences/login";
import Supplier from "./scences/suppliers";
import Rooms from "./scences/rooms";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Devices from "./scences/devices";

function App() {
    const templateAccounts = [
        {
            id: 1,
            userName: 'xuanvuong',
            password: '123',
        },
        {
            id: 2,
            userName: 'khanhan',
            password: '321',
        },
    ];

    const [theme, colorMode] = useMode();
    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = (userName, password) => {
        const validAccounts = templateAccounts.filter((account) => {
           return (account.userName === userName && password === account.password);
        });

        if (validAccounts.length === 0) {
            console.log('Sai roi')
            return;
        }
        else {
            document.getElementById('login-form').remove();
            setIsLogin(true);
        }

        // console.log(`user name: ${userName}, password: ${password}`)
    }

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div id={'login-form'}>
                { !isLogin ? <Login onLoginClick={handleLoginClick}/> : undefined }
            </div>

            { isLogin ? (
                <div className="app">
                    <Sidebar/>
                    <main className={'content'}>
                        <Topbar/>
                        <Routes>
                            <Route path={'/'} element={<Dashboard/>}/>
                            <Route path={'/employees'} element={<Employees/>}/>
                            <Route path={'/stock'} element={<Stock/>}/>
                            <Route path={'/suppliers'} element={<Supplier/>}/>
                            <Route path={'/rooms'} element={<Rooms/>}/>
                            <Route path={'/devices'} element={<Devices/>}/>
                        </Routes>
                    </main>
                </div>
            ) : undefined}

        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
