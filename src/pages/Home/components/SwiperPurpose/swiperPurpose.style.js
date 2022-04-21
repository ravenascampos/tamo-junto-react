import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const Container = styled.div`
  padding: 10rem 0;
  margin-left: 1rem;

  h2 {
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    text-align: center;
    color: ${theme.colors.primary.p800};
    margin-right: 1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1439px) {
    padding: 12.375rem 0;
    margin-right: 7rem;
    margin-left: 7rem;

    h2 {
      font-size: ${theme.typography.heading.heading4.fontSize};
      line-height: ${theme.typography.heading.heading4.lineHeight};
      margin-bottom: 7rem;
    }
  }
`;

export const SwiperWrapper = styled.div`
  .swiper-pagination-bullet {
    background: #0d4a4e !important;
    width: 10px !important;
    height: 10px !important;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  height: 23.75rem;
  background: ${theme.colors.neutral.white};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: 3rem 2rem 3rem 2rem;

  img {
    margin-bottom: 1rem;
  }

  span {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: ${theme.typography.heading.heading5.fontSize};
    line-height: ${theme.typography.heading.heading5.lineHeight};
    color: ${theme.colors.primary.p800};
  }

  p {
    font-weight: 400;
    font-size: ${theme.typography.body.mediumText.fontSize};
    line-height: ${theme.typography.body.mediumText.lineHeight};
    color: ${theme.colors.primary.p800};
  }
`;
