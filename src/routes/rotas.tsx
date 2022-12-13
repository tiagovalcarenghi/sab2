import { useRoutes } from 'react-router-dom/dist';
import CentrodeCusto from '../pages/main-menu/cadastro/contas-contabeis/CentrodeCusto';
import Contas from '../pages/main-menu/cadastro/contas-contabeis/Contas';
import ContasComplementar from '../pages/main-menu/cadastro/contas-contabeis/ContasComplementar';
import Enderecos from '../pages/main-menu/cadastro/enderecos/Enderecos';
import MinutaContratoPrestServ from '../pages/main-menu/cadastro/minutas-padrao/MinutaContratoPrestServ';
import MinutaPadraoCV from '../pages/main-menu/cadastro/minutas-padrao/MinutaPadraoCV';
import MinutaPadraoLocacao from '../pages/main-menu/cadastro/minutas-padrao/MinutaPadraoLocacao';
import Pessoas from '../pages/main-menu/cadastro/pessoas/Pessoas';
import Usuarios from '../pages/main-menu/cadastro/usuarios/Usuarios';
import Are from '../pages/main-menu/operacoes/are/Are';
import ContratoLocacao from '../pages/main-menu/operacoes/contrato-locacao/ContratoLocacao';
import CadastroContratoCV from '../pages/main-menu/operacoes/contratocv/CadastroContratoCV';
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
    { path: "cadastro/pessoas", element: <Pessoas /> },
    { path: "cadastro/usuarios", element: <Usuarios /> },
    { path: "cadastro/contas-contabeis/contas", element: <Contas /> },
    { path: "cadastro/contas-contabeis/contascomplement", element: <ContasComplementar /> },
    { path: "cadastro/contas-contabeis/cdc", element: <CentrodeCusto /> },
    { path: "cadastro/minutas-padrao/minutacontratoprestserv", element: <MinutaContratoPrestServ /> },
    { path: "cadastro/minutas-padrao/minutapadraocv", element: <MinutaPadraoCV /> },
    { path: "cadastro/minutas-padrao/minutapadraolocacao", element: <MinutaPadraoLocacao /> },
    { path: "cadastro/enderecos", element: <Enderecos /> },
    { path: "operacoes/contrato-locacao", element: <ContratoLocacao /> },
    { path: "operacoes/contratocv", element: <ContratoCV /> },    
    { path: 'operacoes/pagecadastrocontratocv', element: <CadastroContratoCV /> },
    { path: "operacoes/lancamento-bancos", element: <LancamentoBancos /> },
    { path: "operacoes/lancamento-contabil", element: <LancamentoContabil /> },
    { path: "operacoes/ordem-de-servico", element: <OrdedemServico /> },
    { path: "operacoes/are", element: <Are /> },
    { path: "relatorios/balancete", element: <Balancete /> },
    { path: "relatorios/dre", element: <Dre /> },
    { path: "relatorios/lancamento", element: <Lancamento /> },
    { path: "relatorios/livro-razao", element: <LivroRazao /> },
    { path: "relatorios/pesquisa-por-campo", element: <PesquisaPorCampo /> },

]);

export default Rotas;