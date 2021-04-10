import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  margin-top: 4rem;
  height: 10rem;
`;

export const Flex = styled.div`
  max-width: 1000px;
  padding: 1rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .FooterLogo {
    flex-direction: column;
    display: flex;
    width: 100%;
    a {
      padding: 0.5rem;
    }
  }
  .FlexDiv {
    flex-direction: column;
    display: flex;
    width: 100%;
    a {
      padding: 0.5rem;
    }
  }
`;
