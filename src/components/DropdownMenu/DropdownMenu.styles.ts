import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const DropdownMenuBody = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: #334c76;
  list-style: none;
  display: none;

  &{DropdownButton}:hover + &{
    display: block;
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 0.5rem 1rem;
`;
