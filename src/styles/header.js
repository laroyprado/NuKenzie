import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 88px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  margin-bottom: 2.4375rem;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const ImgStyle = styled.img`
  width: 7.625rem;
  height: 1.2188rem;

  margin-left: 16.3125rem;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
