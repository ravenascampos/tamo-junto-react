import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-content: center;
  }

  @media (min-width: 1439px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-left: 7rem;
    margin-right: 5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 30rem;
  width: 21.875rem;
  background: ${theme.colors.neutral.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: 3rem auto 3rem auto;

  img {
    border-radius: 8px 8px 0 0;
    width: 21.875rem;
    height: 18.562rem;
    margin-bottom: 1.5rem;
  }
  span {
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p500};
    margin-bottom: 0.5rem;
    margin-left: 1.562rem;
  }

  p {
    margin-left: 1.562rem;
    margin-right: 1.562rem;
    font-weight: 400;
    font-size: ${theme.typography.body.normalText.fontSize};
    line-height: ${theme.typography.body.normalText.lineHeight};
    color: ${theme.colors.neutral.n400};
  }
`;
