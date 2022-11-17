import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import { StyledPageContainer } from './components/styles/PageContainer.styled';
import Projects from './components/Projects';

const theme = {
  colors: {
    header: '#d64550',
    body: '#fdfdfd',
    projects: '#0496ff',
    footer: '#1a1a1a',
    white: '#fdfdfd',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledPageContainer>
        <GlobalStyles />
        <Header />
        <Intro />
        <Projects />
        <Footer />
      </StyledPageContainer>
    </ThemeProvider>
  );
}

export default App;
