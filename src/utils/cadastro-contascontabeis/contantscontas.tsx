export const initialValuesCadContas = {
    nomeConta: '',
    tipoConta: '',
    saldoInicial: '',
    tipoSaldoInicial: '',
  }
  
  
  export interface FormValuesCadContas {
    nomeConta: string;
    tipoConta: string;
    saldoInicial: string;
    tipoSaldoInicial: string;
  }


  export const tipoContaOptions = [
    { value: 1, label: "Patrimonial" },
    { value: 2, label: "Resultado" },    
  ];
  

  export const tipoSaldoOptions = [
    { value: 1, label: "Crédito" },
    { value: 2, label: "Débito" },    
    { value: 3, label: "Zero" },    
  ];
  