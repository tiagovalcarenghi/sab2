import { useEffect, useState } from "react";
import ContratosCeVService from '../../services/operacoes/contrato-cev/contratoCeV';
import { useLocation } from "react-router-dom";
import CadastroCeVFinal from "./CadastroCeVFinal";
import { initialValuesOpeContratoCeV } from "../../utils/operacoes-contrato-cev/constantsopecontratocev";

const PageCadastroCeV = (props: any) => {



    const [contratoEmEdicao, setContratoEmEdicao] = useState();
    const location = useLocation();

    useEffect(() => {
        console.log("filmeEmEdicao no Update", contratoEmEdicao);

        return () => console.log("encerrou o componente");
    }, [contratoEmEdicao]);

    useEffect(() => {
      

        if (!location.state.id) {
            //setContratoEmEdicao(null);
            return;
        }
        carregarContrato(location.state.id);
        //return () => ContratosCeVService.atualizarContrato;
    }, [location.state.id]);


    const carregarContrato  = async (id:any) => {
        const contrato = await ContratosCeVService.buscarContratoPorId(id);
        setContratoEmEdicao(contrato);
    }

    const salvarContrato = (contrato: any) => {
        if (contrato.id) {
            ContratosCeVService.atualizarContrato(contrato);
            return;
        }

        ContratosCeVService.inserirContrato(contrato);
    }

    const limparContratoEmEdicao = () => {
        console.log("filmeEmEdicao", contratoEmEdicao);
    }


  



    return (

        <>
            <CadastroCeVFinal contrato={contratoEmEdicao} salvar={salvarContrato} limpar={limparContratoEmEdicao} />
        </>

    )

}

export default PageCadastroCeV;