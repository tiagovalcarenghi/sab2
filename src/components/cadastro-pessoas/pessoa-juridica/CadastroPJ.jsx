import { useForm } from "react-hook-form";
import { FormInpuTextCEP, FormInputMask, FormInputText } from "../../form-components/FormInput";
import { Button, Grid, IconButton, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FormValuesPessoaPJ, initialValuesPJ, representantesLegaisOptions } from "../../../utils/cadastro-pessoas/constantspj";
import { SelectChangeEvent } from '@mui/material/Select';
import { MyAutoComplete, MySelectMultiple } from "../../form-components/FormInputDropdown";
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import DeleteIcon from '@mui/icons-material/Delete';
import { pessoaJuridicaOptions } from "../../../utils/constantscadastros";



const CadastroPJ = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });



    const methods = useForm<FormValuesPessoaPJ>({ defaultValues: initialValuesPJ });
    const { reset, control, setValue } = methods;



    const BASE_URL = 'https://viacep.com.br/ws'

    const [addressData, setAddressData] = useState<FormValuesPessoaPJ>('');

    const CadPJSchema = yup.object().shape({
        nomeEmpresarial: yup.string().required('Informe o nome completo.'),
        cnpj: yup.string().required('Informe o cnpj.'),
    });



    const [representanteslegais, setRepresentantesLEgais] = useState<[]>([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setRepresentantesLEgais(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    const [nomeEmpresarialFiltro, setNomeEmpresarialFiltro] = useState('');

    const handleChange2 = (event, newValue) => {
        setNomeEmpresarialFiltro(newValue);
    };




    const formik = useFormik({
        initialValues: initialValuesPJ,
        validationSchema: CadPJSchema,
        onSubmit: (values) => {


            const logradouro = addressData?.logradouro;
            const bairro = addressData?.bairro;
            const localidade = addressData?.localidade;
            const uf = addressData?.uf;


            values.logradouro = logradouro;
            values.bairro = bairro;
            values.localidade = localidade;
            values.uf = uf;
            values.representantesLegais = representanteslegais;



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
                            label="Nome Empresarial"
                            options={pessoaJuridicaOptions}
                            value={nomeEmpresarialFiltro}
                            handleChange={handleChange2}

                        />


                    </Grid>




                    <Grid item xs={3}>
                        <FormInputMask
                            mask="99.999.999/0001-99"
                            values={formik.values.cnpjFiltro}
                            disabled={false}
                            maskChar=" "
                            onChange={formik.handleChange}
                        >
                            {() => <TextField
                                name="cnpjFiltro"
                                label="CNPJ"
                                helperText={formik.touched.cnpjFiltro && formik.errors.cnpjFiltro}
                                error={formik.touched.cnpjFiltro && Boolean(formik.errors.cnpjFiltro)}
                                fullWidth
                                size="small"
                            />}
                        </FormInputMask>
                    </Grid>


                    <Grid item xs={3}>

                        {<Button color="primary" variant="contained"


                            onClick={(event,) => {

                                alert(JSON.stringify(nomeEmpresarialFiltro) + '\n cpffiltro: ' + formik.values.cnpjFiltro);

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
                                name="nomeEmpresarial"
                                label="Nome Empresarial"
                                values={formik.values.nomeEmpresarial}
                                onChange={formik.handleChange}
                                helpertext={formik.touched.nomeEmpresarial && formik.errors.nomeEmpresarial}
                                error={formik.touched.nomeEmpresarial && Boolean(formik.errors.nomeEmpresarial)} />


                        </Grid>

                        <Grid item xs={3}>
                            <FormInputMask
                                mask="99.999.999/0001-99"
                                values={formik.values.cnpj}
                                disabled={false}
                                maskChar=" "
                                onChange={formik.handleChange}
                            >
                                {() => <TextField
                                    name="cnpj"
                                    label="CNPJ"
                                    helperText={formik.touched.cnpj && formik.errors.cnpj}
                                    error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                                    fullWidth
                                    size="small"
                                />}
                            </FormInputMask>
                        </Grid>


                        <Grid item xs={5}>
                            <MySelectMultiple
                                label="Representantes Legais"
                                options={representantesLegaisOptions}
                                valueMulti={representanteslegais}
                                handleChange={handleChange}


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
                            {<Button variant="contained" onClick={(event) => {

                                event.preventDefault();

                                setAddressData(undefined);
                                setAddressData(initialValuesPJ);
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

                            }} startIcon={<SearchIcon />}>Buscar CEP</Button>}
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
                        {<Button variant="contained" type="submit" startIcon={<SaveIcon />}>Salvar</Button>}
                    </Grid>
                    <Grid item>
                        <Button

                            onClick={(event) => {
                                event.preventDefault();

                                setAddressData(initialValuesPJ);
                                setRepresentantesLEgais([]);
                                formik.resetForm();
                            }}

                            variant={"outlined"} startIcon={<ReplayCircleFilledIcon />}>Limpar Dados</Button>

                    </Grid>

                    <Grid item>
                        {<Button variant="outlined" startIcon={<DeleteIcon />}>Excluir</Button>}
                    </Grid>
                </Grid>



            </ThemeProvider >

        </form>
    );
};

export default CadastroPJ;