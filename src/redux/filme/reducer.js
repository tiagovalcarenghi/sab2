import * as types from './types';
import { handleActions } from 'redux-actions';


//usando handleACtions:
const CadastroPJReducer = handleActions(
    // {
    //    [types.ARMAZENAR_FILMES]: (state,action) =>  ({ ...state, filmes: action.payload }),
    //    [types.SETAR_FILME_ATUAL]: (state,action) =>  ({ ...state, filmeAtual: action.payload })
    // },
    // types.INITIAL_STATE
)



export default CadastroPJReducer;