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

const PATH_TO_PAGE = {
  '/features':   'features',
  '/industries': 'industries',
  '/pricing':    'pricing',
  '/faq':        'faq',
  '/blog':       'blog',
  '/sign-in':    'sign-in',
}

const PAGE_TO_PATH = {
  features:   '/features',
  industries: '/industries',
  pricing:    '/pricing',
  faq:        '/faq',
  blog:       '/blog',
  'sign-in':  '/sign-in',
  home:       '/',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const [showSplash, setShowSplash] = useState(true)
  const navigate  = useNavigate()
  const location  = useLocation()

  const activePage = PATH_TO_PAGE[location.pathname] ?? 'home'
  const isHome     = location.pathname === '/'

  const handleNavigate = (pageId) => {
    const route = PAGE_TO_PATH[pageId]
    if (route) {
      navigate(route)
      return
    }
    // Section scroll (e.g. 'cta', 'how-it-works')
    if (!isHome) {
      navigate('/')
      setTimeout(() => {
        document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(pageId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (showSplash && isHome) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* Sign-in — no shared layout */}
        <Route
          path="/sign-in"
          element={<SignInPage onNavigate={handleNavigate} />}
        />

        {/* Every other page uses MainLayout — FLAT routes, no nesting */}
        <Route
          path="/"
          element={
            <MainLayout activePage={activePage} onNavigate={handleNavigate}>
              <Home onNavigate={handleNavigate} />
            </MainLayout>
          }
        />
        <Route
          path="/features"
          element={
            <MainLayout activePage="features" onNavigate={handleNavigate}>
              <FeaturesPage onNavigate={handleNavigate} />
            </MainLayout>
          }
        />
        <Route
          path="/industries"
          element={
            <MainLayout activePage="industries" onNavigate={handleNavigate}>
              <IndustriesPage onNavigate={handleNavigate} />
            </MainLayout>
          }
        />
        <Route
          path="/pricing"
          element={
            <MainLayout activePage="pricing" onNavigate={handleNavigate}>
              <PricingPage onNavigate={handleNavigate} />
            </MainLayout>
          }
        />
        <Route
          path="/faq"
          element={
            <MainLayout activePage="faq" onNavigate={handleNavigate}>
              <FAQPage onNavigate={handleNavigate} />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout activePage="blog" onNavigate={handleNavigate}>
              <BlogPage onNavigate={handleNavigate} />
            </MainLayout>
          }
        />

        {/* Catch-all → home */}
        <Route
          path="*"
          element={
            <MainLayout activePage="home" onNavigate={handleNavigate}>
              <Home onNavigate={handleNavigate} />
            </MainLayout>
          }
        />

      </Routes>
    </>
  )
}

function App() {
  return <AppInner />
}

export default App
