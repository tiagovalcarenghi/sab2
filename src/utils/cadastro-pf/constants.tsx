export const initialValues = {
  nomeCompleto: '',
  cdEstadoCivil: '',
  profissao: '',
  nacionalidade: '',
  ci: '',
  cnh: '',
  docExtra: '',
  cpf: '',
  endereco: {},
  telefone: '',
  telefoneAdicional: '',
  email: '',
}


export interface FormValuesPessoaPF {
  nomeCompleto: string;
  cdEstadoCivil: string;
  profissao: string;
  nacionalidade: string;
  ci: string;
  cnh: string,
  docExtra: string,
  cpf: string,
  endereco: Endereco; 
  telefone: string;
  telefoneAdicional: string;
  email: string;
}



export interface Endereco   {
  logradouro: string | undefined;
  cep: string;
  bairro: string | undefined;
  numero: string;
  complemento: string;
  uf: string | undefined;
  localidade: string | undefined;
}


export const initialValuesEndereco = {
  logradouro: "",
  cep: "",
  bairro: "",
  numero: "",
  complemento: "",
  estado: "",
  localidade: "",
}

export const estadoCivilOptions = [
 {value: 1, label: "Solteiro(a)"},
 {value: 2, label: "Casado(a)"},  
 {value: 3, label: "Divorciado(a)"},  
 {value: 4, label: "Viúvo(a)"},  
 {value: 5, label: "Separado(a)"},  
];


