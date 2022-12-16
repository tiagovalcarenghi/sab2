import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from 'yup';
import { FormInputMultilineText, FormInputText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';
import { initialValuesCadMPCeV } from "../../../utils/cadstro-minutas-padrao/contantscadmpcev";


const CadMPCeV = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const CadMPCeVSchema = yup.object().shape({
        descMPCeV: yup.string().required('Informe o centro de custo.'),
        
    });



  

    const formik = useFormik({
        initialValues: initialValuesCadMPCeV,
        validationSchema: CadMPCeVSchema,
        onSubmit: (values) => {
          
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



                        <Grid item xs={12}>

                        <FormInputMultilineText
                                name="descMPCeV"
                                label="Minuta Padrão - Contrato de Compra e Venda"
                                values={formik.values.descMPCeV}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.descMPCeV && formik.errors.descMPCeV}
                                error={formik.touched.descMPCeV && Boolean(formik.errors.descMPCeV)} />

                          
                        </Grid>


                    </Grid>

                                  


                </Paper >






                <Grid container spacing={2} justifyContent="flex-start" marginTop={1}>

                    <Grid item>
                        {<Button variant="contained" type="submit"  startIcon={<SaveIcon />}>Salvar</Button>}
                    </Grid>
                  
                   
                </Grid>



            </ThemeProvider >

        </form>
    );
};

export default CadMPCeV;