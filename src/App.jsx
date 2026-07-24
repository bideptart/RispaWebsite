import { useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import IndustriesPage from './pages/IndustriesPage'
import PricingPage from './pages/PricingPage'
import SignInPage from './pages/SignInPage'
import SplashScreen from './components/SplashScreen/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [activePage, setActivePage] = useState('home')

  const handleNavigate = (pageId) => {
    if (pageId === 'sign-in') {
      setActivePage('sign-in')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (pageId === 'features') {
      setActivePage('features')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (pageId === 'industries') {
      setActivePage('industries')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (pageId === 'pricing') {
      setActivePage('pricing')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (pageId === 'home') {
      setActivePage('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // If it's a section on home page (e.g. how-it-works, faq, cta)
      setActivePage('home')
      setTimeout(() => {
        const elem = document.getElementById(pageId)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 50)
    }
  }

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  if (activePage === 'sign-in') {
    return <SignInPage onNavigate={handleNavigate} />
  }

  const renderPage = () => {
    switch (activePage) {
      case 'features':
        return <FeaturesPage onNavigate={handleNavigate} />
      case 'industries':
        return <IndustriesPage onNavigate={handleNavigate} />
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />
      default:
        return <Home onNavigate={handleNavigate} />
    }
  }

  return (
    <MainLayout activePage={activePage} onNavigate={handleNavigate}>
      {renderPage()}
    </MainLayout>
  )
}

export default App
