import { TextField } from "@mui/material";
import { FormInputProps } from "./FormInputProps";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

export const FormInputText = ({ name, error, helpertext, label, values, onChange, type, shrink }: FormInputProps) => {

  return (
    < TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      value={values}
      onChange={onChange}
      error={error}
      helperText={helpertext}
      size="small"
      type={type == !type ? "text" : type}
      InputLabelProps={{
        shrink: shrink,
      }}
    />
  );
};



export const FormInpuTextCEP = ({ name, control, label, readonly, type, shrink, setValue }: FormInputProps) => {
 
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },

      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value = setValue == !setValue ? value : setValue}
          fullWidth
          label={label}          
          variant="outlined"
          InputProps={{
            readOnly: readonly
          }}
          InputLabelProps={{
            shrink: shrink,
          }}
          type={type}   
                  
          disabled={true}
        />
      )}
    />
  );
};




export interface FormPhoneProps {
  mask?: any;
  values?: any;
  disabled?: any;
  maskChar?: any;
  children?: any;
  onChange?: any;
}

export const FormInputMask = ({ mask, values, disabled, maskChar, children, onChange }: FormPhoneProps) => {


  return (

      <InputMask
          mask={mask}
          value={values}
          disabled={disabled}
          maskChar={maskChar}
          onChange={onChange}

      >
          {children}
         
      </InputMask>


  );

};



export const FormInputMultilineText = ({ name, error, helpertext, label, values, onChange }: FormInputProps) => {

  return (
    < TextField
      fullWidth
      id={name}
      name={name}
      label={label}
      value={values}
      onChange={onChange}
      error={error}
      helperText={helpertext}
      rows={12}
      multiline
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
