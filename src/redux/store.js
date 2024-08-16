// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Локальное хранилище
import authReducer from './auth/authSlice'; // Ваш редуктор

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Данные, которые нужно сохранять
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
