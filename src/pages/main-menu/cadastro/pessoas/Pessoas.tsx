import React, {  useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { createTheme, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppMenu from '../../../../components/main-menu/AppMenu';
import CadastroPJ from '../../../../components/cadastro-pessoas/CadastroPJ';
import CadastroPF from '../../../../components/cadastro-pessoas/CadastroPF';
import { ThemeProvider } from '@emotion/react';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}



function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function Pessoas() {
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

   
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };



    const salvarPF = () => {
    }

    const limparPF = () => {
    }

    const salvarPJ = () => {
    }

    const limparPJ = () => {
    }





    return (
        
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
                <ThemeProvider theme={themeAppBar} >
                    <AppBar position="static" >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Pessoa Física" {...a11yProps(0)} />
                            <Tab label="Pessoa Jurídica" {...a11yProps(1)} />
                        </Tabs>
                    </AppBar>
                </ThemeProvider>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <CadastroPF  salvar={salvarPF} limpar={limparPF} />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <CadastroPJ  salvar={salvarPJ} limpar={limparPJ} />
                    </TabPanel>

                </SwipeableViews>
            </Box>
        
    );
}
export default Pessoas;