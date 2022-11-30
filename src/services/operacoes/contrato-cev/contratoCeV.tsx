import axios from "axios";
import * as baseendpoints from './baseendpoints';


const BASE_URL = `${baseendpoints.OPERACOES_CEV_API}/contratoscev`;

class ContratosCeVService {

    buscarContratos() {
        return axios.get(BASE_URL).then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    buscarContratoPorId(id:any) {
        return axios.get(`${BASE_URL}/${id}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }

    inserirContrato(contrato:any) {
        return axios.post(BASE_URL, contrato)
            .catch(error => {
                throw error;
            });
    }

    atualizarContrato(contrato:any) {
        return axios.put(BASE_URL, contrato)
            .catch(error => {
                throw error;
            });
    }

    excluirContrato(id:any) {
        return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
                throw error;
            });
    }


}

export default new ContratosCeVService;