import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

render(
  <div>
    <Router history={history}>
      <Route path='/' component={App} />
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
