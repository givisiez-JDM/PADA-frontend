import styled from "styled-components";

export const HeadDiv = styled.header`
  padding: 1rem 0;
  background-color: ${props => props.theme.colors.variant2};
  color: ${props => props.theme.colors.white};
  width: 100%;
  height: 130px;
  border-radius: 0 0 1rem 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;
`;
