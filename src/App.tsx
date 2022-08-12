import React from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pdf from './pages/pdf';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/resume' element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
