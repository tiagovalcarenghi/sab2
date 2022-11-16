export const initialValuesPF = {
  nomeCompleto: '',
  cdEstadoCivil: '',
  profissao: '',
  nacionalidade: '',
  ci: '',
  cnh: '',
  docExtra: '',
  cpf: '',
  telefone: '',
  telefoneAdicional: '',
  email: '',
  logradouro: '',
  cep: '',
  bairro: '',
  numero: '',
  complemento: '',
  localidade: '',
  uf: '',
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
  telefone: string;
  telefoneAdicional: string;
  email: string;
  logradouro: string | undefined;
  cep: string;
  bairro: string | undefined;
  numero: string;
  complemento: string;
  uf: string | undefined;
  localidade: string | undefined;
}


export const estadoCivilOptions = [
  { value: 1, label: "Solteiro(a)" },
  { value: 2, label: "Casado(a)" },
  { value: 3, label: "Divorciado(a)" },
  { value: 4, label: "Viúvo(a)" },
  { value: 5, label: "Separado(a)" },
];





