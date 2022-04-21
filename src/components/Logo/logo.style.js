import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Logotype = styled.div`
  .div-logo {
    display: flex;
    align-items: center;
    padding: 0;
  }

  img {
    width: 2rem;
    height: 2rem;
    margin: 0 0.75rem;
  }

  h1 {
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p500};
    font-weight: 400;
  }

  span {
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p500};
    font-weight: 700;
  }

  @media (min-width: 767px) {
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
