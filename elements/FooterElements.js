import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 10rem;
  box-shadow: 2px 3px 2px #000;
  background-color: #f3f3f3;
`;

export const Flex = styled.div`
  max-width: 1100px;
  padding: 1rem 0;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
`;

export const FooterLogo = styled(FlexDiv)`
  align-items: center;
`;
