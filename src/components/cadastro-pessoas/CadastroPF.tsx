import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { Endereco, FormValuesPessoaPF, initialValues } from "../../utils/cadastro-pf/constants";
import { Button, Grid, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CadastroAdress from "./CadastroAdress";
import { useStaticState } from "@material-ui/pickers";
import { useState } from "react";
import axios from "axios";


const CadastroPF = (props: any) => {


  const theme = createTheme({

    palette: {
      primary: {
        main: 'rgb(255, 152, 0)',
      }
    },

  });


  const methods = useForm<FormValuesPessoaPF>({ defaultValues: initialValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (data: FormValuesPessoaPF) => {
    console.log(data);
  };



  const BASE_URL = 'https://viacep.com.br/ws'
  const [searchValue, setSearchValue] = useState('');
  const [addressData, setAddressData] = useState<Endereco>();



  const handleClick = (data: any) => {

    setAddressData(undefined);

    axios(`${BASE_URL}/${searchValue}/json`)
      .then(response => {

        setAddressData(response.data)

        data.logradouro = addressData?.logradouro;
        data.bairro = addressData?.bairro;
        data.cep = addressData?.cep;

        setValue("endereco.logradouro", data.logradouro);
        setValue("endereco.bairro", data.bairro);

        console.log(data);


      })
      .catch(() => console.error('Houve um errro ao buscar os dados!'));

  };



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

        <CadastroAdress handleClick={handleClick} setSearchValue={setSearchValue} />


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