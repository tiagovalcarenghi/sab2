import { Button, Grid, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import { FormInputText } from "../../form-components/FormInput";
import { initialValuesOpeContratoCeV } from "../../../utils/operacoes-contrato-cev/constantsopecontratocev";
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';


const CadastroContratoCeV = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });



    const CadCdCSchema = yup.object().shape({
        numeroContrato: yup.string().required('Informe o centro de custo.'),
        cdEndereco: yup.string().required('Informe o centro de custo.'),

    });


    const { contrato, salvar, limpar } = props;

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: contrato || initialValuesOpeContratoCeV,
        validationSchema: CadCdCSchema,
        onSubmit: (values) => {

            console.log("values", values);
            salvar(values);
            formik.resetForm();         
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

                    <Grid container spacing={3}>
                        <Grid item xs={11}>
                            <FormInputText
                                name="numeroContrato"
                                label="numeroContrato"
                                values={contrato.numeroContrato}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.numeroContrato && formik.errors.numeroContrato}
                                error={formik.touched.numeroContrato && Boolean(formik.errors.numeroContrato)} />
                        </Grid>
                        <Grid item xs={11}>
                            <FormInputText
                                name="descEndereco"
                                label="descEndereco"
                                values={contrato.descEndereco}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.descEndereco && formik.errors.descEndereco}
                                error={formik.touched.descEndereco && Boolean(formik.errors.descEndereco)} />
                        </Grid>

                        <Grid container spacing={2} justifyContent="flex-end" marginTop={1}>

                            <Grid item>
                                {<Button variant="contained" type="submit" startIcon={<SaveIcon />}>Salvar</Button>}
                            </Grid>

                            <Grid item>
                                <Button

                                    onClick={(e) => {
                                        e.preventDefault();
                                        formik.resetForm();
                                        limpar();
                                    }}
                                    variant={"outlined"} startIcon={<ReplayCircleFilledIcon />}>Limpar Dados</Button>
                            </Grid>

                        </Grid>

                    </Grid>


                </Paper >





            </ThemeProvider >

        </form>
    );
};

export default CadastroContratoCeV;