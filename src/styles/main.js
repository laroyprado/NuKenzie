import styled from "styled-components";

export const MainStyled = styled.main`
  margin: 0 16.25rem;
  display: flex;
  gap: 4.125rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0 2rem 0.625rem;
  }
`;
