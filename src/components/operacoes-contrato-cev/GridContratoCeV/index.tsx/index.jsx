import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';


const GridContratoCeV = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const { contratos, deletecontrato, disable } = props;


    const handleExcluir = (contrato) => {
        deletecontrato(contrato);
    }

    const navigate = useNavigate();


    const navigateToComponent = (id) => {
        navigate('../operacoes/cadcontratocv', { state: { id: id } });
    }

    return (

        // contratos.contratos
        <ThemeProvider theme={theme}>

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
                            <>
                                {(contratos && contratos.length > 0) &&

                                    <TableBody>
                                        {contratos.map((row) => (
                                            <TableRow key={row.id} >
                                                <TableCell width="25%">{row.numeroContrato}</TableCell>
                                                <TableCell >{row.descEndereco}</TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" disabled={disable} onClick={() => { navigateToComponent(row.id) }}  >
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell width="5%" align="center">
                                                    <IconButton color="primary" disabled={disable} onClick={() => handleExcluir(row)} >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                }
                            </>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </ThemeProvider >

    );
};

export default GridContratoCeV;
