import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  background: ${theme.colors.secondary.s30};
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary.p800};
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  h4 {
    font-weight: 700;
    font-size: ${theme.typography.body.largeText.fontSize};
    line-height: ${theme.typography.body.largeText.lineHeight};
    text-align: center;
    margin-bottom: 1.25rem;
  }

  h5 {
    font-weight: 400;
    font-size: ${theme.typography.body.mediumText.fontSize};
    line-height: ${theme.typography.body.mediumText.lineHeight};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 1439px) {
    height: 31rem;

    h4 {
      font-size: ${theme.typography.heading.heading4.fontSize};
      line-height: ${theme.typography.heading.heading4.lineHeight};
      margin-bottom: 2rem;
    }

    h5 {
      font-size: ${theme.typography.heading.heading5.fontSize};
      line-height: ${theme.typography.heading.heading5.lineHeight};
      margin-bottom: 2.5rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  img {
    height: 3.194rem;
  }
  .play-store {
    width: 10rem;
    border-radius: 5px;
  }

  .apple-store {
    width: 9rem;
    border-radius: 7px;
  }

  @media (min-width: 1439px) {
    gap: 1.937rem;

    img {
      height: 4.75rem;
    }

    .play-store {
      width: 16.062rem;
    }
    .apple-store {
      width: 14.25rem;
    }
  }
`;
