import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GridContratoCeV from "../../../../components/operacoes-contrato-cev/GridContratoCeV/index.tsx";



const ContratoCeVPage = (props) => {


    const navigate = useNavigate();
    
    const [contratoCeVList, setContratoCeVList] = useState([]);
    const [disable, setDisable] = useState(true);

    useEffect(() => {

        // setUsersdb(JSON.parse(localStorage.getItem('users_db')));

        // const usuario = JSON.parse(localStorage.getItem('user_storage'));
        // if (usuario) {
        //     usuario.tipoUser === 'ADMIN' ? setDisable(false) : setDisable(true);
        // }

    }, []);


    const navigateToComponent = (id) => {
        navigate('operacoes/cadcontratocv', { state: { id: id } });
    }

    const deleteContrato = (data) => {

        // let items = JSON.parse(localStorage.getItem("users_db"));
        // items = items.filter((item) => item.id !== data.id);
        // localStorage.setItem("users_db", JSON.stringify(items));
        // if (items.length === 0) {
        //     localStorage.removeItem("users_db");
        // }
        // setUsersdb(JSON.parse(localStorage.getItem("users_db")));
    }


    // const filtraUsers = (userName) => {

    //     if (!userName) {
    //         setUsersdb(JSON.parse(localStorage.getItem('users_db')));
    //         return;
    //     }

    //     let items = JSON.parse(localStorage.getItem("users_db"));
    //     items = items?.filter((item) => item.nameUser === userName);
    //     setUsersdb(items);

    // }



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