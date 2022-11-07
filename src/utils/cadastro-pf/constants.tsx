
export const initialValues = {
  nomeCompleto: '',
  cdEstadoCivil: '',
  profissao: '',
  nacionalidade: '',
  ci: '',
  cnh: '',
  outro_doc: '',
  cpf: '',
  endereco: {}
}


export interface FormValuesPessoaPF {
  nomeCompleto: string;
  cdEstadoCivil: string;
  profissao: string;
  nacionalidade: string;
  ci: string;
  endereco: Endereco; 
}



export interface Endereco  {
  tipoendereco: typeof TipoEnderecoOptions[] | undefined;
  logradouro: string | undefined;
  cep: string | undefined;
  bairro: string | undefined;
  numero: string | undefined;
  complemento: string | undefined;
  estado: string | undefined;
  localidade: string | undefined;
}


export const initialValuesEndereco = {
  tipoendereco: [],
  logradouro: '',
  cep: '',
  bairro: '',
  numero: '',
  complemento: '',
  estado: '',
  localidade: '',
}

export const TipoEnderecoOptions = [
  {value: 1, label: "Alameda"},
  {value: 2, label: "Área"},  
  {value: 3, label: "Avenida"},  
  {value: 4, label: "Campo"},  
  {value: 5, label: "Conjunto"},  
  {value: 6, label: "Esplanada"},  
  {value: 7, label: "Estrada"},  
  {value: 8, label: "Ladeira"},  
  {value: 9, label: "Rua"},  
  {value: 10, label: "Rodovia"},  
 ];




export const estadoCivilOptions = [
 {value: 1, label: "Solteiro(a)"},
 {value: 2, label: "Casado(a)"},  
 {value: 3, label: "Divorciado(a)"},  
 {value: 4, label: "Viúvo(a)"},  
 {value: 5, label: "Separado(a)"},  
];


