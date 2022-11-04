import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form, Formik } from "formik";
import * as yup from 'yup';



const CadastroPJ = (props: any) => {

    const { pessoapj, salvar, limpar } = props;

    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const initialValues = {
        usuario: '',
        senha: ''
    }

    const LoginSchema = yup.object().shape({
        usuario: yup.string().required('Informe o seu usuário.'),
        senha: yup.string().required('Informe a sua senha.'),

    });


    const handleNovoFilme = (handleReset: any) => {
        limpar();
        handleReset(initialValues);
    }

    return (

        <>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={(values, actions) => {
                    console.log("values", values);
                    salvar(values);
                    setTimeout(() => actions.setSubmitting(false), 5000);
                    actions.resetForm();
                }}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset
                }) => (

                    <Form onSubmit={handleSubmit}>
                        <>
                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Box sx={{ mt: 12 }}>
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

                                    <Grid container spacing={2} justifyContent="flex-end">
                                        <Grid item>
                                            {<Button variant="contained" onClick={() => { handleNovoFilme(handleReset) }} >Novo</Button>}
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary" type="submit" >Limpar Dados</Button>
                                        </Grid>
                                    </Grid>
                                </Box>

                            </ThemeProvider>


                        </>
                    </Form>
                )}
            </Formik >

        </>
    );

}
export default CadastroPJ;