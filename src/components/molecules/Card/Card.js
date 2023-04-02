import React from 'react';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  gird-template-rows: 0.25fr 1fr;
`;



const InnerWrapper = styled.div`
    padding: 17px 30px 30px 30px;
    background-color: ${({yellow,theme}) => (yellow ? theme.primary : 'white')};
    
    ${({flex}) => 
        flex && css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `
        }
`;
const DateInfo = styled(Paragraph)`
    margin: 0 0 5px;
    font-weight: ${({theme}) => theme.bold};
    font-size: ${({theme}) => theme.fontSize.xs};
`
const StyledHeading = styled(Heading)`
    margin: 5px 0 0;
`
const StyledButton = styled(Button)`
    margin: 20px;
`

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
        <StyledHeading>Hello World</StyledHeading>
        <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper>
    <Paragraph>Siemaneczko jest Michał i mam 19 lat. Jestem biedym studentem z Polski.</Paragraph>
    </InnerWrapper>
    <StyledButton secondary>REMOVE</StyledButton>
  </StyledWrapper>
);

export default Card;