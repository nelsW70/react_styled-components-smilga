import styled from 'styled-components';
import mountain from '../images/mountain.jpeg';

const Hero = styled.div`
  min-height: ${p => (p.big ? '100vh' : '50vh')};
  background-image: url(${p => (p.img ? p.img : mountain)});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Hero;
