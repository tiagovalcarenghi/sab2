import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { estadoCivilOptions } from "../../../utils/cadastro-pf/constants";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";



export const FormInputDropdown: React.FC<FormInputProps> = ({
  name,
  control,
  label,
}) => {
  const generateSingleOptions = () => {
    return estadoCivilOptions.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"} fullWidth>
      <InputLabel id="lbl-ec">{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select labelId="lbl-ec" label={label} onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};