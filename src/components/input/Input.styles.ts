import styled from 'styled-components';

export const InputError = styled.p`
  color: red;
  font-size: x-small;
  font-weight: 500;
  margin-left: 0.19rem;
  word-wrap: break-word;
  max-width: 12rem;
`;

export const InputLogin = styled.input`
  height: 2.2rem;
  width: 18rem;
  height: 2.5rem;
  border-radius: 2rem;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.variant1};
  outline: none;
  padding: 0 2.5rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.variant2};

  ::placeholder {
    color: ${props => props.theme.colors.variant2};
    font-weight: 700;
    text-align: center;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem 0;
`;
