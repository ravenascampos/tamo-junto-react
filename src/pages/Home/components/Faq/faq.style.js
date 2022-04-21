import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${"/images/faq-bg-mobile.png"});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: auto;
  padding: 3.125rem 1.5rem;

  @media (min-width: 1023px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  img {
    width: calc(20rem - 3rem);
    height: 27.52rem;
    margin-bottom: 3rem;
    order: 1;

    @media (min-width: 375px) {
      width: 21.375rem;
    }
    @media (min-width: 1023px) {
      order: 2;
      margin-left: 1.625rem;
    }

    @media (min-width: 1439px) {
      width: 33.933rem;
      height: 41.051rem;
    }
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${theme.typography.heading.heading5.fontSize};
  line-height: ${theme.typography.heading.heading5.lineHeight};
  color: ${theme.colors.secondary.s700};
  margin-bottom: 3rem;

  @media (min-width: 1023px) {
    order: -1;
    flex: 1 0 90%;
    margin-bottom: 3.125rem;
    margin-top: 5rem;
  }

  @media (min-width: 1439px) {
    margin-left: 9.375rem;
  }
`;

export const Accordion = styled.div`
  order: 2;
  margin-bottom: 27.5rem;

  @media (min-width: 1023px) {
    width: 35.812rem;
    order: 0;
  }

  @media (min-width: 1439px) {
    margin-left: 9.375rem;
  }

  @media (min-width: 1919px) {
    width: 60rem;
    margin-right: 10rem;
  }
`;
