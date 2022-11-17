import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import { useState } from "react";
import { initialValuesCadUsu, pessoaFisicaOptions, tipoAcessoOptions } from "../../../utils/cadastro-usuarios/constantscadusu";
import * as yup from 'yup';
import { MySelect } from "../../form-components/FormInputDropdown";
import { FormInputText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';


const CadastroUsuario = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const CadUsuSchema = yup.object().shape({
        usuario: yup.string().required('Informe o usuário.'),
        senha: yup.string().required('Informe a senha.'),

    });



    const [pessoaFisica, setPessoaFisica] = useState('');

    const handleChange = (event: SelectChangeEvent<typeof pessoaFisica>) => {
        const {
            target: { value },
        } = event;
        setPessoaFisica(value);
    };


    const [tipoAccesso, setTipoAcesso] = useState('');

    const handleChange2 = (event: SelectChangeEvent<typeof tipoAccesso>) => {
        const {
            target: { value },
        } = event;
        setTipoAcesso(value);
    };




    const formik = useFormik({
        initialValues: initialValuesCadUsu,
        validationSchema: CadUsuSchema,
        onSubmit: (values) => {

            values.pessoaFisica = pessoaFisica;
            values.tipoAcesso = tipoAccesso;

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
                            <MySelect
                                label="Pessoa"
                                options={pessoaFisicaOptions}
                                value={pessoaFisica}
                                handleChange={handleChange}
                                
                            />
                        </Grid>


                    </Grid>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>

                            <FormInputText
                                name="usuario"
                                label="Usuário"
                                values={formik.values.usuario}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.usuario && formik.errors.usuario}
                                error={formik.touched.usuario && Boolean(formik.errors.usuario)} />

                        </Grid>


                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>

                            <FormInputText
                                name="senha"
                                label="Senha"
                                values={formik.values.senha}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.senha && formik.errors.senha}
                                error={formik.touched.senha && Boolean(formik.errors.senha)} />

                        </Grid>


                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                        <Grid item xs={4}>
                            <MySelect
                                label="Tipo Acesso"
                                options={tipoAcessoOptions}
                                value={tipoAccesso}
                                handleChange={handleChange2}
                              
                            />
                        </Grid>

                    </Grid>



                </Paper >






                <Grid container spacing={2} justifyContent="flex-start" marginTop={1}>

                    <Grid item>
                        {<Button variant="contained" type="submit"  startIcon={<SaveIcon />}>Salvar</Button>}
                    </Grid>

                    <Grid item>
                        {<Button variant="outlined" startIcon={<DeleteIcon />}>Excluir</Button>}
                    </Grid>
                   
                </Grid>



            </ThemeProvider >

        </form>
    );
};

export default CadastroUsuario;