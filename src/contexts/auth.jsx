import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContratoCeV, createUserAdmin, createUserPadrao } from "./storage";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const usuario = localStorage.getItem('user_storage');
        const usersStorage = localStorage.getItem('users_db');

        

        if (usuario && usersStorage) {

            console.log('1');

            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.usuario === JSON.parse(usuario).usuario
            );

            if (hasUser) setUser(hasUser[0])

        } else {

            console.log('2');

            localStorage.setItem('users_db', JSON.stringify(createUserAdmin));
            //localStorage.setItem('users_db', JSON.stringify(createUserPadrao));

        }

        carregarStorage();
        setLoading(false);
    }, [])



    const carregarStorage = async () => {       
        
        localStorage.setItem('contratocev_db', JSON.stringify(createContratoCeV));

    }


    const login = (nameUser, password) => {

        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = usersStorage?.filter((user) => user.nameUser === nameUser);

        if (hasUser?.length) {
            if (hasUser[0].nameUser === nameUser && hasUser[0].password === password) {

                const loggedUser = {
                    id: hasUser[0].id,
                    nameUser: nameUser,
                    email: hasUser[0].email,
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