
import Select from 'react-select';


export interface FormSelectProps {
  onChange?: any;
  value?: any;
  options?: any;
}

const style = {
  control: (base:any, state:any) => ({
    ...base,
    '&:hover': { borderColor: 'orange' , border: '2px solid orange',  backgroundColor: 'white', }, // border style on hover
    border: '1px solid lightgray', // default border color
    boxShadow: '10px', // no box-shadow
   
    height: '41px',
}),

};


export const MySelect = ({ onChange, options, value }: FormSelectProps) => {

  const defaultValue = (options: any, value: any) => {
    return options.find((option: any) => option.value === value) || "";
  };

  return (
    <div >
      <Select
        placeholder="Estado Civil:"
        value={defaultValue(options, value)}
        onChange={value => { onChange(value) }}
        options={options}
        styles={style}
        className="basic-single"

      />
    </div>

  )
}