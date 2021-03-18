import {
  Header,
  NavContainer,
  NavLogo,
  NavImg,
  Nav,
  NavUl,
  NavLi,
} from '@/elements/index';
import { useEffect, useState } from 'react';
export default function index() {
  const [isScrolledAway, setIsScrolledAway] = useState(true);
  // console.log(isScrolledAway);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', changeNavbar);
  //   }
  //   return () => window.removeEventListener('scroll', changeNavbar);
  // }, []);
  // function changeNavbar() {
  //   if (window.scrollY > 80) {
  //     setIsScrolledAway(true);
  //   } else {
  //     setIsScrolledAway(false);
  //   }
  // }
  return (
    <Header>
      <NavContainer isScrolledAway={isScrolledAway}>
        <NavLogo>
          <NavImg src="/markuswiland.jpg" alt="markuswiland" />
        </NavLogo>
        <Nav>
          <NavUl>
            <NavLi>Home</NavLi>
            <NavLi>Home</NavLi>
            <NavLi>Home</NavLi>
            <NavLi>Home</NavLi>
            <NavLi>Home</NavLi>
          </NavUl>
        </Nav>
      </NavContainer>
    </Header>
  );
}
