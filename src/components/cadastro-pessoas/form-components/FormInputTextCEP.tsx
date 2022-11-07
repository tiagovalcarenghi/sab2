import { InputLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

import { FormInputPropsCEP } from "./FormInputPropsCEP";

export const FormInputTextCEP = ({ name, control, label, setValue }: FormInputPropsCEP) => {


    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value},
                fieldState: { error },

            }) => (
                <>
                    <InputLabel id="lbl-cp">{label}</InputLabel>
                    <TextField
                      name={name}
                        helperText={error ? error.message : null}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        value={setValue == !setValue ? value: setValue }
                        fullWidth
                        variant="outlined"
                    />
                </>
            )}
        />
    );
};