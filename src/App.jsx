import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='mytitle'>Hello world I'm Heare</h1>
      <About />
    </>
  )
}

export default App
