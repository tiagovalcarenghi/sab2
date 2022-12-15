import Swal from 'sweetalert2';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import '../../assets/login/css/login.css';
import { useNavigate } from 'react-router-dom';

//Banner SAB:
import BannerSab from '../../assets/login/images/banner-SAB.png'; // Import using relative path

const theme = createTheme({

    palette: {
        primary: {
            main: 'rgb(255, 152, 0)',
        }
    },

});


const LoginPage = () => {


    const navigate = useNavigate();


    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");


    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!usuario || !senha) {
            setError("Preencha Todos os Campos")
            return;
        }

        const res = login(usuario, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/");

    }


    return (

        <form onSubmit={handleSubmit}>
            <>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />
                        <Grid className='gridBanner'
                            item
                            xs={false}
                            sm={4}
                            md={2}
                            sx={{
                                backgroundImage: `url(${BannerSab})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: (t) =>
                                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />

                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Login
                                </Typography>

                                <Box sx={{ mt: 1 }}>
                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        size="small"
                                        label="Login"
                                        type="text"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                    />

                                    <TextField
                                        fullWidth
                                        margin="normal"
                                        size="small"
                                        label="Senha"
                                        type="password"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />

                                    <Box
                                        sx={{
                                            display: 'grid',
                                            alignItems: 'center'
                                        }}
                                    >

                                        <Button variant="contained" type="submit" >Login</Button>

                                        <p>{String(error)}</p>

                                    </Box>

                                </Box>
                            </Box>

                        </Container>

                    </Grid>
                </ThemeProvider>


            </>
        </form>
    )
}


export default LoginPage;