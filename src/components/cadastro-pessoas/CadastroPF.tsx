import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { estadoCivilNames, initialValues } from '../../utils/cadastro-pf/constants';

const theme = createTheme({

    palette: {
        primary: {
            main: 'rgb(255, 152, 0)',
        }
    },

});


const CadastroPF = (props: any) => {

    const { pessoaPF, salvar, limpar } = props;

    const [estadoCivil, setEstadoCivil] = React.useState('');

    const handleChange2 = (event: SelectChangeEvent) => {
        setEstadoCivil(event.target.value as string);
    };



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            cdEstadoCivil: data.get('cdEstadoCivil'),
        });
    };






    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel >Estado Civil</InputLabel>
                                <Select
                                    fullWidth
                                    onChange={handleChange2}
                                    id="cdEstadoCivil"
                                    label="Estado Civil"
                                    name="cdEstadoCivil"
                                    autoComplete="cdEstadoCivil"
                                    value={estadoCivil}
                                >
                                    {estadoCivilNames.map(ec =>
                                        <MenuItem key={ec.id} value={ec.name}>
                                            {ec.name}
                                        </MenuItem>)
                                    }


                                </Select>
                            </Grid>

                        </Grid>

                        <Grid item xs={11}>
                            <Grid container spacing={2} justifyContent="flex-end">

                                <Grid item>
                                    <Button variant="contained" color="primary"
                                        fullWidth
                                        sx={{ mt: 3, mb: 2 }} type="submit" >Salvar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                
            </Container>
        </ThemeProvider>
    );
}

export default CadastroPF;