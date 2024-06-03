import styled from 'styled-components';

export const InputError = styled.p`
  color: red;
  font-size: x-small;
  font-weight: 500;
  margin-left: 0.19rem;
  word-wrap: break-word;
  max-width: 12rem;
`;

export const InputRegister = styled.input`
  height: 2.2rem;
  width: 13rem;
  border-radius: 1rem;
  background-color: transparent;
  border: 1px solid black;
  padding-left: 1rem;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem 0;
`;
