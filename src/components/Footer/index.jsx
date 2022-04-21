import React from "react";
import { Link } from "react-router-dom";

import { Container, Wrapper, Nav } from "./footer.style";

export function Footer() {
  return (
    <Container>
      <Wrapper>
        <Nav>
          <li>
            <Link to="/terms">
              <a>Termo de Uso e Privacidade</a>
            </Link>
          </li>
          <li>
            <Link to="#">
              <a>Contato</a>
            </Link>
          </li>
          <li>
            <a
              href="https://camp.ioasys.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              Ioasys Camp
            </a>
          </li>
        </Nav>
        <p>
          tamo<span>junto</span> © 2022 tamojunto.app.br
        </p>
      </Wrapper>
    </Container>
  );
}
