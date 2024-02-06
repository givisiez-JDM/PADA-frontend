import styled from "styled-components";

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 160px;
  border-radius: 20px;
  box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const MenuItemImg = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px;
`;

export const MenuItemTitle = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
`;

export const MenuItemText = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 0.7rem;
  margin: 10px 5px;
`;
