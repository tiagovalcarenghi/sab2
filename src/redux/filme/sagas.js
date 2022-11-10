// import { all, takeEvery, call, put } from 'redux-saga/effects';
// import * as types from './types';
// import FilmeAPI from '../../services/filmes';
// import { FILME_INICIAL } from '../../util/constants';

//workers

// function* buscarFilmes() {
//     const filmes = yield call(FilmeAPI.buscarFilmes);
//     yield put({ type: types.ARMAZENAR_FILMES, payload: filmes })
// }

// function* buscarFilmePorId(action) {
//     const filme = yield call(FilmeAPI.buscarFilme, action.payload);
//     yield put({ type: types.SETAR_FILME_ATUAL, payload: filme })
// }

// function* excluirFilme(action) {
//     yield call(FilmeAPI.excluirFilme, action.payload);
//     yield put({ type: types.BUSCAR_FILMES })
// }

// function* inserirFilme(action) {
//     yield call(FilmeAPI.inserirFilme, action.payload);
// }

// function* atualizarFilme(action) {
//     yield call(FilmeAPI.atualizarFilme, action.payload);
// }

// function* limparFilmeAtual() {    
//     yield put({ type: types.SETAR_FILME_ATUAL, payload: FILME_INICIAL })
// }


//watchers

// function* watcherBuscarFilmes() {
//     yield takeEvery(types.BUSCAR_FILMES, buscarFilmes);
// }

// function* watcherBuscarFilmePorId() {
//     yield takeEvery(types.BUSCAR_FILME_POR_ID, buscarFilmePorId);
// }

// function* watcherExcluirFilme() {
//     yield takeEvery(types.EXCLUIR_FILME, excluirFilme);
// }

// function* watcherInserirFilme() {
//     yield takeEvery(types.INSERIR_FILME, inserirFilme);
// }

// function* watcherAtualizarFilme() {
//     yield takeEvery(types.ATUALIZAR_FILME, atualizarFilme);
// }


// function* watcherLiparFilmeAtual() {
//     yield takeEvery(types.LIMPAR_FILME_ATUAL, limparFilmeAtual);
// }

// export default function* sagas() {

//     yield all([
//         watcherBuscarFilmes(),
//         watcherBuscarFilmePorId(),
//         watcherExcluirFilme(),
//         watcherInserirFilme(),
//         watcherAtualizarFilme(),
//         watcherLiparFilmeAtual()
//     ])

//}