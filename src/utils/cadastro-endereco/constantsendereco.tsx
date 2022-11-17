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
  
  
  export const enderecoOptions = [
    { value: 1, label: "Rua Dona Cecília, 603" },
    { value: 2, label: "Rua João da Silva, 1030 Ap 403 Bloco 02" },
    { value: 3, label: "Avenida General Flores da Cunha, 1236" },
  ];
  
  
  
  
  
  