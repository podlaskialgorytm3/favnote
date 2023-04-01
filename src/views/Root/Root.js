import styled from 'styled-components';
import Button from '../../components/Button/Button';

const App = styled.h1`
  font-size: 112px;
  color: red;
`;

const Root = () => (
  <>
    <Button>Close / save</Button>
    <Button secondary>Remove</Button>
  </>
);

export default Root;
