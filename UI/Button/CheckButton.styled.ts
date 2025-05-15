import styled from 'styled-components';

export const SCheckButton = styled.div<{ $checked: boolean }>`
  position: relative;
  padding: 8px;
  margin: 4px;
  background-color: var(--primaryColor);
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  background-size: 300% 100%;
  border-radius: 8px;
  border: 2px solid ${({ $checked }) => ($checked ? 'var(--primaryColorDark)' : 'var(--primaryColor)')};

  :hover {
    background-color: var(--primaryColorExtraLight);
  }
`;
