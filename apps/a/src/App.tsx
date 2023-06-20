import { double } from '@example-monorepo/utils'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { API_BASE_URL } from './constants'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}example`)
      .then((res) => res.json())
      .then((json) => setMessage(json.message as string))
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{message}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => double(count))}>
          doubling {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
