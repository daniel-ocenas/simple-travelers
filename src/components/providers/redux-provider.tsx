'use client';

import { useRef } from 'react';

import { Provider } from 'react-redux';

import { AppStore, globalStore } from '@/store/AppStore';


const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = globalStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
