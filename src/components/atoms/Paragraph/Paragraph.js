import styled from 'styled-components';

const Paragraph = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap');
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  
`;

export default Paragraph;
