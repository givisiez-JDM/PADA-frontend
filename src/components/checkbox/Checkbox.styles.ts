import styled from "styled-components";
import check from "../../assets/checkbox.svg";

export const ContainerCheckbox = styled.div`
  .checkbox {
    display: none;
  }

  .checkbox + label:before {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    background: ${(props) => props.theme.colors.buttonOff};
  }

  .checkbox:checked + label:before {
    background-image: url(${check});
    background-position: center;
  }
`;
