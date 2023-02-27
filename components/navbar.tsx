import Link from 'next/link';
import { useState } from 'react';
import NavItem from './navItem'; 

export default function Navbar() {
    const MENU_LIST = [
        { text: "Home", href: "/" },
        { text: "About Us", href: "/about" },
        { text: "Market Place", href: "/market" },
        { text: "Wallet", href: "/wallet" },
      ];
  const [navActive, setNavActive] = useState(false); // Initialize navActive to false instead of null
  const [activeIdx, setActiveIdx] = useState(-1);
  
  return (
    <>
    <header>
      <nav className={`nav`}>
        <Link href="/">
            <h1 className="logo">Sasula</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`}>
          {MENU_LIST.map((menu:any, idx:any) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
    </>
  );
}
