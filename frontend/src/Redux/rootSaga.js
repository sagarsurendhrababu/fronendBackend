import {all} from 'redux-saga/effects'
import {watchProductAsync} from './features/productSliceSaga'

export default function* rootSaga(){
    yield all([
        watchProductAsync(),
    ])
}