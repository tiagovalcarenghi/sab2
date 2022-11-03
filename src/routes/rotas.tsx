import { useRoutes } from 'react-router-dom/dist';
import Login from '../pages/login/Login';
import CentrodeCusto from '../pages/main-menu/cadastro/contas-contabeis/CentrodeCusto';
import Contas from '../pages/main-menu/cadastro/contas-contabeis/Contas';
import ContasComplementar from '../pages/main-menu/cadastro/contas-contabeis/ContasComplementar';
import Enderecos from '../pages/main-menu/cadastro/enderecos/Enderecos';
import MinutaContratoPrestServ from '../pages/main-menu/cadastro/minutas-padrao/MinutaContratoPrestServ';
import MinutaPadraoCV from '../pages/main-menu/cadastro/minutas-padrao/MinutaPadraoCV';
import MinutaPadraoLocacao from '../pages/main-menu/cadastro/minutas-padrao/MinutaPadraoLocacao';
import Pessoas from '../pages/main-menu/cadastro/pessoas/Pessoas';
import Usuarios from '../pages/main-menu/cadastro/usuarios/Usuarios';
import MainMenu from '../pages/main-menu/MainMenu';
import Are from '../pages/main-menu/operacoes/are/Are';
import ContratoLocacao from '../pages/main-menu/operacoes/contrato-locacao/ContratoLocacao';
import ContratoCV from '../pages/main-menu/operacoes/contratocv/ContratoCV';
import LancamentoBancos from '../pages/main-menu/operacoes/lancamento-bancos/LancamentoBancos';
import LancamentoContabil from '../pages/main-menu/operacoes/lancamento-contabil/LancamentoContabil';
import OrdedemServico from '../pages/main-menu/operacoes/ordem-de-servico/OrdemdeServico';
import Balancete from '../pages/main-menu/relatorios/balancete/Balancete';
import Dre from '../pages/main-menu/relatorios/dre/Dre';
import Lancamento from '../pages/main-menu/relatorios/lancamento/Lancamento';
import LivroRazao from '../pages/main-menu/relatorios/livro-razao/LivroRazao';
import PesquisaPorCampo from '../pages/main-menu/relatorios/pesquisa-por-campo/PesquisaPorCampo';



const Rotas = () => useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/sab", element: <Login /> },
    { path: "/main-menu", element: <MainMenu /> },

    { path: "/main-menu/cadastro/pessoas/:edit", element: <Pessoas /> },

    { path: "/main-menu/cadastro/usuarios/:edit", element: <Usuarios /> },

    { path: "/main-menu/cadastro/contas-contabeis/contas", element: <Contas /> },
    { path: "/main-menu/cadastro/contas-contabeis/contascomplement", element: <ContasComplementar /> },
    { path: "/main-menu/cadastro/contas-contabeis/cdc", element: <CentrodeCusto /> },

    { path: "/main-menu/cadastro/minutas-padrao/minutacontratoprestserv", element: <MinutaContratoPrestServ /> },
    { path: "/main-menu/cadastro/minutas-padrao/minutapadraocv", element: <MinutaPadraoCV /> },
    { path: "/main-menu/cadastro/minutas-padrao/minutapadraolocacao", element: <MinutaPadraoLocacao /> },

    { path: "/main-menu/cadastro/enderecos/:edit", element: <Enderecos /> },


    { path: "/main-menu/operacoes/contrato-locacao/:edit", element: <ContratoLocacao /> },
    { path: "/main-menu/operacoes/contratocv/:edit", element: <ContratoCV /> },
    { path: "/main-menu/operacoes/lancamento-bancos/:edit", element: <LancamentoBancos /> },
    { path: "/main-menu/operacoes/lancamento-contabil/:edit", element: <LancamentoContabil /> },
    { path: "/main-menu/operacoes/ordem-de-servico/:edit", element: <OrdedemServico /> },
    { path: "/main-menu/operacoes/are", element: <Are /> },

    { path: "/main-menu/relatorios/balancete", element: <Balancete /> },
    { path: "/main-menu/relatorios/dre", element: <Dre /> },
    { path: "/main-menu/relatorios/lancamento", element: <Lancamento /> },
    { path: "/main-menu/relatorios/livro-razao", element: <LivroRazao /> },
    { path: "/main-menu/relatorios/pesquisa-por-campo", element: <PesquisaPorCampo /> },



]);

export default Rotas;