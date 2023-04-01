import styled from 'styled-components';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';
const App = styled.h1`
  font-size: 112px;
  color: red;
`;

const Root = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <Button>Close / save</Button>
    <Button secondary>Remove</Button>
  </>
);

export default Root;
