import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
// import rootReducer from './reducers'
import rootReducer from "./reducers/rootReducer";

 
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["main"]
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
export default () => {
  let store = createStore(persistedReducer,{})
  let persistor = persistStore(store)
  return { store, persistor }
}