import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './Pages/Home';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
