import { useForm } from "react-hook-form";
import { Endereco, initialValuesEndereco } from "../../utils/cadastro-pf/constants";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from "react";
import { FormInputText } from "./form-components/FormInputText";


const CadastroAdress = (props: any) => {

    const { handleClick, setSearchValue } = props;

    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });

    //const BASE_URL = 'https://viacep.com.br/ws'
    //const [searchValue, setSearchValue] = useState('');
    //const [addressData, setAddressData] = useState<Endereco>();




    const methods = useForm({ defaultValues: initialValuesEndereco });
    const { handleSubmit, reset, control, setValue } = methods;

    
    // const onSubmit = (data: any) => {


    //     setAddressData(undefined);

    //     axios(`${BASE_URL}/${searchValue}/json`)
    //         .then(response => {

    //             setAddressData(response.data)

    //             data.logradouro = addressData?.logradouro;
    //             data.bairro = addressData?.bairro;
    //             data.cep = addressData?.cep;

    //             setValue("logradouro", data.logradouro);
    //             setValue("bairro", data.bairro);

    //             console.log(data);


    //         })
    //         .catch(() => console.error('Houve um errro ao buscar os dados!'));

    // };


 


  


    return (

        <ThemeProvider theme={theme}>

            <Paper
                style={{
                    display: "grid",
                    gridRowGap: "20px",
                    padding: "20px",

                }}
            >



                <Grid container spacing={2} justifyContent="flex-start">
                    <Grid item xs={3}>


                        <TextField
                            name="cep"
                            size="small"
                            onChange={event => setSearchValue(event.target.value)}
                            
                            fullWidth
                            label="CEP"
                            variant="outlined"
                        />

                    </Grid>

                </Grid>



                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={3}>
                        <FormInputText name="endereco.logradouro" control={control} label="Logradouro" />
                    </Grid>

                    <Grid item xs={3}>
                        <FormInputText name="numero" control={control} label="Número" />
                    </Grid>

                    <Grid item xs={3}>
                        <FormInputText name="bairro" control={control} label="Bairro" />
                    </Grid>



                </Grid>

                <Grid container spacing={2} justifyContent="flex-end">
                    <Grid item>
                        {<Button variant="contained" type="submit" onClick={data => handleClick(data)}> Buscar CEP</Button>}
                    </Grid>
                    <Grid item>
                        <Button onClick={() => reset()} variant={"outlined"} >Limpar Dados</Button>
                    </Grid>
                </Grid>


            </Paper >
        </ThemeProvider >
    );
};

export default CadastroAdress;