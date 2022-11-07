import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormValuesPessoaPF, initialValues } from "../../utils/cadastro-pf/constants";
import { Button, Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const CadastroPF = (props: any) => {


  const theme = createTheme({

    palette: {
      primary: {
        main: 'rgb(255, 152, 0)',
      }
    },

  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const methods = useForm<FormValuesPessoaPF>({ defaultValues: initialValues });
  const { handleSubmit, reset, control } = methods;
  const onSubmit = (data: FormValuesPessoaPF) => console.log(data);

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
          <Grid item xs={4}>
            <FormInputDropdown
              name="cdEstadoCivil"
              control={control}
              label="Estado Civil"
            />
          </Grid>
          <Grid item xs={4}>
            <FormInputText name="profissao" control={control} label="Profissão" />
          </Grid>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
          <FormInputText name="nacionalidade" control={control} label="Nacionalidade" />
          </Grid>
          <Grid item xs={4}>
          <FormInputText name="ci" control={control} label="Carteira de Idendidade" />
          </Grid>
          <Grid item xs={4}>
            <FormInputText name="profissao" control={control} label="Profissão" />
          </Grid>
        </Grid>
 
       
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            {<Button variant="contained"  type="submit"  onClick={handleSubmit(onSubmit)}  >Salvar</Button>}
          </Grid>
          <Grid item>
            <Button onClick={() => reset()} variant={"outlined"} >Limpar Dados</Button>
          </Grid>
        </Grid>


      </Paper>
    </ThemeProvider>
  );
};

export default CadastroPF;