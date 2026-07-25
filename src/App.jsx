import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import IndustriesPage from './pages/IndustriesPage'
import PricingPage from './pages/PricingPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import SignInPage from './pages/SignInPage'
import SplashScreen from './components/SplashScreen/SplashScreen'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const getActivePage = () => {
    const path = location.pathname
    if (path === '/features') return 'features'
    if (path === '/industries') return 'industries'
    if (path === '/pricing') return 'pricing'
    if (path === '/faq') return 'faq'
    if (path === '/blog') return 'blog'
    if (path === '/sign-in') return 'sign-in'
    return 'home'
  }

  const handleNavigate = (pageId) => {
    if (pageId === 'features') {
      navigate('/features')
    } else if (pageId === 'industries' || pageId === 'how-it-works') {
      navigate('/industries')
    } else if (pageId === 'pricing') {
      navigate('/pricing')
    } else if (pageId === 'faq') {
      navigate('/faq')
    } else if (pageId === 'blog') {
      navigate('/blog')
    } else if (pageId === 'sign-in') {
      navigate('/sign-in')
    } else if (pageId === 'home') {
      navigate('/')
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const elem = document.getElementById(pageId)
          if (elem) elem.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        const elem = document.getElementById(pageId)
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }
  }

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/sign-in" element={<SignInPage onNavigate={handleNavigate} />} />
        <Route
          path="*"
          element={
            <MainLayout activePage={getActivePage()} onNavigate={handleNavigate}>
              <Routes>
                <Route path="/" element={<Home onNavigate={handleNavigate} />} />
                <Route path="/features" element={<FeaturesPage onNavigate={handleNavigate} />} />
                <Route path="/industries" element={<IndustriesPage onNavigate={handleNavigate} />} />
                <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} />} />
                <Route path="/faq" element={<FAQPage onNavigate={handleNavigate} />} />
                <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} />} />
                <Route path="*" element={<Home onNavigate={handleNavigate} />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </>
  )
}

export default App
  )
}

function App() {
  return <AppInner />
}

export default App
