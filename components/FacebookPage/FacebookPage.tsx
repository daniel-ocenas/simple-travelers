import React from 'react';
import { FacebookProvider, Page } from 'react-facebook';

export default function FacebookPage(props: any) {
  return (
    // TODO Flex
    <div style={{ textAlign: 'center' }}>
      <FacebookProvider appId={props.token}>
        <Page href={'https://www.facebook.com/WeAreSimpleTravelers'} adaptContainerWidth={true} />
      </FacebookProvider>
    </div>
  );
}
