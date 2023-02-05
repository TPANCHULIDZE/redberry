import { createStore } from "redux";
import { persistReducer} from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root_reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['personalInfo']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);