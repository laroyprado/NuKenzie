import styled, { css } from "styled-components";

export const HeadlineStyles = css`
  font-family: var(--Font-Family);
  font-weight: bold;
  color: ${({ fontColor }) => fontColor};
`;

export const HeadlineTwoStyles = css`
  font-family: var(--Font-Family);
  font-weight: 300;
  color: ${({ fontColor }) => fontColor};
`;

export const TitleOne = styled.h1`
  ${HeadlineStyles}
  font-size: 2.375rem;
`;

export const TitleTwo = styled.h2`
  ${HeadlineStyles}
  font-size: 1.375rem;
`;

export const TitleThree = styled.h3`
  ${HeadlineStyles}
  font-size: 1rem;
`;

export const TitleFour = styled.h4`
  ${HeadlineTwoStyles}
  font-size: 0.75rem;
`;

export const Headline = styled.h5`
  ${HeadlineTwoStyles}
  font-size: 1rem;
`;

export const Body = styled.h6`
  ${HeadlineTwoStyles}
  font-size: .75rem;
`;
