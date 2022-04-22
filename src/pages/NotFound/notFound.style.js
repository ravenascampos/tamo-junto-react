import { darken } from "polished";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 1023px) {
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;

  @media (min-width: 1023px) {
    width: 20rem;
    height: 20rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: ${theme.typography.heading.heading5.fontSize};
  line-height: ${theme.typography.heading.heading5.lineHeight};
  color: ${theme.colors.primary.p500};
  padding: 2rem;

  @media (min-width: 1023px) {
    font-size: ${theme.typography.heading.heading2.fontSize};
    line-height: ${theme.typography.heading.heading2.lineHeight};
  }
`;

export const Text = styled.h3`
  font-weight: 400;
  font-size: ${theme.typography.body.largeText.fontSize};
  line-height: ${theme.typography.body.largeText.lineHeight};
  color: ${theme.colors.secondary.s700};
  padding: 2rem;
  text-align: center;
`;

export const Button = styled.a`
  padding: 1rem 3rem;
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
