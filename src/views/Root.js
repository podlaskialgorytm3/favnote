//import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/mainTheme'
import Card from '../components/molecules/Card/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Note from './Note';
import Twitter from './Twitter';
import Article from './Article';
import Sidebar from '../components/organisms/Sidebar';


const Root = () => (
  <>
    <GlobalStyle></GlobalStyle>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Sidebar></Sidebar>
          <Routes>
            <Route exact path='/' Component={Note} />
            <Route path='/twitters' Component={Twitter} />
            <Route path='/articles' Component={Article} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default Root;
