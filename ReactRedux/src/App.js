import React from 'react';
import MainBody from './Components/MainBody/MainBody';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/App.scss';

function App() {
  return (
    <Router>
      <MainBody />
    </Router>
  );
}
export default App;