import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormSelectProps } from './FormSelectProps';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';




export const MySelect = ({ options, handleChange, label, value }: FormSelectProps) => {

    return (
        <div>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
                <Select
                    fullWidth
                    value={value}
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





export const MySelectMultiple = ({ options, handleChange, label, valueMulti }: FormSelectProps) => {

    return (
        <div>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
                <Select
                    fullWidth
                    multiple
                    value={valueMulti}
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





export const MyAutoComplete = ({ options, handleChange, label, value }: FormSelectProps) => {

    return (


        <Autocomplete

            fullWidth
            id="combo-box-demo"
            size="small"
            value={value}
            options={options}
            onChange={handleChange}     

            renderInput={(params) => (
                <TextField
                    {...params}                   
                    label={label}
                    placeholder="Buscar"
                />
            )}



        />




    );
}