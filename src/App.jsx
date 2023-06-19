import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
