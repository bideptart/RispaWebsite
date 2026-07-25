import { useState } from 'react'
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

// Map URL paths → activePage identifier for navbar highlighting
const PATH_MAP = {
  '/features':   'features',
  '/industries': 'industries',
  '/pricing':    'pricing',
  '/faq':        'faq',
  '/blog':       'blog',
  '/sign-in':    'sign-in',
}

// Map page identifiers → URL paths
const PAGE_ROUTES = {
  features:   '/features',
  industries: '/industries',
  pricing:    '/pricing',
  faq:        '/faq',
  blog:       '/blog',
  'sign-in':  '/sign-in',
  home:       '/',
}

function AppInner() {
  const [showSplash, setShowSplash] = useState(true)
  const navigate   = useNavigate()
  const location   = useLocation()

  const activePage = PATH_MAP[location.pathname] ?? 'home'
  const isHome     = location.pathname === '/'

  // Show splash only when arriving at the home page
  if (showSplash && isHome) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />
  }

  const handleNavigate = (pageId) => {
    const route = PAGE_ROUTES[pageId]
    if (route) {
      navigate(route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Scroll to a section on the home page
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(pageId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 50)
    }
  }

  return (
    <Routes>
      {/* Sign-in has its own shell */}
      <Route
        path="/sign-in"
        element={<SignInPage onNavigate={handleNavigate} />}
      />

      {/* All other pages share the MainLayout shell */}
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
  )
}

function App() {
  return <AppInner />
}

export default App
