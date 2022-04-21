import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.section`
  width: 100%;
  height: 46.875rem;
  background: ${theme.colors.primary.p500};

  @media (min-width: 1023px) {
    height: 51rem;
  }
`;

export const SwiperWrapper = styled.div`
  .swiper-pagination-bullet {
    background: #ff947b !important;
    width: 10px !important;
    height: 10px !important;

    @media (min-width: 1023px) {
      width: 1rem !important;
      height: 1rem !important;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5.437rem;

  @media (min-width: 1023px) {
    margin-top: 7.5rem;
  }
`;

export const Card = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  width: 21.375rem;
  height: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  color: ${theme.colors.neutral.white};

  h5 {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
  }

  h6 {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: ${theme.typography.heading.heading6.fontSize};
    line-height: ${theme.typography.heading.heading6.lineHeight};
  }

  p {
    margin-left: 2rem;
    margin-right: 1rem;
    position: relative;
    font-weight: 700;
    font-size: ${theme.typography.body.normalText.fontSize};
    line-height: ${theme.typography.body.normalText.lineHeight};
  }

  span {
    font: 700 2.5rem serif;
    position: absolute;
    top: -0.6rem;
    left: -1.5rem;
  }

  @media (min-width: 1023px) {
    width: 60rem;
    height: 36rem;
    margin-bottom: 5rem;

    h5 {
      margin-left: 9.854rem;
      font-size: ${theme.typography.heading.heading3.fontSize};
      line-height: ${theme.typography.heading.heading3.lineHeight};
    }
    h6 {
      margin-left: 9.854rem;
      font-size: ${theme.typography.heading.heading4.fontSize};
      line-height: ${theme.typography.heading.heading4.lineHeight};
    }
    p {
      margin-left: 9.854rem;
      margin-right: 10.576rem;
      font-size: ${theme.typography.heading.heading5.fontSize};
      line-height: ${theme.typography.heading.heading5.lineHeight};
    }
    span {
      font-size: 3rem;
      left: -1.6rem;
      top: -1rem;
    }
  }

  @media (min-width: 1439px) {
    width: 69.375rem;
  }
`;
