import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createMicroFERegistration } from 'avail-microfe-base'

const pubSub = () => {
    const subscribers = {}
  
  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return
    }
    subscribers[eventName].forEach((callback) => {
      callback(data)
    })
  }
  
  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = []
    }
    subscribers[eventName].push(callback)
  }
  
  return {
    publish,
    subscribe,
  }
}
createMicroFERegistration({
    id: 'navigation',
    init: (state, containerId, options) => {
        const { history } = options
        const listenerPubSub = pubSub()
        listenerPubSub.subscribe('listener', (msg) => console.log('msg', msg))
        render(
            <BrowserRouter>
                <App history={history} onNavClick={(msg => {
                    listenerPubSub.publish('listener', {
                        type: 'NAVIGATION',
                        payload: msg
                    })
                })} />
            </BrowserRouter>,
            document.getElementById(containerId)
        )
        return {
            registerLayer: (layer) => {
                listenerPubSub.subscribe('listener', (msg) => {
                    layer.emitter(msg)
                })
                return Promise.resolve()
            }
        }
    },
    unmount: (containerId) => {
        unmountComponentAtNode(document.getElementById(containerId))
        return Promise.resolve()
    }
})