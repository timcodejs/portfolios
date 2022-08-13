import Main from './pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pdf from './pages/pdf';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyled />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/resume' element={<Pdf />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

const GlobalStyled = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;
