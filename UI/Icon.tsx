import React, { FunctionComponent, MouseEventHandler, SVGProps } from 'react';
import styled from 'styled-components';

export type IconType = FunctionComponent<SVGProps<SVGSVGElement>>;

type MarginType = number | string;

const IconWrapper = styled.span<{
  fill?: string;
  height?: number;
  width?: number;
  background?: string;
  display?: string;
  ml?: MarginType;
  mr?: MarginType;
  mt?: MarginType;
  mb?: MarginType;
  hoverFill?: string;
  noPointer?: boolean;
  round: boolean;
  isHovered?: boolean;
}>`
  .icon g {
    fill: ${(props) => props.fill};
    cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

    :hover {
      fill: ${(props) => props.hoverFill};
      cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};
    }
  }

  :hover {
    cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};
  }

  .icon {
    fill: ${(props) => props.fill};
    background-color: ${({ background }) => background};
    border-radius: ${({ round }) => (round ? '50%' : '2px')};
    display: ${({ display }) => display};
    cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

    :hover {
      fill: ${(props) => props.hoverFill};
      cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};
    }
  }

  .icon use {
    stroke: ${(props) => props.fill};
    background-color: ${({ background }) => background};
    border-radius: ${({ round }) => (round ? '50%' : '2px')};
    display: ${({ display }) => display};
    cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

    :hover {
      fill: ${(props) => props.hoverFill};
      cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};
    }
  }

  display: ${({ display }) => display};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  margin-left: ${({ ml }) => (typeof ml === 'string' ? ml : ml + 'px')};
  margin-right: ${({ mr }) => (typeof mr === 'string' ? mr : mr + 'px')};
  margin-top: ${({ mt }) => (typeof mt === 'string' ? mt : mt + 'px')};
  margin-bottom: ${({ mb }) => (typeof mb === 'string' ? mb : mb + 'px')};
  cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};
`;

interface IconProps {
  IconComponent: IconType;
  size?: number;
  height?: number;
  width?: number;
  color?: string;
  background?: string;
  ml?: MarginType;
  mr?: MarginType;
  mt?: MarginType;
  mb?: MarginType;
  display?: 'block' | 'inline' | 'flex';
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  hoverFill?: string;
  noPointer?: boolean;
  round?: boolean;
}

export const Icon = ({
  IconComponent,
  size = 36,
  width,
  height,
  color,
  background,
  display = 'inline',
  ml = 0,
  mr = 0,
  mt = 0,
  mb = 0,
  onClick,
  onMouseEnter,
  onMouseLeave,
  hoverFill,
  noPointer,
  round = false,
}: IconProps) => {
  return (
    <IconWrapper
      fill={color}
      width={width ?? size}
      height={height ?? size}
      background={background}
      display={display}
      mr={mr}
      ml={ml}
      mt={mt}
      mb={mb}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      hoverFill={hoverFill}
      noPointer={noPointer}
      round={round}
    >
      <IconComponent height={height ?? size} width={width ?? size} className={'icon'} />
    </IconWrapper>
  );
};
