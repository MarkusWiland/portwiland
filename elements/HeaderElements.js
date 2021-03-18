import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: #fcfcfc;
  position: sticky;
  top: 0;
`;

export const NavContainer = styled.div`
  max-width: 1100px;

  height: 150px;
  width: 100%;
  display: flex;
  justify-content: ${({ isScrolledAway }) => console.log(isScrolledAway)};
  flex-direction: column;
  margin: 0 auto;
`;
export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
`;
export const NavImg = styled.img`
  width: 100px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;
export const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;
export const NavLi = styled.li`
  padding: 1rem;
`;
