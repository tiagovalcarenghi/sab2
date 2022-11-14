import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { estadoCivilOptions, FormValuesPessoaPF, initialValues } from "../../../utils/cadastro-pf/constants";
import { Button, Grid, IconButton, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import { FormInputTextPhone } from "./form-components/FormInputTextPhone";
import Swal from 'sweetalert2';
import { FormInpuTextCEP } from "./form-components/FormInpuTextCEP";
import * as yup from 'yup';
import { useFormik } from 'formik';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { MySelect } from "./form-components/FormInputDropdown";


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


  const CadPFSchema = yup.object().shape({
    nomeCompleto: yup.string().required('Informe o nome Completo.'),    
    telefone: yup.string().required('Informe o Telefone'),



  });



  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: CadPFSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (

    <form onSubmit={formik.handleSubmit}>

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

              <FormInputText
                name="nomeCompleto"
                label="nomeCompleto"
                values={formik.values.nomeCompleto}
                onChange={formik.handleChange}
                helpertext={formik.touched.nomeCompleto && formik.errors.nomeCompleto}
                error={formik.touched.nomeCompleto && Boolean(formik.errors.nomeCompleto)} />

            </Grid>
            <Grid item xs={2}>
              <MySelect
                onChange={(value: any) => formik.setFieldValue('cdEstadoCivil', value.value)}
                value={formik.values.cdEstadoCivil}
                options={estadoCivilOptions}

              />
            </Grid>
            <Grid item xs={3}>
              <FormInputText
                name="profissao"
                control={control}
                label="Profissão"
                values={formik.values.profissao}
                onChange={formik.handleChange}
                helpertext={formik.touched.profissao && formik.errors.profissao}
                error={formik.touched.profissao && Boolean(formik.errors.profissao)} />
            </Grid>
            <Grid item xs={3}>
              <FormInputText
                name="nacionalidade"
                label="nacionalidade"
                values={formik.values.nacionalidade}
                onChange={formik.handleChange}
                helpertext={formik.touched.nacionalidade && formik.errors.nacionalidade}
                error={formik.touched.nacionalidade && Boolean(formik.errors.nacionalidade)} />
            </Grid>
          </Grid>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={3}>
              <FormInputText
                name="ci"
                label="Carteira de Identidade"
                values={formik.values.ci}
                onChange={formik.handleChange}
                helpertext={formik.touched.ci && formik.errors.ci}
                error={formik.touched.ci && Boolean(formik.errors.ci)}
                type="number"                
              />
            </Grid>
            <Grid item xs={3}>
              <FormInputText
                name="cnh"
                label="CNH"
                values={formik.values.cnh}
                onChange={formik.handleChange}
                helpertext={formik.touched.cnh && formik.errors.cnh}
                error={formik.touched.cnh && Boolean(formik.errors.cnh)}
                type="number"
              />

            </Grid>

            <Grid item xs={3}>
              <FormInputText
                name="docExtra"
                label="Documento Adicional"
                values={formik.values.docExtra}
                onChange={formik.handleChange}
                helpertext={formik.touched.docExtra && formik.errors.docExtra}
                error={formik.touched.docExtra && Boolean(formik.errors.docExtra)}
              />
            </Grid>

            <Grid item xs={3}>
              <FormInputText 
               name="cpf"
               label="CPF"
               values={formik.values.cpf}
               onChange={formik.handleChange}
               helpertext={formik.touched.cpf && formik.errors.cpf}
               error={formik.touched.cpf && Boolean(formik.errors.cpf)}
               type="number"
              />
            </Grid>

          </Grid>


          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={3}>
              <FormInputTextPhone
                mask="(99) 999999999"
                values={formik.values.telefone}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="telefone"
                  label="Telefone"
                  helperText={formik.touched.telefone && formik.errors.telefone}
                  error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                  fullWidth
                  size="small"
                />}
              </FormInputTextPhone>
            </Grid>
            <Grid item xs={3}>
              <FormInputTextPhone
                mask="(99) 999999999"
                values={formik.values.telefoneAdicional}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="telefoneAdicional"
                  label="Telefone Adicional"
                  helperText={formik.touched.telefoneAdicional && formik.errors.telefoneAdicional}
                  error={formik.touched.telefoneAdicional && Boolean(formik.errors.telefoneAdicional)}
                  fullWidth
                  size="small"
                />}
              </FormInputTextPhone>
            </Grid>

            <Grid item xs={6}>
              <FormInputText
                name="email"
                label="Email"
                values={formik.values.email}
                onChange={formik.handleChange}
                helpertext={formik.touched.email && formik.errors.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                type="email"
              />
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

                    setValue('logradouro', addressData?.logradouro)
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
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Grid>
          <Grid item>
            {<Button variant="contained" type="submit"   >Salvar</Button>}
          </Grid>
          <Grid item>
            <Button

              onClick={(event: any) => {
                event.preventDefault();

                setAddressData(initialValues);
                setSearchValue('');
                reset();

              }}

              variant={"outlined"} >Limpar Dados</Button>

          </Grid>
        </Grid>



      </ThemeProvider >

    </form>
  );
};

export default CadastroPF;