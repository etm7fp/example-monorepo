import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

/** @see https://github.com/mswjs/msw/discussions/712#discussioncomment-1080752 */
async function prepare(): Promise<void> {
  if (import.meta.env.DEV) {
    const { worker } = await import('@example-monorepo/mocks/browser')
    worker.start()
  }
}

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
