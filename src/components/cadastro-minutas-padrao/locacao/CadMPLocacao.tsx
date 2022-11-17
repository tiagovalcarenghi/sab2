import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import * as yup from 'yup';
import { FormInputMultilineText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';
import { initialValuesCadMPLocacao } from "../../../utils/cadstro-minutas-padrao/constantscadmplocacao";


const CadMPLocacao = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    const CadMPLocacaoSchema = yup.object().shape({
        descMPLocacao: yup.string().required('Informe o centro de custo.'),
        
    });



  

    const formik = useFormik({
        initialValues: initialValuesCadMPLocacao,
        validationSchema: CadMPLocacaoSchema,
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
                                name="descMPLocacao"
                                label="Minuta Padrão - Locação"
                                values={formik.values.descMPLocacao}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.descMPLocacao && formik.errors.descMPLocacao}
                                error={formik.touched.descMPLocacao && Boolean(formik.errors.descMPLocacao)} />

                          
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

export default CadMPLocacao;