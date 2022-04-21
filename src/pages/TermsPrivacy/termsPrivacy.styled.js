import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.section`
  padding: 6rem 2rem 2rem;

  @media (min-width: 1023px) {
    padding: 8rem 12rem 2rem;
  }

  @media (min-width: 2559px) {
    padding: 10rem 30rem 2rem;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: ${theme.typography.heading.heading4.fontSize};
  line-height: ${theme.typography.heading.heading4.lineHeight};
  text-align: center;
  color: ${theme.colors.primary.p500};
  margin-bottom: 2rem;

  span {
    font-weight: 700;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  font-size: ${theme.typography.heading.heading5.fontSize};
  line-height: ${theme.typography.heading.heading5.lineHeight};
  color: ${theme.colors.primary.p800};
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${theme.typography.body.mediumText.fontSize};
  line-height: ${theme.typography.body.mediumText.lineHeight};
  color: ${theme.colors.primary.p800};
  margin-bottom: 1rem;

  span {
    font-weight: 700;
  }
`;
