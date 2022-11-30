import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContratosCeVService from '../../services/operacoes/contrato-cev/contratoCeV';
import CadastroCeVFinal from "./CadastroCeVFinal";

const CadContratoCeV = (props: any) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });



    const { id } = useParams();
    const [contratoEmEdicao, setContratoEmEdicao] = useState('');


    useEffect(() => {
        console.log("filmeEmEdicao no Update", contratoEmEdicao);

        return () => console.log("encerrou o componente");
    }, [contratoEmEdicao]);

    useEffect(() => {
        if (!id) {
            setContratoEmEdicao('');
            return;
        }
        carregarContrato(id);
    }, [id]);

    const carregarContrato = async (id:any) => {
        const contrato = await ContratosCeVService.buscarContratoPorId(id);
        setContratoEmEdicao(contrato);
    }

    const salvarContrato = (contrato:any) => {
        if (contrato.id) {
            ContratosCeVService.atualizarContrato(contrato).then(() => {
                setContratoEmEdicao('');
            });
            return;
        }

        ContratosCeVService.inserirContrato(contrato).then(() => {
            setContratoEmEdicao('');
        });
    }
   



    return (


        <ThemeProvider theme={theme}>

            <CadastroCeVFinal contrato={contratoEmEdicao} salvar={salvarContrato}  />

        </ThemeProvider >
    );
};

export default CadContratoCeV;