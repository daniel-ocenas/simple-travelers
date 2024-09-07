'use client';
import { Button } from 'antd';
import Providers from 'components/Authentication/Providers';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const SignButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <Button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </Button>
      </div>
    );
  }
  return (
    <Button onClick={() => signIn()} className="text-green-600 ml-auto">
      Sign In
    </Button>
  );
};

const SignInButton = () => {
  return (
    <Providers>
      <SignButton />
    </Providers>
  );
};

export default SignInButton;
