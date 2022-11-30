import { Button, Grid, Paper, SelectChangeEvent } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from "formik";
import { useEffect, useState } from "react";

import * as yup from 'yup';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { enderecoOptions } from "../../utils/constantscadastros";
import { MyAutoComplete } from "../form-components/FormInputDropdown";
import { FormInputText } from "../form-components/FormInput";
import { initialValuesOpeContratoCeV } from "../../utils/operacoes-contrato-cev/constantsopecontratocev";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListagemContratoCeV from "./ListagemContratoCeV";
import ContratosCeVService from '../../services/operacoes/contrato-cev/contratoCeV';
import { Link } from "react-router-dom";



const OperacoesContratoCeV = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const [contratos, setContratos] = useState([]);
  
    useEffect(() => {
        console.log('passou pelo useeffect');
        carregarContratos();
    }, [])


    const carregarContratos = async () => {
        const contratos = await ContratosCeVService.buscarContratos();
        setContratos(contratos);
    }   
    


    const excluirContrato = (contrato:any) => {
        ContratosCeVService.excluirContrato(contrato.id).then(() => carregarContratos());
    }
    

    return (


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

                        <Grid item>
                            {<Button variant="outlined" component={Link} to="../operacoes/cadastrocontratocv"  startIcon={<AddBoxIcon />}>Novo Contrato</Button>}
                        </Grid>

                    </Grid>

                </Grid>


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                    <Grid item xs={12}>
                        <ListagemContratoCeV contratos={contratos}  excluirContrato ={excluirContrato} />
                    </Grid>


                </Grid>

            </Paper>

        </ThemeProvider >

    );
};

export default OperacoesContratoCeV;