import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { StyledPageContainer } from './components/styles/PageContainer.styled';
import Projects from './components/Projects';
import FinalWords from './components/FinalWords';

const theme = {
  colors: {
    header: '#d64550',
    body: '#fdfdfd',
    skills: '#0496ff',
    projects: '#2b59c3',
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
        <Skills />
        <Projects />
        <FinalWords />
        <Footer />
      </StyledPageContainer>
    </ThemeProvider>
  );
}

export default App;
