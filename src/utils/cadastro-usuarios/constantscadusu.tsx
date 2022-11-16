export const initialValuesCadUsu = {
    pessoaFisica: '',       
    usuario: '',
    senha: '',      
    tipoAcesso: '', 
  }
  
  
  export interface FormValuesCadUsu {
    pessoaFisica: string,       
    usuario: string,
    senha: string,      
    tipoAcesso: string, 
  }


  export const pessoaFisicaOptions = [
    { value: 1, label: "Tiago Amaral Valcarenghi" },
    { value: 2, label: "Elvis Sandro Valcarenghi" },
    { value: 3, label: "John Connor" },   
  ];



  export const tipoAcessoOptions = [
    { value: 1, label: "Administrador" },
    { value: 2, label: "Usuario Master" },
    { value: 3, label: "Usuario Standard" }
  ];
  