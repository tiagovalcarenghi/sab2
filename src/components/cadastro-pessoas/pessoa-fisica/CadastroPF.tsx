import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormValuesPessoaPF, initialValues } from "../../../utils/cadastro-pf/constants";
import { Button, Grid, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { FormInputTextPhone } from "./form-components/FormInputTextPhone";
import Swal from 'sweetalert2';
import { FormInpuTextCEP } from "./form-components/FormInpuTextCEP";

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

    data.logradouro = addressData?.logradouro;
    data.cep = searchValue;
    data.bairro = addressData?.bairro;
    data.localidade = addressData?.localidade;
    data.uf = addressData?.uf;


    console.log(data);
  };



  const BASE_URL = 'https://viacep.com.br/ws'
  const [searchValue, setSearchValue] = useState('');
  const [addressData, setAddressData] = useState<FormValuesPessoaPF>();


  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };


  return (

    <ThemeProvider theme={theme}>

      <h3>Informações Pessoais:</h3>

      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 0px 0px 0px"
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
            <FormInputText name="ci" type="number" control={control} label="Carteira de Idendidade" />
          </Grid>
          <Grid item xs={3}>
            <FormInputText name="cnh" type="number" control={control} label="CNH" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="docExtra" control={control} label="Outro Documento" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="cpf" type="number" control={control} label="CPF" />
          </Grid>

        </Grid>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={3}>
            <FormInputTextPhone name="telefone" control={control} label="Telefone Principal" />
          </Grid>
          <Grid item xs={3}>
            <FormInputTextPhone name="telefoneAdicional" control={control} label="Telefone Adicional" />
          </Grid>

          <Grid item xs={6}>
            <FormInputText name="email" control={control} label="Email" type="email" />
          </Grid>



        </Grid>

      </Paper >

      <h3>Endereço:</h3>


      <Paper
        style={{
          display: "grid",
          gridRowGap: "20px",
          padding: "20px",
          margin: "10px 0px 0px 0px"
        }}
      >



        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={3}>

            <TextField
              size="small"
              onChange={handleChange}
              value={searchValue}
              placeholder="apenas números"
              fullWidth
              label="CEP"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              name="cep"
              type="number"
            />

          </Grid>

          <Grid item xs={3}>
            {<Button variant="contained" onClick={(event: any) => {

              event.preventDefault();

              setAddressData(undefined);
              axios(`${BASE_URL}/${searchValue}/json`)
                .then(response => {
                  setAddressData(response.data)                
                })
                .catch(() => {

                  Swal.fire({
                    title: 'Atenção',
                    text: 'CEP inválido ou incompleto.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })


                });

            }}>Buscar CEP</Button>}
          </Grid>


        </Grid>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={3}>
            <FormInpuTextCEP name="logradouro" readonly={true} control={control} shrink={true} setValue={addressData?.logradouro} label="Endereço" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="numero" control={control} label="Número" />
          </Grid>

          <Grid item xs={3}>
            <FormInputText name="complemento" control={control} label="Complemento" />
          </Grid>

          <Grid item xs={3}>
            <FormInpuTextCEP name="bairro" readonly={true} control={control} label="Bairro" shrink={true} setValue={addressData?.bairro} />
          </Grid>


        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


          <Grid item xs={3}>
            <FormInpuTextCEP name="uf" readonly={true} control={control} label="UF" shrink={true} setValue={addressData?.uf} />
          </Grid>

          <Grid item xs={3}>
            <FormInpuTextCEP name="localidade" readonly={true} control={control} label="Cidade" shrink={true} setValue={addressData?.localidade} />
          </Grid>

        </Grid>



      </Paper>




      <Grid container spacing={2} justifyContent="flex-end" marginTop={5}>
        <Grid item>
          {<Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}  >Salvar</Button>}
        </Grid>
        <Grid item>
          <Button

            onClick={(event:any) => {
              event.preventDefault();
              
              setAddressData(initialValues);
              setSearchValue('');
              reset();             
              
            }}

            variant={"outlined"} >Limpar Dados</Button>

        </Grid>
      </Grid>



    </ThemeProvider >
  );
};

export default CadastroPF;