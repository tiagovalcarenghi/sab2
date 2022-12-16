import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GridContratoCeV from "../../../../components/operacoes-contrato-cev/GridContratoCeV";



const ContratoCeVPage = (props) => {


    const navigate = useNavigate();
    
    const [contratoCeVList, setContratoCeVList] = useState([]);
    const [disable, setDisable] = useState(true);

    useEffect(() => {

        setContratoCeVList(JSON.parse(localStorage.getItem('contratocev_db')));

        const usuario = JSON.parse(localStorage.getItem('user_storage'));
        if (usuario) {
            usuario.tipoUser === 'ADMIN' ? setDisable(false) : setDisable(true);
        }

    }, []);


    const navigateToComponent = (id) => {
        navigate('operacoes/cadcontratocv', { state: { id: id } });
    }

    const deleteContrato = (data) => {

        let items = JSON.parse(localStorage.getItem("contratocev_db"));
        items = items.filter((item) => item.id !== data.id);
        localStorage.setItem("contratocev_db", JSON.stringify(items));
        if (items.length === 0) {
            localStorage.removeItem("contratocev_db");
        }
        setContratoCeVList(JSON.parse(localStorage.getItem("contratocev_db")));
    }


    return (


        <>

            <Grid style={{
                margin: "10px"
            }} >
                <Grid item xs={12}>
                    <Grid container spacing={2} justifyContent="flex-end" >
                        <Grid item>
                            <Button variant="contained" color="primary" disabled={disable} onClick={() => { navigateToComponent(null) }} >Novo Contrato</Button>
                        </Grid>                        
                    </Grid>
                </Grid>

            </Grid>

            
            <GridContratoCeV contratos={contratoCeVList}  deletecontrato={deleteContrato} disable={disable} /> 

        </>
    );

}
export default ContratoCeVPage;