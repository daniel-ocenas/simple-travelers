import React from 'react';
import styled, { css } from 'styled-components';

const defaultFontFamily = `"Nunito", sans-serif`;

// type TransformType = 'capitalize' | 'lowercase' | 'uppercase' | 'sentencecase' | 'none';
// type Cursor = 'initial' | 'pointer';
// type Decoration = 'none' | 'underline' | 'line-through';
type FontType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TextProps {
  family?: string;
  type?: FontType;
  size?: number;
  weight?: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

interface ExtendedTextProps extends TextProps {
  defaultSize: number;
}

const fontStyles = css<ExtendedTextProps>`
  font-family: ${({ family }) => family ?? defaultFontFamily};
  font-size: ${({ size, defaultSize }) => (size ? `${size}px` : `${defaultSize}px`)};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  color: ${({ color }) => color ?? 'inherit'};
`;

const P = styled.span<ExtendedTextProps>`
  ${fontStyles}
`;
const H1 = styled.h1<ExtendedTextProps>`
  ${fontStyles}
`;
const H2 = styled.h2<ExtendedTextProps>`
  ${fontStyles}
`;
const H3 = styled.h3<ExtendedTextProps>`
  ${fontStyles}
`;
const H4 = styled.h4<ExtendedTextProps>`
  ${fontStyles}
`;
const H5 = styled.h5<ExtendedTextProps>`
  ${fontStyles}
`;
const H6 = styled.h6<ExtendedTextProps>`
  ${fontStyles}
`;

export const Text = (props: TextProps) => {
  switch (props.type) {
    case 'h1':
      return (
        <H1 {...props} defaultSize={40} weight={'bold'}>
          {props.children}
        </H1>
      );
    case 'h2':
      return (
        <H2 {...props} defaultSize={36} weight={'bold'}>
          {props.children}
        </H2>
      );
    case 'h3':
      return (
        <H3 {...props} defaultSize={30} weight={'bold'}>
          {props.children}
        </H3>
      );
    case 'h4':
      return (
        <H4 {...props} defaultSize={24} weight={'bold'}>
          {props.children}
        </H4>
      );
    case 'h5':
      return (
        <H5 {...props} defaultSize={20} weight={'bold'}>
          {props.children}
        </H5>
      );
    case 'h6':
      return (
        <H6 {...props} defaultSize={16} weight={'bold'}>
          {props.children}
        </H6>
      );
    default:
      return (
        <P {...props} defaultSize={18} weight={'normal'}>
          {props.children}
        </P>
      );
  }
};
