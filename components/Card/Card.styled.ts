import styled from 'styled-components';

export const SCardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 227px;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: 1200px) {
    width: 250px;
    height: 200px;
  }
  background: 50% 50% ${({ $src }) => `url(${$src})`} no-repeat;
  background-size: cover;
`;

export const SCard = styled.article`
  //padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 1rem auto;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const CategoryButton = styled.div`
  width: fit-content;
  height: 22px;
  background-color: var(--secondaryColor);
  border-radius: 8px;
  padding: 4px 7px 2px;
  margin: 8px;
  color: #646464;
`;

export const CardText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-align: left;
  overflow: hidden;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  margin-left: 0;
  @media (min-width: 1200px) {
    margin-top: 0;
    margin-left: 1rem;
    flex: 1;
  }
`;
