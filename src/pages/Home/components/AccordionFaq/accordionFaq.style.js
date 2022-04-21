import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  background-color: transparent;

  .MuiAccordion-root {
    box-shadow: none;
    background-color: transparent;
  }

  .MuiAccordionSummary-root {
    background: ${theme.colors.secondary.s30};
    border-radius: 12px;
    box-shadow: none;
    margin-bottom: 1.5rem;
    padding: 1rem;
  }

  .Mui-expanded {
    background: ${theme.colors.primary.p20};
    border-radius: 12px;
    box-shadow: none;
  }

  .MuiAccordionDetails-root {
    background: ${theme.colors.primary.p20};
    border-radius: 12px;
    box-shadow: none;
  }

  .icon {
    color: ${theme.colors.primary.p800};
    font-size: ${theme.typography.heading.heading5.fontSize};
  }

  p {
    font-weight: 400;
    font-size: ${theme.typography.body.normalText.fontSize};
    line-height: ${theme.typography.body.normalText.lineHeight};
    color: ${theme.colors.neutral.n400};
  }

  @media (min-width: 1023px) {
    .icon {
      font-size: ${theme.typography.heading.heading4.fontSize};
    }

    p {
      font-size: ${theme.typography.body.largeText.fontSize};
      line-height: ${theme.typography.body.largeText.lineHeight};
    }
  }
`;

export const Title = styled.div`
  display: flex;

  span {
    font-size: ${theme.typography.heading.heading5.fontSize};
    align-items: center;
    color: ${theme.colors.primary.p800};
    margin-right: 0.75rem;
  }

  h5 {
    font-weight: 700;
    font-size: ${theme.typography.body.mediumText.fontSize};
    line-height: ${theme.typography.body.mediumText.lineHeight};
    color: ${theme.colors.primary.p800};
  }

  @media (min-width: 1023px) {
    span {
      font-size: ${theme.typography.heading.heading4.fontSize};
    }

    h5 {
      font-size: ${theme.typography.heading.heading5.fontSize};
      line-height: ${theme.typography.heading.heading5.lineHeight};
    }
  }
`;
