//import styled from 'styled-components';
import GlobalStyle from '../../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/mainTheme'
//import Card from '../../components/molecules/Card/Card'
import PropTypes from 'prop-types';


const MainTemplate = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}


export default MainTemplate;
