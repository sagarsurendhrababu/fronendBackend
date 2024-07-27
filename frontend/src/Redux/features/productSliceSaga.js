import { takeEvery,put,call } from "redux-saga/effects";
import axios from 'axios'
import {fetchProductRequest,fetchProductSuccess,fetchProductFailed} from './productSlice'

function* productAsync(){
    try{
        yield put(fetchProductRequest())    
        const response = yield call(axios.get, '/api/products');
        yield put(fetchProductSuccess(response.data))

    }catch(error){
        yield put(fetchProductFailed(error.message))
    }
}

export function* watchProductAsync(){
    yield takeEvery('fetchProductAsync',productAsync)
}