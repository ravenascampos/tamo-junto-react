import { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Container, Navigate } from "./header.style";
import menuOpen from "../../assets/icons/menu-hamburger.svg";
import menuClose from "../../assets/icons/menu-close.svg";

export function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <Container>
      <Navigate>
        <Logo />
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#purpose" className="title-menu">
              Proposta
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#community" className="title-menu">
              Comunidade
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#faq" className="title-menu">
              Como funciona?
            </a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#downloadNow" className="title-menu">
              Baixe agora
            </a>
          </li>
          <Link to={"/register"}>
            <li className="option button-register" onClick={closeMobileMenu}>
              <a className="title-menu">Cadastre-se</a>
            </li>
          </Link>
        </ul>
        <button className="mobile-menu" onClick={handleClick}>
          {click ? (
            <img src={menuClose} className="close" />
          ) : (
            <img src={menuOpen} />
          )}
        </button>
      </Navigate>
    </Container>
  );
}
