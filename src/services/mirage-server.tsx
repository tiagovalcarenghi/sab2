import { Server, Model } from "miragejs";
import * as baseendpoints from './operacoes/contrato-cev/baseendpoints';

export const contratos = [

    {
        id: 1,
        numeroContrato: '10',
        cdEndereco: 'Rua Antônio Carlos, 85'
    },
    {
        id: 2,
        numeroContrato: '12',
        cdEndereco: 'Avenida Fernando Ferrari, 1098'
    },
    {
        id: 3,
        numeroContrato: '22',
        cdEndereco: 'Rua Santos, 102 ap 402'
    }
]

export function criarServidor({ environment = 'test' } = {}) {
    return new Server({
        environment,
        logging: true,
        models: {
            contrato: Model
        },


        routes() {

            let name:string = baseendpoints.OPERACOES_CEV_API!;  
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
                let post = schema.findBy("contrato", {id: id})       
                if(post !== null)          
                     post.destroy();       
                return schema.all("contrato");      
           });   



        },
        seeds(server) {
            server.db.loadData({
                contratos: contratos
            });
        }
    });
}

export default {
    criarServidor
};
