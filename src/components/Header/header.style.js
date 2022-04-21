import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.header`
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  position: fixed;
  background: ${theme.colors.neutral.white};
`;

export const Navigate = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul li a {
    transition: color 0.3s;
  }

  ul li a:hover {
    color: ${theme.colors.secondary.s70};
  }

  .nav-options {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .nav-options.active {
    opacity: 1;
    visibility: visible;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 4rem;
    left: 0;
    display: grid;
    place-content: center;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 1;
    gap: 3rem;
    background: ${theme.colors.neutral.white};
  }

  .title-menu {
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p500};
    font-weight: 700;
  }

  .mobile-menu {
    display: block;
  }

  @media (min-width: 1023px) {
    height: 7rem;
    justify-content: space-evenly;

    .nav-options {
      opacity: 1;
      visibility: visible;
      display: flex;
    }

    .title-menu {
      font-size: ${theme.typography.body.mediumText.fontSize};
      line-height: ${theme.typography.body.mediumText.lineHeight};
      font-weight: 600;
    }

    .option {
      padding: 0.5rem 1rem;
    }

    .button-register {
      background: ${theme.colors.primary.p500};
      border-radius: 1rem;

      a {
        color: ${theme.colors.neutral.white};
        text-transform: uppercase;
      }
    }

    .mobile-menu {
      display: none;
    }
  }

  @media (min-width: 1439px) {
    .title-menu {
      font-size: ${theme.typography.heading.heading6.fontSize};
      line-height: ${theme.typography.heading.heading6.lineHeight};
    }

    .option {
      padding: 1rem 1.5rem;
    }
  }
`;
