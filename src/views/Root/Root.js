//import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme'
import Card from '../../components/molecules/Card/Card'


const Root = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>
      <>
      <Card cardType='note'></Card>
      <Card cardType='twitter'></Card>
      <Card cardType='article'></Card>
      </>
    </ThemeProvider>
  </>
);

export default Root;
