import { applyMiddleware, createStore } from "redux";
import { persistReducer} from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root_reducer";
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export const handleChangeExperience = () => {
  return store.getState().experiences
}

export const handleChangeKnowledges = () =>{
  return store.getState().knowledges
}