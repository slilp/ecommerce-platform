import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,combineReducers} from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const rootReducer =  combineReducers({

  });
    
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  // const store = createStore(rootReducer,composeWithDevTools());
  const store = createStore(persistedReducer,composeWithDevTools());
  const persistor = persistStore(store);
  
  export {
      store, 
      persistor
  }