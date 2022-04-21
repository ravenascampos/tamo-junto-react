import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: ${theme.colors.primary.p500};
  color: ${theme.colors.neutral.white};
`;

export const Wrapper = styled.div`
  padding: 0.5rem 2rem 0 2rem;

  p {
    padding: 0.5rem;
    text-align: center;
    font-weight: 400;
    font-size: ${theme.typography.body.smallText.fontSize};
    line-height: ${theme.typography.body.smallText.lineHeight};
  }
  span {
    font-weight: 700;
  }

  @media (min-width: 1023px) {
    padding-left: 2rem 25rem 2rem 25rem;

    p {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 1439px) {
    padding: 2.75rem 26.375rem 2.75rem 26.375rem;

    p {
      font-size: ${theme.typography.body.normalText.fontSize};
      line-height: ${theme.typography.body.normalText.lineHeight};
      margin-top: 1.5rem;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding: 0.5rem;
  }

  li a {
    transition: color 0.3s;
    color: ${theme.colors.neutral.white};
    font-weight: 400;
    font-size: ${theme.typography.body.smallText.fontSize};
    line-height: ${theme.typography.body.smallText.lineHeight};
  }

  li a:hover {
    color: ${theme.colors.secondary.s70};
  }

  @media (min-width: 1023px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      margin-right: 2rem;
    }

    li a {
      font-size: ${theme.typography.body.normalText.fontSize};
      line-height: ${theme.typography.body.normalText.lineHeight};
    }
  }
`;
