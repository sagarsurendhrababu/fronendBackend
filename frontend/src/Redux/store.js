import {configureStore} from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import rootSaga from './rootSaga'


import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer:{
        products: productSlice
    },
    middleware: (setDefaultMiddleware) => setDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
export default store