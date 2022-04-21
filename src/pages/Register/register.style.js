import styled from "styled-components";
import { theme } from "../../styles/theme";
import { darken } from "polished";
import registerMobile from "../../assets/images/register-bg-mobile.png";
import registerDesktop from "../../assets/images/register-bg.png";

export const Container = styled.main`
  background-image: url(${registerMobile});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: auto 100vh;
  background-position: top right;
  align-items: center;
  height: auto;
  padding-bottom: 2rem;

  @media (min-width: 767px) {
    background-image: url(${registerDesktop});
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: ${theme.typography.body.normalText.fontSize};
    line-height: ${theme.typography.body.normalText.lineHeight};
    color: ${theme.colors.neutral.n600};
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  background: ${theme.colors.neutral.white};
  border: 1px solid ${theme.colors.neutral.n60};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 400;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};
`;

export const InputCep = styled.input`
  padding: 1rem 1.5rem;
  background: ${theme.colors.neutral.white};
  border: 1px solid ${theme.colors.neutral.n60};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 400;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};

  @media (min-width: 767px) {
    width: 10rem;
  }
`;

export const Error = styled.span`
  font-size: ${theme.typography.body.smallText.fontSize};
  line-height: ${theme.typography.body.smallText.lineHeight};
  color: ${theme.colors.state.error};
  font-weight: 700;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 5rem;
  background: ${theme.colors.primary.p500};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 700;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.white};
  margin-top: 4.375rem;

  &:hover {
    background: ${darken(0.1, "#0D4A4E")};
  }

  span {
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: ${theme.typography.body.mediumText.fontSize};
  line-height: ${theme.typography.body.mediumText.lineHeight};
  color: ${theme.colors.primary.p800};
`;
export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const LabelCheckbox = styled.label`
  font-weight: 400;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};

  span {
    font-weight: 700;
  }
`;

export const InputCheckbox = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  width: 1.5rem;
  height: 1.5rem;
  accent-color: ${theme.colors.primary.p500};
  margin-right: 1rem;
`;

export const Select = styled.select`
  padding: 1rem 1.5rem;
  background: ${theme.colors.neutral.white};
  border: 1px solid ${theme.colors.neutral.n60};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 400;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};
`;

export const Option = styled.option`
  background-color: ${theme.colors.neutral.white};
  font-weight: 400;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: ${theme.typography.body.mediumText.fontSize};
  line-height: ${theme.typography.body.mediumText.lineHeight};
  color: ${theme.colors.primary.p800};
  margin-bottom: 1.5rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 6rem 2rem 0;

  @media (min-width: 1023px) {
    padding: 6rem 18rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;
