import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { darken } from "polished";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;
  margin-left: 1.5rem;

  img {
    margin: 5.5rem auto 6.25rem auto;
    width: 12.812rem;
  }

  h1 {
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p500};
  }

  p {
    font-weight: 400;
    font-size: ${theme.typography.body.largeText.fontSize};
    line-height: ${theme.typography.body.largeText.lineHeight};
    color: ${theme.colors.neutral.n700};
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;

    img {
      order: 2;
      margin-right: 1rem;
    }

    .content {
      order: 1;
      margin-right: 2rem;
    }
  }

  @media (min-width: 1023px) {
    img {
      margin-right: 4rem;
    }
    .content {
      margin-left: 4rem;
      margin-right: 5rem;
    }
  }

  @media (min-width: 1439px) {
    img {
      margin-right: 7rem;
      width: 30.937rem;
      height: 28.875rem;
    }
    .content {
      margin-left: 7rem;
    }

    h1 {
      font-size: ${theme.typography.heading.heading1.fontSize};
      line-height: ${theme.typography.heading.heading1.lineHeight};
    }

    p {
      font-size: ${theme.typography.heading.heading4.fontSize};
      line-height: ${theme.typography.heading.heading4.lineHeight};
      margin-top: 2.5rem;
      margin-bottom: 3.5rem;
    }
  }
`;

export const Button = styled.a`
  padding: 1rem 5rem;
  border-radius: 1rem;
  background: ${theme.colors.primary.p500};
  color: ${theme.colors.neutral.white};
  text-transform: uppercase;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  font-weight: 700;

  &:hover {
    background: ${darken(0.1, "#0D4A4E")};
  }
`;
