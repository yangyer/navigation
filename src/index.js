import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createMicrofrontendRegistration } from 'avail-microfe-base'

createMicrofrontendRegistration({
    id: 'navigation',
    init: (containerId, options) => {
        const { history, publish } = options
        let counter = 0
        render(
          <BrowserRouter>
              <App history={history} onNavClick={(msg) => publish('navigation', `${msg}${counter++}`)} />
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