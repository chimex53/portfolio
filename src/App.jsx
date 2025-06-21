/**
 * Main application component that serves as the root of the portfolio website.
 * Handles the overall layout and routing structure of the application.
 */
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
// Core components for different sections of the portfolio
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import BackToTop from './components/backToTop/BackToTop'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Home />     
          <About />     
          <Skills />  
          <Portfolio /> 
          <Contact />   
        </main>
        <Footer />
        <BackToTop />  
      </div>
    </Router>
  )
}

export default App
