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
import { initialValuesCdC } from "../../../utils/cadastro-contascontabeis/constantscdc";
import { centroDeCustoOptions } from "../../../utils/constantscadastros";


const CadCentrodeCusto = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const CadCdCSchema = yup.object().shape({
        descCentrodeCusto: yup.string().required('Informe o centro de custo.'),

    });




    const [nomeCentrodeCustoFiltro, setNomeCentrodeCustoFiltro] = useState('');

    const handleChange = (event: any, newValue: string) => {
        setNomeCentrodeCustoFiltro(newValue);
    };






    const formik = useFormik({
        initialValues: initialValuesCdC,
        validationSchema: CadCdCSchema,
        onSubmit: (values) => {

            alert(JSON.stringify(values, null, 2));
        },
    });



    return (

        <form onSubmit={formik.handleSubmit}>

            <ThemeProvider theme={theme}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={4}>

                        <MyAutoComplete
                            label="Centro de Custo Salvos"
                            options={centroDeCustoOptions}
                            value={nomeCentrodeCustoFiltro}
                            handleChange={handleChange}

                        />

                    </Grid>

                    <Grid item xs={3}>



                        {<Button color="primary" variant="outlined"

                            onClick={(event: any,) => {

                                alert(JSON.stringify(nomeCentrodeCustoFiltro));

                            }}


                            startIcon={<DeleteIcon />}>
                            Excluir
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
                                name="descCentrodeCusto"
                                label="Centro de Custo"
                                values={formik.values.descCentrodeCusto}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.descCentrodeCusto && formik.errors.descCentrodeCusto}
                                error={formik.touched.descCentrodeCusto && Boolean(formik.errors.descCentrodeCusto)} />


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

export default CadCentrodeCusto;