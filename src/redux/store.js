// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Локальное хранилище
import contactsReducer from './contacts/contactsSlice';
import authReducer from './auth/authSlice'; // Ваш редуктор
import filtersReducer from './filters/filtersSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // Данные, которые нужно сохранять
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
	reducer: {
	  contacts: contactsReducer,
	  auth: persistedAuthReducer,
	  filters: filtersReducer,
	},

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
		  serializableCheck: {
			 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		  },
		}),
  });
  
  export const persistor = persistStore(store);

