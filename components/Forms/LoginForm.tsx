'use client';
import { Button } from 'antd';
import { notify } from 'components/Notification/notification';
import { useState } from 'react';
import { Flex, MarginBox, TextInput } from 'UI';

export const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const login = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userName, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          notify('success', `Login successfull`);
          window.sessionStorage.setItem('user', userName);
          window.location.reload();
        } else if (res.status === 401) {
          notify('warning', `Incorrect password`);
        } else {
          notify('error', `Login failed`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Flex direction={'column'} maxWidth={300} align={'center'}>
      <TextInput value={userName} type={'text'} onChange={setUserName} />
      <MarginBox mt={16} />
      <TextInput value={password} type={'password'} onChange={setPassword} />
      <MarginBox mt={16} />
      <Flex>
        <Button onClick={login}>Login</Button>
        {/*<MarginBox mr={16} />*/}
        {/*<Button onClick={register}>Register</Button>*/}
      </Flex>
    </Flex>
  );
};
