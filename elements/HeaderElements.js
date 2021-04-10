import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: sticky;
  backdrop-filter: saturate(180%) blur(10px);
  z-index: 10;
  top: 0;
`;

export const NavContainer = styled.div`
  max-width: 1000px;
  height: 100px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: ${({ isScrolledAway }) =>
    isScrolledAway ? 'space-between' : 'center'};
  flex-direction: ${({ isScrolledAway }) =>
    isScrolledAway ? 'row' : 'column'};
  align-items: center;
  margin: 0 auto;
`;
export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    transition: 1s ease-in-out;
    margin-left: ${({ isScrolledAway }) => (isScrolledAway ? '3rem' : '0rem')};
  }
  span {
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px;
    background-color: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
  }
  ul li {
    padding: 1rem;
    font-weight: bold;
  }
`;
