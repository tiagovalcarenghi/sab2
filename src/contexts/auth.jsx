import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const usuario = localStorage.getItem('user_storage');
        const usersStorage = localStorage.getItem('users_db');

        if (usuario && usersStorage) {

            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(usuario).email
            );

            if (hasUser) setUser(hasUser[0])

        } else {

            const newAdmin = [{
                id: 1,
                nameUser: 'Administrador',
                email: 'admin@sab.com.br',
                tipoUser: 'ADMIN',
                password: 'admin'
            }];

            localStorage.setItem('users_db', JSON.stringify(newAdmin))


            const newUser = [...JSON.parse(localStorage.getItem('users_db')), {
                id: 2,
                nameUser: 'Usuário',
                email: 'user@sab.com.br',
                tipoUser: 'USER',
                password: 'user'
            }];

            localStorage.setItem('users_db', JSON.stringify(newUser))
        }

        setLoading(false);
    }, [])



    const login = (email, password) => {

        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {

                const loggedUser = {
                    id: hasUser[0].id,
                    nameUser: hasUser[0].nameUser,
                    email,
                    tipoUser: hasUser[0].tipoUser
                }

                localStorage.setItem('user_storage', JSON.stringify(loggedUser));

                setUser(loggedUser);

                return;

            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário Não Cadastrado";
        }

    };

    const logout = () => {
        localStorage.removeItem('user_storage');
        setUser(null);
        navigate("/login");
    };

    return (

        <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }} >
            {children}
        </AuthContext.Provider>

    );

};