import styled, { css } from "styled-components";

const InputsDefaultStyles = css`
  width: 100%;
  height: 3rem;

  font-family: var(--Font-Family2);
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.625rem;

  background-color: var(--Color-Grey-1);

  padding: 0 1.25rem;

  border: none;
`;

export const FormStyled = styled.form`
  width: 355px;
  height: 434px;

  padding: 1.875rem 1.25rem 2.5rem;

  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  ${InputsDefaultStyles}
  margin-top: 9px;
`;

export const StyleSelect = styled.select`
  ${InputsDefaultStyles}
  margin-top: 10px;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  font-family: "Inter";
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #868e96;
  margin-bottom: 0.5rem;
`;

export const TypeValueDiv = styled.div`
  margin-top: 0.5625rem;
  margin-bottom: 26px;
`;

export const ButtonStyled = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  background: #fd377e;
  border: 2px solid #fd377e;
  border-radius: 8px;

  width: 100%;
  height: 48px;
`;
