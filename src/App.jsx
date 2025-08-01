
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <Hero id='home'/>
      <About id='about' />
      <Projects id='projects' />
      <Contact id='contact'/>
      
    </div>
  )
}

export default App