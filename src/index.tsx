import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/index.routes';
import GlobalStyle from './global/globalstyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
