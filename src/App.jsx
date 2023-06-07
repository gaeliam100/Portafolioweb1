import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Components/Navside/navside'
import Home from './Components/Home/Home'
import About from './Components/about/about'
import Resume from './Components/Resume/resume'
import Portafolio from './Components/portafolio/portafolio'
import Contact from './Components/Contacto/contacto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar/>
<main className='main'>
<Home/>
<About/>
<Resume/>
<Portafolio/>
<Contact/>
</main>
    </>
  )
}

export default App
