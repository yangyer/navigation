import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createMicrofrontendRegistration } from 'avail-microfe-base'

createMicrofrontendRegistration({
    id: 'navigation',
    init: (containerId, options) => {
        const { routes, history, publish } = options
        render(
          <BrowserRouter>
              <App history={history} routes={routes} onNavClick={(route) => publish('navigation', route)} />
          </BrowserRouter>,
          document.getElementById(containerId)
      )
      return Promise.resolve()
    },
    unmount: (containerId) => {
        unmountComponentAtNode(document.getElementById(containerId))
        return Promise.resolve()
    }
})