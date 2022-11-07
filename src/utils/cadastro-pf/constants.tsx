export const initialValues = {
  nomeCompleto: '',
  cdEstadoCivil: '',
  profissao: '',
  nacionalidade: '',
  ci: '',
}



export interface FormValuesPessoaPF {
  nomeCompleto: string;
  cdEstadoCivil: string;
  profissao: string;
  nacionalidade: string;
  ci: string;
}


export const estadoCivilOptions = [
 {value: 1, label: "Solteiro"},
 {value: 2, label: "Casado"},  
];
