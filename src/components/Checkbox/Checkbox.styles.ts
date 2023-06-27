import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid #334c76;
  background: ${(props) => (props.checked ? "#334c76" : "")};
  border-radius: 3px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
`;
