import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 10px;
  color: inherit;
  cursor: pointer;
`;

export const DropdownMenuBody = styled.ul`
  position: absolute;
  top: 20;
  left: 0;
  padding: 0;
  margin: 0;
  width: 8rem;
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
