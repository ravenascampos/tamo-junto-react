import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.section`
  background: ${theme.colors.neutral.white};
  width: 100%;
  height: auto;

  @media (min-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Title = styled.h4`
  padding: 3.75rem 1.5rem 0 1.5rem;
  font-weight: 400;
  font-size: ${theme.typography.body.largeText.fontSize};
  line-height: ${theme.typography.body.largeText.lineHeight};
  color: ${theme.colors.primary.p800};

  @media (min-width: 1023px) {
    order: -1;
    flex: 1 0 90%;
    text-align: center;
    font-weight: 700;
    font-size: ${theme.typography.heading.heading4.fontSize};
    line-height: ${theme.typography.heading.heading4.lineHeight};
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  padding: 0 1.5rem 0.5rem 1.5rem;

  @media (min-width: 1023px) {
    order: 0;
    padding: 0 1rem 6.187rem 8rem;
  }

  @media (min-width: 1439px) {
    padding: 0 1rem 6.187rem 10.25rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 24rem;
    height: 24rem;

    @media (min-width: 1023px) {
      order: 1;
    }

    @media (min-width: 1439px) {
      width: 45.875rem;
      height: 45.875rem;
    }
  }
`;
