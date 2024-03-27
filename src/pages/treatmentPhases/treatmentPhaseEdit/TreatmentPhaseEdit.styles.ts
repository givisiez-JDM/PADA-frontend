import styled from "styled-components";

export const PhaseForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;
  margin: 2rem;
  color: ${(props) => props.theme.colors.variant3};
`;

export const PhaseTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.keyboard};

  &::before {
    content: ".";
    color: ${(props) => props.theme.colors.variant2};
    border-radius: 1rem;
    margin-right: 0.9rem;
    background-color: ${(props) => props.theme.colors.variant2};
  }
`;

export const PhaseField = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.12rem;
  color: ${(props) => props.theme.colors.keyboard};
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const DateInput = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  width: 12rem;
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.variant3};
  color: ${(props) => props.theme.colors.variant3};
`;

export const CheckBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 1rem;
  gap: 0.563rem;
`;

export const PhaseStatus = styled.div`
  width: 8rem;
  font-size: 1.12rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.keyboard};
`;

export const Error = styled.span`
  color: ${(props) => props.theme.colors.error};
`;
