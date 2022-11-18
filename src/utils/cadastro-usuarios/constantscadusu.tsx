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


  export const tipoAcessoOptions = [
    { value: 1, label: "Administrador" },
    { value: 2, label: "Usuario Master" },
    { value: 3, label: "Usuario Standard" }
  ];
  