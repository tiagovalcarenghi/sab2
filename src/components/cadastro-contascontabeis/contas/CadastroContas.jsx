import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import { MyAutoComplete, MySelect } from "../../form-components/FormInputDropdown";
import { FormInputText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';
import { initialValuesCadContas, tipoContaOptions, tipoSaldoOptions } from "../../../utils/cadastro-contascontabeis/contantscontas";
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import { contasOptions } from "../../../contexts/storage";


const CadastroContas = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const CadContasSchema = yup.object().shape({
        nomeConta: yup.string().required('Informe o nome da Conta.'),

    });



    const [tipoConta, setTipoConta] = useState('');

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setTipoConta(value);
    };


    const [tipoSaldoInicial, setTipoSaldo] = useState('');

    const handleChange2 = (event) => {
        const {
            target: { value },
        } = event;
        setTipoSaldo(value);
    };



    const [nomeContaFiltro, setNomeContaFiltro] = useState('');

    const handleChange3 = (event, newValue) => {
        setNomeContaFiltro(newValue);
    };




    const formik = useFormik({
        initialValues: initialValuesCadContas,
        validationSchema: CadContasSchema,
        onSubmit: (values) => {


            values.tipoConta = tipoConta;
            values.tipoSaldoInicial = tipoSaldoInicial;

            alert(JSON.stringify(values, null, 2));
        },
    });



    return (

        <form onSubmit={formik.handleSubmit}>

            <ThemeProvider theme={theme}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={4}>

                        <MyAutoComplete
                            label="Contas"
                            options={contasOptions}
                            value={nomeContaFiltro}
                            handleChange={handleChange3}

                        />

                    </Grid>

                    <Grid item xs={3}>

                        {<Button color="primary" variant="contained"

                            onClick={(event,) => {

                                alert(JSON.stringify(nomeContaFiltro));

                            }}


                            startIcon={<SearchIcon />}>
                            Filtrar
                        </Button>}

                    </Grid>

                </Grid>


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
                                name="nomeConta"
                                label="Nome Conta"
                                values={formik.values.nomeConta}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.nomeConta && formik.errors.nomeConta}
                                error={formik.touched.nomeConta && Boolean(formik.errors.nomeConta)} />


                        </Grid>


                    </Grid>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>
                            <MySelect
                                label="Tipo Conta"
                                options={tipoContaOptions}
                                value={tipoConta}
                                handleChange={handleChange}

                            />


                        </Grid>


                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>

                            <FormInputText
                                name="saldoInicial"
                                label="Saldo Inicial"
                                values={formik.values.saldoInicial}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.saldoInicial && formik.errors.saldoInicial}
                                error={formik.touched.saldoInicial && Boolean(formik.errors.saldoInicial)} />

                        </Grid>


                        <Grid item xs={2}>
                            <MySelect
                                label="Tipo Saldo"
                                options={tipoSaldoOptions}
                                value={tipoSaldoInicial}
                                handleChange={handleChange2}

                            />
                        </Grid>


                    </Grid>





                </Paper >






                <Grid container spacing={2} justifyContent="flex-start" marginTop={1}>

                    <Grid item>
                        {<Button variant="contained" type="submit" startIcon={<SaveIcon />}>Salvar</Button>}
                    </Grid>

                    <Grid item>
                        {<Button variant="outlined" startIcon={<DeleteIcon />}>Excluir</Button>}
                    </Grid>

                </Grid>



            </ThemeProvider >

        </form>
    );
};

export default CadastroContas;