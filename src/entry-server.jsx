import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';

import { Router } from './router';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter >
        <Router/>
      </StaticRouter>
    </React.StrictMode>
  )
  return { html }
}
