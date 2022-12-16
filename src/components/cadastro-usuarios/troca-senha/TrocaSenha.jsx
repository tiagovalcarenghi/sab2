import { Button, Grid, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { initialValuesTrocaSenha } from "../../../utils/cadastro-usuarios/constantstrocasenha";
import { FormInputText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';


const TrocaSenha = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const CadTrocaSenhaSchema = yup.object().shape({
        senhaAtual: yup.string().required('Informe  a senha atual.'),
        novaSenha: yup.string().required('Informe a nova senha.'),
        confirmaSenha: yup.string().required('Confirme a senha atual'),

    });


    const formik = useFormik({
        initialValues: initialValuesTrocaSenha,
        validationSchema: CadTrocaSenhaSchema,
        onSubmit: (values) => {


            if(values.novaSenha != values.confirmaSenha ) {
                Swal.fire({
                    title: 'Atenção',
                    text: 'O campo nova senha e confirma senha devem ser iguais.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }

            alert(JSON.stringify(values, null, 2));
        },
    });



    return (

        <form onSubmit={formik.handleSubmit}>

            <ThemeProvider theme={theme}>


                <Paper
                    style={{
                        display: "grid",
                        gridRowGap: "20px",
                        padding: "20px",
                        margin: "10px 0px 0px 0px"
                    }}
                >

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                        <Grid item xs={4}>

                            <FormInputText
                                name="senhaAtual"
                                label="Senha Atual"
                                type="password"
                                values={formik.values.senhaAtual}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.senhaAtual && formik.errors.senhaAtual}
                                error={formik.touched.senhaAtual && Boolean(formik.errors.senhaAtual)} />


                        </Grid>

                    </Grid>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                        <Grid item xs={4}>

                            <FormInputText
                                name="novaSenha"
                                label="Nova Senha"
                                type="password"
                                values={formik.values.novaSenha}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.novaSenha && formik.errors.novaSenha}
                                error={formik.touched.novaSenha && Boolean(formik.errors.novaSenha)} />


                        </Grid>

                    </Grid>



                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>

                            <FormInputText
                                name="confirmaSenha"
                                label="Confirma Senha"
                                type="password"
                                values={formik.values.confirmaSenha}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.confirmaSenha && formik.errors.confirmaSenha}
                                error={formik.touched.confirmaSenha && Boolean(formik.errors.confirmaSenha)} />


                        </Grid>

                    </Grid>



                </Paper >





                <Grid container spacing={2} justifyContent="flex-start" marginTop={5}>

                    <Grid item>
                        {<Button variant="contained" type="submit"  startIcon={<SaveIcon />}>Salvar</Button>}
                    </Grid>

                </Grid>



            </ThemeProvider >

        </form>
    );
};

export default TrocaSenha;