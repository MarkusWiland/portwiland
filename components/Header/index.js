import { Header, NavContainer, NavLogo, Nav } from '@/elements/index';
import { useEffect, useState } from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Link from 'next/link';
export default function index() {
  const [isScrolledAway, setIsScrolledAway] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeNavbar);
    }
    return () => window.removeEventListener('scroll', changeNavbar);
  }, []);
  function changeNavbar() {
    if (window.scrollY >= 80) {
      setIsScrolledAway(true);
    } else {
      setIsScrolledAway(false);
    }
  }
  return (
    <Header>
      <NavContainer isScrolledAway={isScrolledAway}>
        <NavLogo isScrolledAway={isScrolledAway}>
          <span>
            {true ? <Brightness2Icon fontSize="small" /> : <WbSunnyIcon />}
          </span>
          <h1>Markus Wiland</h1>
        </NavLogo>
        <Nav>
          <ul>
            <li>
              <Link href="/">
                <a>Hem</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blogg</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Om</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Kontakt</a>
              </Link>
            </li>
            <li>
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
          </ul>
        </Nav>
      </NavContainer>
    </Header>
  );
}
