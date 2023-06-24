import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { rootReducer } from './root'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const middleware = [logger]

const persistConfig = {
    key: 'root',
    storage
}

const newReducer = persistReducer(persistConfig, rootReducer)

const enhancedMiddleware = compose(applyMiddleware(...middleware))

export const store = createStore(newReducer, undefined, enhancedMiddleware)

export const persistor = persistStore(store)