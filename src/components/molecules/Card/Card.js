import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Link from '../../../assets/link.svg'


const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({theme,activeColor }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;
const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50px;
  border: 3px solid ${({theme}) => theme.twitter};
  position: absolute;
  right: 25px;
  top: 25px;
`
const StyleLinkButton = styled.a`
  width: 47px;
  display: block;
  height: 47px;
  border-radius: 50px;
  background: white url(${Link}) no-repeat;
  background-size: 50%;
  background-postion: 50%;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Roman</StyledHeading>
      <DateInfo>3 days</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src='https://fwcdn.pl/ppo/31/38/1953138/465972.2.jpg'></StyledAvatar>}
      {cardType === 'article' && <StyleLinkButton href='https://www.youtube.com/'></StyleLinkButton>}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
        repellendus illum
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
   cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

 Card.defaultProps = {
   cardType: 'note',
 };

export default Card;