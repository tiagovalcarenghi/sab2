import { Controller, useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { Endereco, FormValuesPessoaPF, initialValues, initialValuesEndereco } from "../../utils/cadastro-pf/constants";
import { Button, Grid, InputLabel, Paper, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState } from "react";
import { FormInputTextCEP } from "./form-components/FormInputTextCEP";

const CadastroPF = (props: any) => {


  const theme = createTheme({

    palette: {
      primary: {
        main: 'rgb(255, 152, 0)',
      }
    },

  });


  const methods = useForm<FormValuesPessoaPF>({ defaultValues: initialValues });
  const { handleSubmit, reset, control } = methods;
  const onSubmit = (data: FormValuesPessoaPF) => {
    
    
    console.log(data.endereco.logradouro);
    console.log(addressData?.logradouro);


  };


  const BASE_URL = 'https://viacep.com.br/ws'
  const [searchValue, setSearchValue] = useState('');
  const [addressData, setAddressData] = useState<Endereco>();


  const handleSubmitPreview = () => {

    handleSubmit((data2) => {
      console.log(data2);

      setAddressData(undefined);

      axios(`${BASE_URL}/${searchValue}/json`)
        .then(response => {
          setAddressData(response.data)
          
        })
        .catch(() => console.error('Houve um errro ao buscar os dados!'));

    })()

  }


  return (

    <ThemeProvider theme={theme}>

      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",

        }}
      >

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <FormInputText name="nomeCompleto" control={control} label="Nome Completo" />
          </Grid>
          <Grid item xs={2}>
            <FormInputDropdown
              name="cdEstadoCivil"
              control={control}
              label="Estado Civil"
            />
          </Grid>
          <Grid item xs={3}>
            <FormInputText name="profissao" control={control} label="Profissão" />
          </Grid>
          <Grid item xs={3}>
            <FormInputText name="nacionalidade" control={control} label="Nacionalidade" />
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={3}>
            <FormInputText name="ci" control={control} label="Carteira de Idendidade" />
          </Grid>
          <Grid item xs={3}>
            <FormInputText name="cnh" control={control} label="CNH" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="outro_doc" control={control} label="Outro Documento" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="cpf" control={control} label="CPF" />
          </Grid>

        </Grid>


        <Grid container spacing={2} justifyContent="flex-start">
          <Grid item xs={3}>
            <TextField
              fullWidth
              size="small"
              type="number"
              placeholder="somente números"
              value={searchValue}
              name="endereco.cep"
              label="CEP"
              onChange={event => setSearchValue(event.target.value)}
            />
          </Grid>
          <Grid item xs={9}>
            {<Button variant={"outlined"} type="submit" onClick={handleSubmitPreview}  >Buscar CEP</Button>}
          </Grid>

        </Grid>



        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={3}>
            <FormInputTextCEP name="endereco.logradouro" control={control} label="Logradouro" setValue={addressData?.logradouro} />
          </Grid>

          <Grid item xs={3}>
            <FormInputTextCEP name="endereco.numero" control={control} label="Número" setValue={addressData?.numero} />
          </Grid>

          <Grid item xs={3}>
            <FormInputTextCEP name="endereco.bairro" control={control} label="Bairro" setValue={addressData?.bairro} />
          </Grid>


          <Grid item xs={3}>
            <FormInputTextCEP name="endereco.localidade" control={control} label="Cidade" setValue={addressData?.localidade} />
          </Grid>

        </Grid>

        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            {<Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}  >Salvar</Button>}
          </Grid>
          <Grid item>
            <Button onClick={() => reset()} variant={"outlined"} >Limpar Dados</Button>
          </Grid>
        </Grid>


      </Paper >
    </ThemeProvider >
  );
};

export default CadastroPF;