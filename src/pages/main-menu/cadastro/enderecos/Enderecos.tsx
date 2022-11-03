import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AppMenu from "../../../../components/main-menu/AppMenu";

const Enderecos = (props: any) => {

    let { edit } = useParams();


    useEffect(() => {

        console.log(`/main-menu/cadastro/enderecos/${edit}`);

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
                        Cadastro-Enderecos-Novo
                    </Typography>
                }

                {(edit === 'edit') &&
                    <span>
                        Cadastro-Enderecos-Editar
                    </span>
                }


            </AppMenu>
        </>
    );

}
export default Enderecos;