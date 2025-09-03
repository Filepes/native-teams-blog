import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';

const newsPersistConfig = {
  key: 'news',
  storage,
  blacklist: ['loading', 'error'],
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['news'],
};

const rootReducer = combineReducers({
  news: persistReducer(newsPersistConfig, newsReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
