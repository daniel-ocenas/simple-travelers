'use client';

import { useState } from 'react';

import { Provider } from 'react-redux';

import { AppStore, globalStore } from '@/store/AppStore';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [store] = useState<AppStore>(() => globalStore());
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
