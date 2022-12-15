import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CadastroContratoCeV from "../../../../../components/operacoes-contrato-cev/CadastroContratoCeV";

const CadastroCeVPage = () => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const [contratoEmEdicao, setContratoEmEdicao] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (!location.state.id) {
            setContratoEmEdicao('');
            return;
        }
        carregarContrato(location.state.id);
    }, [location.state.id]);

    const carregarContrato = async (id) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));
        const selectUser = usersStorage?.filter((user) => user.id === id);
        setContratoEmEdicao(selectUser[0]);
    }

    const salvarContrato = (contrato) => {

        // if (user.id) {
        //     var updateUser = JSON.parse(localStorage.getItem("users_db"));
        //     updateUser[updateUser.findIndex(x => x.id ===user.id)] = user
        //     localStorage.setItem("users_db", JSON.stringify(updateUser));
        //     setContratoEmEdicao(USER_INICIAL);
        //     return;
        // }

        // var getId = JSON.parse(localStorage.getItem("users_db"));
        // user.id =  getId === null ? 1 : getId[getId.length - 1].id + 1;
        // const newUser = getId === null ? [user] : [...JSON.parse(localStorage.getItem('users_db')), user];
        // localStorage.setItem('users_db', JSON.stringify(newUser))
        // setUserEmEdicao(USER_INICIAL);

    }

    const limparContratoEmEdicao = () => {
        setContratoEmEdicao('');
    }




    return (
        


        <ThemeProvider theme={theme}>

            <CadastroContratoCeV contrato={contratoEmEdicao} salvar={salvarContrato} limpar={limparContratoEmEdicao} />

        </ThemeProvider >


    );
};

export default CadastroCeVPage;