import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, label, readonly, type, shrink }: FormInputProps) => {
 
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
          value={value}
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
          required={false}
        />
      )}
    />
  );
};