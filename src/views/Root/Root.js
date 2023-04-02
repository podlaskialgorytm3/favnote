//import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme'
import Card from '../../components/molecules/Card/Card'
import { BrowserRouter } from 'react-router-dom';

const Root = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Card cardType='note'></Card>
      <Card cardType='twitter'></Card>
      <Card cardType='article'></Card>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default Root;
