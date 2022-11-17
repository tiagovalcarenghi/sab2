export const initialValuesCadContasComp = {
    cdContaComplementar: '',
    isBanco: false,
  }
  
  
  export interface FormValuesCadContasComp {
    cdContaComplementar: string;
    isBanco: boolean;
  }


  export const baseContasComplementaresOptions = [
    { value: 1, label: "Rua Amapá, 180 Casa 2", cdCadatro: 12, cdTipoContaComp: 3},
    { value: 2, label: "Tiago Amaral Valcarenghi" , cdCadatro: 1 , cdTipoContaComp: 1},
    { value: 3, label: "Santander", cdCadatro: 8 , cdTipoContaComp: 2 },    
  ];
  

  const baseTipoContaComplementar = [
    { value: 1, label: "Pessoa Física" },
    { value: 2, label: "Pessoa Jurídica"},
    { value: 3, label: "Endereço"},    
  ];
  