import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";
import LoginPage from "./pages/LoginPage";
import AppMenu from "./pages/MainMenuPage/AppMenu";

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
                    <Route path="/*" element={<Private><AppMenu /></Private>} />
                    {/* <Route path="cadastro/pessoas" element={<Private><Pessoas /></Private>} />
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
                    <Route path="relatorios/pesquisa-por-campo" element={<Private><PesquisaPorCampo  /></Private>} /> */}
                </Routes>
            </AuthProvider>
        </Router>
    );

};

export default AppRoutes;
