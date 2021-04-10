import styled from 'styled-components';

const Button = styled.button`
  ${p => `background: ${p.theme.secondaryColor}`};
  ${p => `color: ${p.theme.primaryColor}`};
  text-transform: capitalize;
  border: 2px solid black;
  cursor: pointer;
`;

export default Button;
