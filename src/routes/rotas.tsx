import { useRoutes } from 'react-router-dom/dist';
import Login from '../pages/login/Login';



const Rotas = () => useRoutes([
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    // { path: "/main-menu", element: <AppMenu /> },

    // { path: "/main-menu/cadastro/pessoas/:edit", element: <CadastroPessoas /> },
    // { path: "/main-menu/cadastro/usuarios/:edit", element: <CadastroUsuarios /> },


]);

export default Rotas;