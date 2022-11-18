import { useForm } from "react-hook-form";
import { FormInpuTextCEP, FormInputMask, FormInputText } from "../../form-components/FormInput";
import { estadoCivilOptions, FormValuesPessoaPF, initialValuesPF } from "../../../utils/cadastro-pessoas/constantspf";
import { Button, Grid, IconButton, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { MyAutoComplete, MySelect } from "../../form-components/FormInputDropdown";
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import DeleteIcon from '@mui/icons-material/Delete';
import { pessoaFisicaOptions } from "../../../utils/constantscadastros";

const CadastroPF = (props: any) => {


  const theme = createTheme({

    palette: {
      primary: {
        main: 'rgb(255, 152, 0)',
      }
    },

  });



  const methods = useForm<FormValuesPessoaPF>({ defaultValues: initialValuesPF });
  const { reset, control, setValue } = methods;



  const BASE_URL = 'https://viacep.com.br/ws'

  const [addressData, setAddressData] = useState<FormValuesPessoaPF>();

  const CadPFSchema = yup.object().shape({
    nomeCompleto: yup.string().required('Informe o nome completo.'),
    telefone: yup.string().required('Informe o telefone'),
    //cdEstadoCivil: yup.string().required('Informe o estado civil.'),
    cpf: yup.string().required('Informe o cpf.'),




  });


  const [nomeCompletoFiltro, setNomeCompletoFiltro] = useState('');

  const handleChange = (event: any, newValue: string) => {
    setNomeCompletoFiltro(newValue);
  };




  const [cdestadocivil, setEstadoCivil] = useState('');

  const handleChange2 = (event: SelectChangeEvent<typeof cdestadocivil>) => {
    const {
      target: { value },
    } = event;
    setEstadoCivil(value);
  };




  const formik = useFormik({
    initialValues: initialValuesPF,
    validationSchema: CadPFSchema,
    onSubmit: (values) => {

      //values.cep = values.cep;

      const logradouro: string = addressData?.logradouro!
      const bairro: string = addressData?.bairro!
      const localidade: string = addressData?.localidade!
      const uf: string = addressData?.uf!

      values.logradouro = logradouro;
      values.bairro = bairro;
      values.localidade = localidade;
      values.uf = uf;
      values.cdEstadoCivil = cdestadocivil;


      if (values.logradouro == '' || values.logradouro == undefined) {
        console.log('erro');
      }

      alert(JSON.stringify(values, null, 2));
    },
  });



  return (

    <form onSubmit={formik.handleSubmit}>

      <ThemeProvider theme={theme}>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={4}>

            <MyAutoComplete
              label="Pessoa"
              options={pessoaFisicaOptions}
              value={nomeCompletoFiltro}
              handleChange={handleChange}

            />

          </Grid>




          <Grid item xs={3}>
            <FormInputMask
              mask="999.999.999-99"
              values={formik.values.cpfFiltro}
              disabled={false}
              maskChar=" "
              onChange={formik.handleChange}
            >
              {() => <TextField
                name="cpfFiltro"
                label="CPF"
                helperText={formik.touched.cpfFiltro && formik.errors.cpfFiltro}
                error={formik.touched.cpfFiltro && Boolean(formik.errors.cpfFiltro)}
                fullWidth
                size="small"
              />}
            </FormInputMask>
          </Grid>


          <Grid item xs={3}>

            {<Button color="primary" variant="contained"

              onClick={(event: any,) => {

                alert(JSON.stringify(nomeCompletoFiltro) + '\n cpffiltro: ' + formik.values.cpfFiltro);

              }}


              startIcon={<SearchIcon />}>
              Filtrar
            </Button>}

          </Grid>

        </Grid>



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
                label="Nome Completo"
                values={formik.values.nomeCompleto}
                onChange={formik.handleChange}
                helpertext={formik.touched.nomeCompleto && formik.errors.nomeCompleto}
                error={formik.touched.nomeCompleto && Boolean(formik.errors.nomeCompleto)} />

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
                label="Nacionalidade"
                values={formik.values.nacionalidade}
                onChange={formik.handleChange}
                helpertext={formik.touched.nacionalidade && formik.errors.nacionalidade}
                error={formik.touched.nacionalidade && Boolean(formik.errors.nacionalidade)} />
            </Grid>

            <Grid item xs={2}>
              <MySelect
                label="Estado Civil"
                options={estadoCivilOptions}
                value={cdestadocivil}
                handleChange={handleChange2}


              />
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
              <FormInputMask
                mask="99999999999"
                values={formik.values.cnh}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="cnh"
                  label="CNH"
                  helperText={formik.touched.cnh && formik.errors.cnh}
                  error={formik.touched.cnh && Boolean(formik.errors.cnh)}
                  fullWidth
                  size="small"
                />}
              </FormInputMask>

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
              <FormInputMask
                mask="999.999.999-99"
                values={formik.values.cpf}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="cpf"
                  label="CPF"
                  helperText={formik.touched.cpf && formik.errors.cpf}
                  error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                  fullWidth
                  size="small"
                />}
              </FormInputMask>
            </Grid>

          </Grid>


          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={3}>
              <FormInputMask
                mask="(99) 999999999"
                values={formik.values.telefone}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="telefone"
                  label="Telefone Principal"
                  helperText={formik.touched.telefone && formik.errors.telefone}
                  error={formik.touched.telefone && Boolean(formik.errors.telefone)}
                  fullWidth
                  size="small"
                />}
              </FormInputMask>
            </Grid>
            <Grid item xs={3}>
              <FormInputMask
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
              </FormInputMask>
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

              <FormInputMask
                mask="99999999"
                values={formik.values.cep}
                disabled={false}
                maskChar=" "
                onChange={formik.handleChange}
              >
                {() => <TextField
                  name="cep"
                  label="CEP"
                  helperText={formik.touched.cep && formik.errors.cep}
                  error={formik.touched.cep && Boolean(formik.errors.cep)}
                  fullWidth
                  size="small"
                />}
              </FormInputMask>


            </Grid>

            <Grid item xs={3}>
              {<Button variant="contained" onClick={(event: any) => {

                event.preventDefault();

                setAddressData(undefined);
                setAddressData(initialValuesPF);
                axios(`${BASE_URL}/${formik.values.cep}/json`)
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

              }}

                startIcon={<SearchIcon />}>

                Buscar CEP</Button>}
            </Grid>


          </Grid>


          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            <Grid item xs={3}>
              <FormInpuTextCEP name="logradouro" readonly={true} control={control} shrink={true} setValue={addressData?.logradouro} label="Endereço" />
            </Grid>

            <Grid item xs={3}>
              <FormInputText
                name="numero"
                label="Número"
                values={formik.values.numero}
                onChange={formik.handleChange}
                helpertext={formik.touched.numero && formik.errors.numero}
                error={formik.touched.numero && Boolean(formik.errors.numero)}
                type="number"
                shrink={true}

              />
            </Grid>

            <Grid item xs={3}>
              <FormInputText
                name="complemento"
                label="Complemento"
                values={formik.values.complemento}
                onChange={formik.handleChange}
                helpertext={formik.touched.complemento && formik.errors.complemento}
                error={formik.touched.complemento && Boolean(formik.errors.complemento)}
                shrink={true}
              />
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




        <Grid container spacing={2} justifyContent="flex-end" marginTop={1}>
          <Grid item>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Grid>
          <Grid item>
            {<Button variant="contained" type="submit" startIcon={<SaveIcon />}> Salvar</Button>}
          </Grid>
          <Grid item>
            <Button

              onClick={(event: any) => {
                event.preventDefault();

                setAddressData(initialValuesPF);
                setEstadoCivil('');
                formik.resetForm();
              }}

              variant={"outlined"} startIcon={<ReplayCircleFilledIcon />}> Limpar Dados</Button>

          </Grid>

          <Grid item>
            {<Button variant="outlined" startIcon={<DeleteIcon />}>Excluir</Button>}
          </Grid>
        </Grid>



      </ThemeProvider >

    </form>
  );
};

export default CadastroPF;