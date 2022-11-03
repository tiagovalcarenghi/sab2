import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import '../../assets/login/css/login.css';
import { useNavigate } from 'react-router-dom';

//Banner SAB:
import BannerSab from '../../assets/login/images/banner-SAB.png'; // Import using relative path

const theme = createTheme({

    palette: {
        primary: {
            main: 'rgb(255, 152, 0)',
        }
    },

});


const Login = () => {


    const navigate = useNavigate();


    const initialValues = {
        usuario: '',
        senha: ''
    }

    const LoginSchema = yup.object().shape({
        usuario: yup.string().required('Informe o seu usuário.'),
        senha: yup.string().required('Informe a sua senha.'),

    });


    return (

        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                console.log("values", values);
                //logar(values);
                actions.resetForm();
                navigate('/main-menu', {replace: true});
              }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (

                <Form onSubmit={handleSubmit}>
                    <>
                        <ThemeProvider theme={theme}>
                            <Grid container component="main" sx={{ height: '100vh' }}>
                                <CssBaseline />
                                <Grid className='gridBanner'
                                    item
                                    xs={false}
                                    sm={4}
                                    md={2}
                                    sx={{
                                        backgroundImage: `url(${BannerSab})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundColor: (t) =>
                                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                                <Grid item xs={12} sm={8} md={10} component={Paper} elevation={6} square>
                                    <Box
                                        sx={{
                                            my: 8,
                                            mx: 4,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Avatar sx={{ m: 5, bgcolor: 'primary.main' }}>
                                            <LockOutlinedIcon />
                                        </Avatar>


                                        <Box sx={{ mt: 1 }}>
                                            <TextField
                                               margin="normal"
                                               fullWidth
                                                value={values.usuario}
                                                id="usuario"
                                                label="Usuário"
                                                name="usuario"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.usuario && errors.usuario}
                                            />

                                            <TextField
                                                margin="normal"
                                                fullWidth
                                                value={values.senha}
                                                name="senha"
                                                label="Senha"
                                                type="password"
                                                id="senha"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={touched.senha && errors.senha}
                                            />

                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                EFETUAR LOGIN
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </ThemeProvider>


                    </>
                </Form>
            )}
        </Formik >
    )
}


export default Login;