import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.section`
  margin-top: 4.75rem;
  margin-bottom: 5.312rem;

  @media (min-width: 767px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 1023px) {
    margin-bottom: 10.937rem;
  }

  h2 {
    font-weight: 600;
    font-size: ${theme.typography.heading.heading6.fontSize};
    line-height: ${theme.typography.heading.heading6.lineHeight};
    text-align: center;
    color: ${theme.colors.primary.p800};
    margin-bottom: 2rem;

    @media (min-width: 1024px) {
      margin-top: 10.937rem;
      margin-bottom: 4rem;
      font-size: ${theme.typography.heading.heading4.fontSize};
      line-height: ${theme.typography.heading.heading4.lineHeight};
    }
  }
`;
