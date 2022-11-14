import Select from 'react-select';


export interface FormSelectProps {
  onChange?: any;
  value?: any;
  options?: any;
}


export const MySelect = ({ onChange, options, value  }: FormSelectProps) => {

  const defaultValue = (options: any, value: any) => {
    return options.find((option: any) => option.value === value) || "";
  };

  return (
    <div >
      <Select
        placeholder="Selecione:"
        value={defaultValue(options, value)}
        onChange={value => { onChange(value) }}
        options={options}
        
         />
    </div>

  )
}