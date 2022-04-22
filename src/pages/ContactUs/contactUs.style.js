import styled from "styled-components";
import { theme } from "../../styles/theme";
import { darken } from "polished";

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  padding-bottom: 2rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${theme.typography.heading.heading5.fontSize};
  line-height: ${theme.typography.heading.heading5.lineHeight};
  color: ${theme.colors.primary.p500};
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  @media (min-width: 1023px) {
    font-weight: 700;
    font-size: ${theme.typography.heading.heading1.fontSize};
    line-height: ${theme.typography.heading.heading1.lineHeight};
  }
`;

export const Subtitle = styled.h3`
  font-weight: 400;
  font-size: ${theme.typography.body.mediumText.fontSize};
  line-height: ${theme.typography.body.mediumText.lineHeight};
  color: ${theme.colors.neutral.n700};
  padding: 1rem;
  text-align: center;
  margin-bottom: 3rem;

  span {
    font-weight: 700;
  }

  @media (min-width: 1023px) {
    font-weight: 400;
    font-size: ${theme.typography.heading.heading4.fontSize};
    line-height: ${theme.typography.heading.heading4.lineHeight};
  }
`;

export const Wrapper = styled.section`
  max-width: 767px;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const TitleBox = styled.h2`
  color: ${theme.colors.primary.p500};
  text-align: left;
  margin-bottom: 1rem;
  margin-left: 1rem;

  @media (min-width: 1023px) {
    margin-top: 2rem;
    font-weight: 700;
    font-size: ${theme.typography.heading.heading4.fontSize};
    line-height: ${theme.typography.heading.heading4.lineHeight};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.875rem 1.5rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  max-width: 362px;
  width: 362px;
  background: ${theme.colors.secondary.s30};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

export const TitleCard = styled.p`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: ${theme.typography.heading.heading5.fontSize};
  line-height: ${theme.typography.heading.heading5.lineHeight};
  color: ${theme.colors.primary.p800};
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

export const Button = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1.5rem;
  background: ${theme.colors.primary.p500};
  border-radius: 16px;
  font-weight: 700;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.white};

  &:hover {
    background: ${darken(0.1, "#0D4A4E")};
  }
`;
