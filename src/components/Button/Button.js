import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({secondary}) => secondary ? '#e6e6e6' : '#ffd82b'};
  width: ${({secondary}) => secondary ? '110px' : '220px'};
  height: ${({secondary}) => secondary ? '30px' : '47px'};
  border: none;
  border-radius: 50px;
  font-size: ${({secondary}) => secondary ? '10px' : '16px'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
`;

export default Button;
