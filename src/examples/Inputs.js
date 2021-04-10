import styled from 'styled-components';

export const BasicInput = styled.input.attrs(p => ({
  type: 'text',
  placeholder: 'Enter Value',
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;

export const AwesomeInput = styled.input.attrs(p => ({
  type: p.type || 'number',
  placeholder: p.placeholder || 'Enter Value',
}))`
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
`;
