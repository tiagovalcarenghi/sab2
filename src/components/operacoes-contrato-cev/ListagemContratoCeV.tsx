import { Grid, IconButton, Paper, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";



const ListagemContratoCeV = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const { contratos } = props;

    
    const handleExcluir = (contrato: any) => {
        props.excluirFilme(contrato);
    }


    useEffect(() => {       
        console.log("Contratos:", props.contratos);
    })



    return (



        <ThemeProvider theme={theme}>



            <>
                {(!contratos || contratos.length === 0) &&
                    <span>
                        Não existem contratos a serem listados!
                    </span>
                }


                {(contratos && contratos.length > 0) &&
                    <Grid container>
                        <Grid item xs={11}>
                            <TableContainer component={Paper}>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Número Contrato</TableCell>
                                            <TableCell>Endereço</TableCell>
                                            <TableCell align="center" colSpan={2}>Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {contratos.map((contrato: any) => (
                                            <TableRow key={contrato.id} >
                                                <TableCell width="25%">{contrato.numeroContrato}</TableCell>
                                                <TableCell >{contrato.descEndereco}</TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" component={Link} to={`../operacoes/cadastrocontratocv/${contrato.id}`}  >
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" onClick={() => handleExcluir(contrato)} >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                }
            </>

        </ThemeProvider >


    );
};

export default ListagemContratoCeV;