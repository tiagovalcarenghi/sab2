import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export interface FormSelectPropsMultiple {
    options: any;
    personName: string[];
    handleChange: any;
    label: string;
}


export const MySelectMultiple = ({ options, personName, handleChange, label }: FormSelectPropsMultiple) => {

    return (
        <div>
            <FormControl sx={{ width: 500 }} size="small">
                <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
                <Select
                    multiple
                    value={personName}
                    onChange={handleChange}
                    size="small"
                    labelId="demo-select-small"
                    id="demo-select-small"
                    label={label}

                >
                    {options.map((name: any) => (
                        <MenuItem
                            key={name.value}
                            value={name.value}

                        >
                            {name.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
