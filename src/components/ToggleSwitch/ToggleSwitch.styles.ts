import styled from "styled-components";

const COLORS = {
  GRAY: "#adadad",
  BLUE: "#4C7ABB",
};

export default COLORS;

export const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 45px;
  height: 20px;
  background: ${({ checked }) => (checked ? COLORS.GRAY : COLORS.BLUE)};
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "5px" : "calc(55% - 1px)")};
    top: 2px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;
