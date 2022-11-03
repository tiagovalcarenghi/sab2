import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AppMenu from "../../../../components/main-menu/AppMenu";

const Pessoas = (props: any) => {

    let { edit } = useParams();


    useEffect(() => {

        console.log(`/main-menu/cadastro/pessoas/${edit}`);

        if (edit == 'new') {
            console.log('novo');
            
            return;
        }
        carregaFiltros();
    }, [edit]);


    const carregaFiltros = async () => {
        console.log('editar');
        
    }

    return (

        <>
            <AppMenu>

                {(edit === 'new') &&
                    <Typography>
                        Cadastro-Pessoas-Novo
                    </Typography>
                }

                {(edit === 'edit') &&
                    <span>
                        Cadastro-Pessoas-Editar
                    </span>
                }


            </AppMenu>
        </>
    );

}
export default Pessoas;