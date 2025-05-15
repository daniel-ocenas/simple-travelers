import styled from 'styled-components';

export const SCardImage = styled.div<{ $src: string }>`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: 1200px) {
    width: 40%;
  }
  background: 50% 50% ${({ $src }) => `url(${$src})`} no-repeat;
  background-size: cover;
`;

export const SCard = styled.article`
  padding: 1rem;
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
  height: 28px;
  background-color: var(--secondaryColor);
  border-radius: 8px;
  color: black;
  padding: 6px 7px 5px;
  margin: 8px;
`;

export const CardText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-align: left;
  overflow: hidden;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  margin-left: 0;
  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: 1rem;
    flex: 1;
  }
`;
