import { default as NextLink } from 'next/link';
import React, { PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  external?: boolean;
  download?: string;
  newTab?: boolean;
  passHref?: boolean;
}>;

export function Link({ href, className, external, download, newTab, passHref, children }: LinkProps) {
  const newTabProps = newTab && { target: '_blank', rel: 'noopener' };
  return external ? (
    <a className={className} href={href} download={download} {...newTabProps}>
      {children}
    </a>
  ) : (
    <NextLink className={className} href={href} {...newTabProps} passHref={passHref}>
      {children}
    </NextLink>
  );
}
