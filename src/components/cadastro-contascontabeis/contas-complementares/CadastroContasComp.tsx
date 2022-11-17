import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import { MySelect } from "../../form-components/FormInputDropdown";
import { FormInputText } from "../../form-components/FormInput";
import SaveIcon from '@mui/icons-material/Save';
import { initialValuesCadContas, tipoContaOptions, tipoSaldoOptions } from "../../../utils/cadastro-contascontabeis/contantscontas";
import { baseContasComplementaresOptions, initialValuesCadContasComp } from "../../../utils/cadastro-contascontabeis/contantscontascomp";
import { FormCheckBox } from "../../form-components/FormCheckBox";
import DeleteIcon from '@mui/icons-material/Delete';


const CadastroContasComp = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });


    

    const [cdContaComplementar, setCdContaComplementar] = useState('');


    const handleChange = (event: SelectChangeEvent<typeof cdContaComplementar>) => {
        const {
            target: { value },
        } = event;
        setCdContaComplementar(value);
    };


    const [checked, setChecked] = useState(false);

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };





    const formik = useFormik({
        initialValues: initialValuesCadContasComp,
        //validationSchema: CadContasCompSchema,
        onSubmit: (values) => {


            values.cdContaComplementar = cdContaComplementar;
            values.isBanco = checked;



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
                                label="Conta Complementar"
                                options={baseContasComplementaresOptions}
                                value={cdContaComplementar}
                                handleChange={handleChange}
                            />


                        </Grid>


                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={4}>
                            <FormCheckBox
                                checked={checked}
                                onChange={handleChange2}
                                value={checked}       
                                label="Caso, conta seja banco, favor marcar essa opção."
                                labelPlacement="end"                        

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

export default CadastroContasComp;