import styled from "styled-components";

export const ItensValue = styled.li`
  margin-top: 0.9375rem;
  height: 87px;
  width: 100%;

  background-color: var(--Color-Grey-1);
  border-radius: 4px;

  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 156px;
  }
`;

export const DivSectionOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DivSectionTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const ContentDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 8px 14px 17px 14px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 1.25rem;
  }
`;

export const FlagDiv = styled.div`
  width: 10px;
  height: 100%;

  color: ${({ fontColor }) => fontColor};
  background: ${({ flagColor }) => flagColor};

  border-radius: 4px 0px 0px 4px;
`;
