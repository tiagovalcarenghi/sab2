import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CadastroContratoCeV from "../../../../../components/operacoes-contrato-cev/CadastroContratoCeV";
import { OPERACOESCEVINITIAL } from "../../../../../utils/operacoes-contrato-cev/constantsopecontratocev";


const CadastroCeVPage = () => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    const [contratoEmEdicao, setContratoEmEdicao] = useState(OPERACOESCEVINITIAL);
    const location = useLocation();

    useEffect(() => {
        if (!location.state.id) {
            setContratoEmEdicao(OPERACOESCEVINITIAL);
            return;
        }
        carregarContrato(location.state.id);
    }, [location.state.id]);

    const carregarContrato = async (id) => {
        const contratoStorage = JSON.parse(localStorage.getItem('contratocev_db'));
        const selectContrato = contratoStorage?.filter((contrato) => contrato.id === id);
        setContratoEmEdicao(selectContrato[0]);
    }

    const salvarContrato = (contrato) => {

        if (user.id) {
            var updateContrato = JSON.parse(localStorage.getItem("contratocev_db"));
            updateContrato[updateContrato.findIndex(x => x.id ===contrato.id)] = contrato
            localStorage.setItem("contratocev_db", JSON.stringify(updateContrato));
            setContratoEmEdicao(OPERACOESCEVINITIAL);
            return;
        }

        var getId = JSON.parse(localStorage.getItem("contratocev_db"));
        contrato.id =  getId === null ? 1 : getId[getId.length - 1].id + 1;
        const newContrato = getId === null ? [contrato] : [...JSON.parse(localStorage.getItem('contratocev_db')), contrato];
        localStorage.setItem('contratocev_db', JSON.stringify(newContrato))
        setUserEmEdicao(OPERACOESCEVINITIAL);

    }

    const limparContratoEmEdicao = () => {
        setContratoEmEdicao(OPERACOESCEVINITIAL);
    }


    return (       


        <ThemeProvider theme={theme}>
            <CadastroContratoCeV contrato={contratoEmEdicao} salvar={salvarContrato} limpar={limparContratoEmEdicao} />
        </ThemeProvider >


    );
};

export default CadastroCeVPage;