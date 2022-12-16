import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { createTheme, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppMenu from '../../../../components/main-menu/AppMenu';
import CadastroUsuario from '../../../../../components/cadastro-usuarios/cadastro-usuario/CadastroUsuario';
import TrocaSenha from '../../../../../components/cadastro-usuarios/troca-senha/TrocaSenha';
import { ThemeProvider } from '@emotion/react';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function UsuariosPage() {

    const theme = useTheme();

    const [value, setValue] = useState(0);

    const themeAppBar = createTheme({
        palette: {
            primary: {
                main: '#F9B046',
            },
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 14,
        },


    });


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (



        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <ThemeProvider theme={themeAppBar} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Cadastro Usuário" {...a11yProps(0)} />
                        <Tab label="Troca Senha" {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </ThemeProvider>
            <TabPanel value={value} index={0}>
                <CadastroUsuario />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TrocaSenha />
            </TabPanel>
        </Box>

    );
}
export default UsuariosPage;