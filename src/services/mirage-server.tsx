import { Server, Model } from "miragejs";
import * as baseendpoints from './operacoes/contrato-cev/baseendpoints';



function createData(
    id: number,
    numeroContrato: string,
    descEndereco: string,

) {
    return { id, numeroContrato, descEndereco };
}



export const contratos = [

    createData(
        1,
        '10',
        'Rua Antônio Carlos, 85',
    ),
        

    createData(
        2,
        '12',
        'Avenida Fernando Ferrari, 1098',
    ),


    createData(
        3,
        '22',
        'Rua Santos, 102 ap 402',
    ),


]

export function criarServidor({ environment = 'test' } = {}) {
    return new Server({
        environment,
        logging: true,
        models: {
            contrato: Model
        },


        routes() {

            let name: string = baseendpoints.OPERACOES_CEV_API!;
            this.namespace = name;

            this.get("/contratoscev", schema => {
                return schema.all('contrato');
            });


            this.get("/contratoscev/:id", (schema, request) => {
                const id = request.params.id;
                return schema.find('contrato', id);
            });



            this.post("/contratoscev", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.create(attrs);
            });


            this.put("/contratoscev", (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                return schema.create(attrs);
            });


            this.del("/contratoscev/:id", (schema, request) => {
                let id = request.params.id;
                let post = schema.findBy("contrato", { id: id })
                if (post !== null)
                    post.destroy();
                return schema.all("contrato");
            });



        },
        seeds(server) {

            server.db.loadData({
                contratos
            });
        },
    });
}

export default {
    criarServidor
};
