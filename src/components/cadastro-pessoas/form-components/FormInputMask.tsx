import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import MuiPhoneNumber from 'material-ui-phone-number';
import React, { useState } from 'react'


export const FormInputTextMask = ({ name, control, label, readonly, type, shrink, setValue }: FormInputProps) => {

    

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },

            }) => (

                <MuiPhoneNumber defaultCountry={'br'} onlyCountries={['br']} onChange={onChange} value={value} />

            )}
        />
    );

};