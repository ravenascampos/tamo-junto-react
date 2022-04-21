import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  padding-top: 8rem;

  .MuiStepper-root.MuiStepper-horizontal {
    padding: 0 2rem;
    @media (min-width: 1023px) {
      padding: 0 18rem;
    }
  }

  .MuiStepLabel-label,
  .MuiStepLabel-label.Mui-completed,
  .MuiStepLabel-label.Mui-active {
    font-family: "Raleway", sans-serif;
    font-size: ${theme.typography.body.smallText.fontSize};
    line-height: ${theme.typography.body.smallText.lineHeight};
    color: ${theme.colors.neutral.n600};
    font-weight: 700;
  }

  .MuiStepIcon-text,
  .MuiStep-root.MuiStep-horizontal,
  .MuiStepIcon-text.Mui-completed,
  .MuiStep-root.MuiStep-horizontal,
  .MuiStepIcon-text.Mui-active {
    font-family: "Raleway", sans-serif;
    padding-left: 0;
    padding-right: 0;
    font-size: 1rem;

    .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed,
    .MuiSvgIcon-root.MuiStepIcon-root.Mui-active {
      color: ${theme.colors.primary.p500};
    }
  }

  .MuiStepLabel-root.MuiStepLabel-horizontal {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .MuiStepConnector-root.MuiStepConnector-horizontal {
    .MuiStepConnector-line.MuiStepConnector-lineHorizontal {
      border-top-width: 0.5rem;
      border-color: ${theme.colors.neutral.n60};
      height: -13rem;
    }
  }

  .MuiStepConnector-root.MuiStepConnector-horizontal.Mui-active {
    .MuiStepConnector-line.MuiStepConnector-lineHorizontal {
      border-top-width: 0.5rem;
      border-color: ${theme.colors.primary.p500};
      height: -3rem;
    }
  }
`;
