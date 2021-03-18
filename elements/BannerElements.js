import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const BannerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
`;
export const BannerRight = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;
export const BannerImg = styled.img`
  width: 40%;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  background-color: #fcfcfc;
  padding: 1rem;
`;
