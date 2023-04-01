import styled, {css} from 'styled-components';

const Button = styled.button`
  background-color: #ffd82b;
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  ${({secondary}) => (
    secondary && css`
    background-color: #e6e6e6;
    width: 110px;
    height: 30px;
    font-size: 16px;
    `
  )}
`;

export default Button;
