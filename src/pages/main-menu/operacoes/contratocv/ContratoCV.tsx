import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AppMenu from "../../../../components/main-menu/AppMenu";

const ContratoCV = (props: any) => {

    let { edit } = useParams();


    useEffect(() => {

        if (edit == 'new') {
            console.log('novo');
            return;
        }
          
        if (edit == 'cvc') {
            console.log('cvc');         
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
                     ContratoCV   Novo
                    </Typography>
                }

                {(edit === 'csv') &&
                    <Typography>
                     ContratoCV   CVC
                    </Typography>
                }

                {(edit === 'edit') &&
                    <span>
                      ContratoCV  EDIT
                    </span>
                }


            </AppMenu>
        </>
    );

}
export default ContratoCV;