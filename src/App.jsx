import './App.css'

import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'

const App = () => {

  return (
    <div className="min-h-screen theme-light">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
