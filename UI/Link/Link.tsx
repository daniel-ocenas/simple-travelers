import { default as NextLink } from 'next/link';
import React, { PropsWithChildren } from 'react';

export type LinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  external?: boolean;
  download?: string;
  newTab?: boolean;
  passHref?: boolean;
  style?: React.CSSProperties | undefined;
}>;

export function Link({ href, className, external, download, newTab, passHref, style, children }: LinkProps) {
  const newTabProps = newTab && { target: '_blank', rel: 'noopener' };
  return external ? (
    <a className={className} href={href} download={download} {...newTabProps}>
      {children}
    </a>
  ) : (
    <NextLink className={className} href={href} {...newTabProps} passHref={passHref} style={style}>
      {children}
    </NextLink>
  );
}
