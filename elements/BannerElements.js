import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const BannerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  img {
    width: 50%;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
    background-color: #fcfcfc;
    padding: 1rem;
  }
`;

export const BannerIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BannerIcon = styled.div`
  padding: 1rem;
`;
