import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';


export interface FormCheckBoxProps {
    onChange?: any;
    checked?: any;
    value?: any;
    label?: any;
    labelPlacement?: any;
}


export const FormCheckBox = ({ onChange, checked, value, label, labelPlacement }: FormCheckBoxProps) => {

    return (
        <FormControlLabel
            label={label}
            labelPlacement={labelPlacement}            
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    value={value}
                    inputProps={{ 'aria-label': 'controlled' }}

                />
            }
        />
    );
};