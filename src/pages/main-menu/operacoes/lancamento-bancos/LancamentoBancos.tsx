import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AppMenu from "../../../../components/main-menu/AppMenu";

const LancamentoBancos = (props: any) => {

    let { edit } = useParams();


    useEffect(() => {

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
                      LancamentoBancos  Novo
                    </Typography>
                }


                {(edit === 'edit') &&
                    <span>
                      LancamentoBancos  EDIT
                    </span>
                }


            </AppMenu>
        </>
    );

}
export default LancamentoBancos;