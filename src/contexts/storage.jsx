

export const createUserAdmin = [{
    id: 1,
    nameUser: 'Administrador',
    email: 'admin@sab.com.br',
    tipoUser: 'ADMIN',
    password: 'admin'
}]

export const createUserPadrao = [...JSON.parse(localStorage.getItem('users_db')), {
    id: 2,
    nameUser: 'Usuário',
    email: 'user@sab.com.br',
    tipoUser: 'USER',
    password: 'user'
}];



export const createContratoCeV = [
    {
        id: 1,
        numeroContrato: '1285',
        cdEndereco: 'Rua Dona Cecília, 603',
       
    },
    {
        id: 2,
        numeroContrato: '2236',
        cdEndereco: 'Rua Antônio Bastos, 603 Casa 3',
    },
    {
        id: 3,
        numeroContrato: '5585',
        cdEndereco: 'Rua Panamericana 758, Ap 236 Bloco C',
    },

];



