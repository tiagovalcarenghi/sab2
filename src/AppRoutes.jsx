import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Enderecos from "./pages/main-menu/cadastro/enderecos/Enderecos";
import MainMenu from "./pages/MainMenuPage/AppMenu";
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
import LancamentoBancos from '../pages/main-menu/operacoes/lancamento-bancos/LancamentoBancos';
import LancamentoContabil from '../pages/main-menu/operacoes/lancamento-contabil/LancamentoContabil';
import OrdedemServico from '../pages/main-menu/operacoes/ordem-de-servico/OrdemdeServico';
import Balancete from '../pages/main-menu/relatorios/balancete/Balancete';
import Dre from '../pages/main-menu/relatorios/dre/Dre';
import Lancamento from '../pages/main-menu/relatorios/lancamento/Lancamento';
import LivroRazao from '../pages/main-menu/relatorios/livro-razao/LivroRazao';
import PesquisaPorCampo from '../pages/main-menu/relatorios/pesquisa-por-campo/PesquisaPorCampo';
import ContratoCeVPage from "./pages/MainMenuPage/operacoes/ContratoCeVPage";
import CadastroCeVPage from "./pages/MainMenuPage/operacoes/ContratoCeVPage/CadastroCeVPage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {

    const Private = ({ children }) => {

        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;

    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/*" element={<Private><MainMenu /></Private>} />
                    <Route path="cadastro/pessoas" element={<Private><Pessoas /></Private>} />
                    <Route path="cadastro/usuarios" element={<Private><Usuarios /></Private>} />
                    <Route path="cadastro/contas-contabeis/contas" element={<Private><Contas  /></Private>} />
                    <Route path="cadastro/contas-contabeis/contascomplement" element={<Private><ContasComplementar  /></Private>} />
                    <Route path="cadastro/contas-contabeis/cdc" element={<Private><CentrodeCusto  /></Private>} />
                    <Route path="cadastro/minutas-padrao/minutacontratoprestserv" element={<Private><MinutaContratoPrestServ  /></Private>} />
                    <Route path="cadastro/minutas-padrao/minutapadraocv" element={<Private><MinutaPadraoCV  /></Private>} />
                    <Route path="cadastro/minutas-padrao/minutapadraolocacao" element={<Private><MinutaPadraoLocacao /></Private>} />
                    <Route path="cadastro/enderecos" element={<Private><Enderecos /></Private >} />
                    <Route path="operacoes/contrato-locacao" element={<Private><ContratoLocacao  /></Private>} />
                    <Route path="operacoes/contratocv" element={<Private><ContratoCeVPage /></Private>} />
                    <Route path="operacoes/cadcontratocv" element={<Private><CadastroCeVPage /></Private>} />
                    <Route path="operacoes/lancamento-bancos" element={<Private><LancamentoBancos  /></Private>} />
                    <Route path="operacoes/lancamento-contabil" element={<Private><LancamentoContabil  /></Private>} />
                    <Route path="operacoes/ordem-de-servico" element={<Private><OrdedemServico  /></Private>} />
                    <Route path="operacoes/are" element={<Private><Are  /></Private>} />
                    <Route path="relatorios/balancete" element={<Private><Balancete  /></Private>} />
                    <Route path="relatorios/dre" element={<Private><Dre  /></Private>} />
                    <Route path="relatorios/lancamento" element={<Private><Lancamento  /></Private>} />
                    <Route path="relatorios/livro-razao" element={<Private><LivroRazao  /></Private>} />
                    <Route path="relatorios/pesquisa-por-campo" element={<Private><PesquisaPorCampo  /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    );

};

export default AppRoutes;
