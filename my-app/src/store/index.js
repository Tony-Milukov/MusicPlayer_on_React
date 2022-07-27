import thunk from 'redux-thunk' ;
import { createStore,compose,combineReducers,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {musicReducer} from "./Songs/reducer"; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    allMusic: musicReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// created store
export const store = createStore(
    persistedReducer,

    composeEnhancers(applyMiddleware(thunk))
);
// create persistor
export const persistor = persistStore(store);
export default store
