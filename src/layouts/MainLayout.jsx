import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function MainLayout({ children, activePage, onNavigate }) {
  return (
    <div className="site-shell">
      <Navbar activePage={activePage} onNavigate={onNavigate} />
      <main>{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  )
}

export default MainLayout
