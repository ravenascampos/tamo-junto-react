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

    @media (min-width: 1023px) {
      margin-left: 4rem;
      margin-right: 5rem;
    }

    @media (min-width: 1439px) {
      margin-left: 7rem;
      margin-right: 7rem;
      font-size: ${theme.typography.heading.heading3.fontSize};
      line-height: ${theme.typography.heading.heading3.lineHeight};
    }
  }
`;
