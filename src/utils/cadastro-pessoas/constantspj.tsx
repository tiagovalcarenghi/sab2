export const initialValuesPJ = {
    nomeEmpresarial: '',
    cnpj: '',
    cep: '',
    logradouro: '',
    bairro: '',
    numero: '',
    complemento: '',
    uf: '',
    localidade: '',
    representantesLegais: [''], 
    nomeEmpresarialFiltro: '',
    cnpjFiltro: '',
  }
  
  
  export interface FormValuesPessoaPJ {
    nomeEmpresarial: string;
    cnpj: string;
    cep: string;
    logradouro: string;
    bairro: string | undefined;
    numero: string;
    complemento: string;
    uf: string | undefined;
    localidade: string | undefined;
    representantesLegais: string[];
    nomeEmpresarialFiltro: string;
    cnpjFiltro: string;
  }


  export const representantesLegaisOptions = [
    { value: 1, label: "Tiago Amaral Valcarenghi" },
    { value: 2, label: "Elvis Sandro Valcarenghi" },
    { value: 3, label: "John Connor" },   
  ];
  