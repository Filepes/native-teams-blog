'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store/store';
import { LoadingSpinner } from './LoadingSpinner';

interface ReduxProviderProps {
  children: React.ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingSpinner size={200} />}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};
