import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menupage1 from './Menupage1'
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Menupage1/>
    </>
  )
}

export default App