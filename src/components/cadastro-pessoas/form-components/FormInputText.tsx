import { TextField } from "@mui/material";
import { FormInputProps } from "./FormInputProps";

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

