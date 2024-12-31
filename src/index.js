import React from 'react';
import ReactDOM from 'react-dom';
import '../src/code/css/index.css';
import App from './App';
import reportWebVitals from './Vitals/reportWebVitals';
import { sendToVercelAnalytics } from './Vitals/vitals';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
