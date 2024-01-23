import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

import { Router } from './router';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <PrimeReactProvider>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode>
)
