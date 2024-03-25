import React, { PropsWithChildren } from 'react';
import { SViewContainer } from 'UI/ViewContainer/ViewContainer.styled';

interface ViewContainerProps extends PropsWithChildren {
  top?: string | number;
}

const ViewContainer = ({ top = '100vh', children }: ViewContainerProps) => {
  return <SViewContainer top={typeof top === 'string' ? top : `${top}px`}>{children}</SViewContainer>;
};

export default ViewContainer;
