import { Typography } from "@material-ui/core";
import { useEffect } from "react";



const CadastroPF = (props: any) => {


    const { tipocadastro, salvar, limpar } = props;

    useEffect(() => {

        console.log("Filmes:", tipocadastro);

    }, [tipocadastro])

    return (

        <>

            <Typography>
            CadastroPF {props.tipocadastro}
            </Typography>

        </>
    );

}
export default CadastroPF;