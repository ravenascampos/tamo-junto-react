import styled from "styled-components";
import { theme } from "../../../../styles/theme";
import { darken } from "polished";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 400;
      font-size: ${theme.typography.body.normalText.fontSize};
      line-height: ${theme.typography.body.normalText.lineHeight};
      color: ${theme.colors.neutral.n600};
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.n600};
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
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

  @media (min-width: 1023px) {
    width: 30rem;
  }
`;

export const Textarea = styled.textarea`
  width: auto;
  resize: none;
  height: 16.5rem;
  padding: 1rem 1.5rem;
  background: ${theme.colors.neutral.white};
  border: 1px solid ${theme.colors.neutral.n60};
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

export const Error = styled.span`
  font-size: ${theme.typography.body.smallText.fontSize};
  line-height: ${theme.typography.body.smallText.lineHeight};
  color: ${theme.colors.state.error};
  font-weight: 700;
`;

export const Button = styled.button`
  margin-top: 3rem;
  padding: 1rem 5rem;
  background: ${theme.colors.primary.p500};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  font-weight: 700;
  font-size: ${theme.typography.body.normalText.fontSize};
  line-height: ${theme.typography.body.normalText.lineHeight};
  color: ${theme.colors.neutral.white};

  &:hover {
    background: ${darken(0.1, "#0D4A4E")};
  }
`;
