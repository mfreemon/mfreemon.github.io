import { BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Footer from './components/Footer'
import Home from './pages/Home'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    console.log('Button clicked! Current theme:', isDark ? 'dark' : 'light')
    setIsDark(!isDark)
  }

  useEffect(() => {
    console.log('Theme changed to:', isDark ? 'dark' : 'light')
    const root = document.documentElement
    const body = document.body
    const theme = isDark ? 'dark' : 'light'
    
    root.setAttribute('data-theme', theme)
    body.setAttribute('data-theme', theme)
    
    console.log('Set data-theme attribute to:', theme)
    console.log('Root element:', root)
    console.log('Body element:', body)
  }, [isDark])

  return (
    <Router>
      <div className="App">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <main className="main-content">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
