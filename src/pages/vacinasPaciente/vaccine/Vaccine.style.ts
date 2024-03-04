import styled from "styled-components";

export const VaccineContainer = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.variant2};
  padding: 1rem 0;
`;

export const VaccineDate = styled.div`
  width: 20%;
  border-left: 4px solid;
  padding: 1rem;
  line-height: 1.5rem;

  &.applied {
    border-color: ${(props) => props.theme.colors.vaccine.applied};
  }
  &.late {
    border-color: ${(props) => props.theme.colors.vaccine.late};
  }
  &.not-applied {
    border-color: ${(props) => props.theme.colors.vaccine.notApplied};
  }
  &.schedule {
    border-color: ${(props) => props.theme.colors.vaccine.schedule};
  }
`;

export const VaccineDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const VaccineTitle = styled.h2`
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.keyboard};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
`;

export const VaccineText = styled.p`
  display: none;
  padding: 0.5rem;
  min-height: 2rem;
  color: ${(props) => props.theme.colors.keyboard};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};

  &.active {
    display: block;
  }
`;

export const VaccineButton = styled.button`
  margin: 1rem;
  border: none;
  background: none;
`;
