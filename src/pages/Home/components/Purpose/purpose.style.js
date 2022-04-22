import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.section`
  background: ${theme.colors.primary.p500};
  display: flex;
  align-items: center;
  width: 100%;
  height: 25rem;

  h2 {
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    text-align: center;
    color: ${theme.colors.neutral.white};
    margin-left: 1rem;
    margin-right: 1rem;
    max-width: 1440px;
    margin: 0 auto;

    @media (min-width: 1439px) {
      font-size: ${theme.typography.heading.heading3.fontSize};
      line-height: ${theme.typography.heading.heading3.lineHeight};
    }
  }
`;
