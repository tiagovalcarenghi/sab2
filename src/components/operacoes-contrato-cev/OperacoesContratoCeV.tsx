import { Button, Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListagemContratoCeV from "./ListagemContratoCeV";
import ContratosCeVService from '../../services/operacoes/contrato-cev/contratoCeV';
import { Link, useNavigate } from "react-router-dom";



const OperacoesContratoCeV = () => {


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



    const excluirContrato = (contrato: any) => {
        ContratosCeVService.excluirContrato(contrato.id).then(() => carregarContratos());
    }


    const navigate = useNavigate();


    const navigateToComponent = (id: any) => {
        navigate('../operacoes/pagecadastrocontratocv', { state: { id: id } });
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
                            {<Button variant="outlined" onClick={() => { navigateToComponent(null) }} startIcon={<AddBoxIcon />}>Novo Contrato</Button>}
                        </Grid>

                    </Grid>

                </Grid>


                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                    <Grid item xs={12}>
                        <ListagemContratoCeV contratos={contratos} excluirContrato={excluirContrato} />
                    </Grid>


                </Grid>

            </Paper>

        </ThemeProvider >

    );
};

export default OperacoesContratoCeV;