'use-client';
import React, { JSX, useEffect, useState } from 'react';
import { LoginForm } from 'src/components/Forms/LoginForm';
import { Flex, MarginBox } from 'src/UI';

export interface PrivateComponentProps {
  render: () => JSX.Element;
}

const PrivateComponent = ({ render }: PrivateComponentProps) => {
  const [user, setUser] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sessionUser = window.sessionStorage.getItem('user') ?? undefined;
    if (sessionUser) {
      setUser(sessionUser);
    }
  }, []);

  return (
    <Flex direction={'column'} align={'center'}>
      {user ? (
        <>{render()}</>
      ) : (
        <>
          {'Please login to display this page'}
          <MarginBox mt={16} />
          <LoginForm />
        </>
      )}
    </Flex>
  );
};

export default PrivateComponent;
