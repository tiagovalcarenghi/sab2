import { useForm } from "react-hook-form";
import { Button, Grid, IconButton, Paper, } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormValuesEndereco, initialValuesEndereco } from "../../utils/cadastro-endereco/constantsendereco";
import { MyAutoComplete, MySelect } from "../form-components/FormInputDropdown";
import { FormInpuTextCEP, FormInputMask, FormInputText } from "../form-components/FormInput";
import { enderecoOptions } from "../../utils/constantscadastros";



const CadastroEndereco = (props) => {


    const theme = createTheme({

        palette: {
            primary: {
                main: 'rgb(255, 152, 0)',
            }
        },

    });



    const methods = useForm<FormValuesEndereco>({ defaultValues: initialValuesEndereco });
    const { reset, control, setValue } = methods;



    const BASE_URL = 'https://viacep.com.br/ws'

    const [addressData, setAddressData] = useState<FormValuesEndereco>('');

    // const CadPJSchema = yup.object().shape({
    //     nomeEmpresarial: yup.string().required('Informe o nome completo.'),
    //     cnpj: yup.string().required('Informe o cnpj.'),


    // });



    const [enderecoFiltro, setEnderecoFiltro] = useState('');

    const handleChange = (event, newValue) => {
        setEnderecoFiltro(newValue);
    };




    const formik = useFormik({
        initialValues: initialValuesEndereco,
        // validationSchema: CadPJSchema,
        onSubmit: (values) => {


            const logradouro = addressData?.logradouro;
            const bairro = addressData?.bairro;
            const localidade = addressData?.localidade;
            const uf = addressData?.uf;


            values.logradouro = logradouro;
            values.bairro = bairro;
            values.localidade = localidade;
            values.uf = uf;



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
                            label="Endere??os"
                            options={enderecoOptions}
                            value={enderecoFiltro}
                            handleChange={handleChange}

                        />

                    </Grid>



                    <Grid item xs={3}>

                        {<Button color="primary" variant="contained"

                            onClick={(event,) => {

                                alert(JSON.stringify(enderecoFiltro));

                            }}


                            startIcon={<SearchIcon />}>
                            Filtrar
                        </Button>}

                    </Grid>

                </Grid>

                <h3>Endere??o:</h3>


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
                                setAddressData(initialValuesEndereco);
                                axios(`${BASE_URL}/${formik.values.cep}/json`)
                                    .then(response => {
                                        setAddressData(response.data)


                                    })
                                    .catch(() => {

                                        Swal.fire({
                                            title: 'Aten????o',
                                            text: 'CEP inv??lido ou incompleto.',
                                            icon: 'error',
                                            confirmButtonText: 'OK'
                                        })


                                    });

                            }} startIcon={<SearchIcon />}>Buscar CEP</Button>}
                        </Grid>


                    </Grid>


                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                        <Grid item xs={3}>
                            <FormInpuTextCEP name="logradouro" readonly={true} control={control} shrink={true} setValue={addressData?.logradouro} label="Endere??o" />
                        </Grid>

                        <Grid item xs={3}>
                            <FormInputText
                                name="numero"
                                label="N??mero"
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

                                setAddressData(initialValuesEndereco);

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

export default CadastroEndereco;