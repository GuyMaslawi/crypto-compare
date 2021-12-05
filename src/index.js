import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./GlobalStyle";
import App from "./App";
import { store } from './store/Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <GlobalStyle />
          <Provider store={store}>
            <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
