import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import MuiPhoneNumber from 'material-ui-phone-number';
import { InputLabel } from "@mui/material";

export const FormInputTextPhone = ({ name, control, label }: FormInputProps) => {



    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
            }) => (

                <MuiPhoneNumber
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultCountry={'br'}
                    onlyCountries={['br']}
                    onChange={onChange}
                    value={value}
                    disableCountryCode={true}
                    placeholder="(99) 999999999"
                    variant="outlined"
                    label={label}
                    size="small"
                    fullWidth
                    required={true}
                />

            )}
        />
    );

};