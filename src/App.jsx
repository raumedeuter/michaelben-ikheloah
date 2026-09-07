import { useState } from 'react'
import Preloader from './components/Preloader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'



export default function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />
  }

  return (
    <>
      <Nav />
      <main>
        <ScrollToTop />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}