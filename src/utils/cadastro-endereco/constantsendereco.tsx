export const initialValuesEndereco = {
    logradouro: '',
    cep: '',
    bairro: '',
    numero: '',
    complemento: '',
    localidade: '',
    uf: '',
    enderecoFiltro: ''
  }
  
  
  export interface FormValuesEndereco {
    logradouro: string | undefined;
    cep: string;
    bairro: string | undefined;
    numero: string;
    complemento: string;
    uf: string | undefined;
    localidade: string | undefined;
    enderecoFiltro: string;
  }
  
  
 
  
  