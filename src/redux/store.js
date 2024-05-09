import { configureStore,  combineReducers } from "@reduxjs/toolkit";
import {contactsReducer} from './contactsSlice';
import {filtersReducer} from './filtersSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  items: contactsReducer,
  filters: filtersReducer,
})

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
  }

const pContactsReducer = persistReducer(contactsPersistConfig, rootReducer);

export const store = configureStore({
  reducer: pContactsReducer,

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)