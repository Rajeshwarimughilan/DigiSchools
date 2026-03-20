import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import CollegePage from './pages/CollegePage'
import DomainsPage from './pages/DomainsPage'
import HomePage from './pages/HomePage'
import ImpactPage from './pages/ImpactPage'
import NotFoundPage from './pages/NotFoundPage'
import PoliciesPage from './pages/PoliciesPage'
import ProductsPage from './pages/ProductsPage'
import RDSolutionsPage from './pages/RDSolutionsPage'
import SchoolPage from './pages/SchoolPage'
import ServicesPage from './pages/ServicesPage'
import SupportPage from './pages/SupportPage'
import TeamPage from './pages/TeamPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="school" element={<SchoolPage />} />
        <Route path="college-innovation" element={<CollegePage />} />
        <Route path="rd-solutions" element={<RDSolutionsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="domains" element={<DomainsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="policies" element={<PoliciesPage />} />
        <Route path="contact" element={<Navigate to="/support" replace />} />
        {/* Legacy URL redirects */}
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="achievements" element={<Navigate to="/impact" replace />} />
        <Route path="rd" element={<Navigate to="/domains" replace />} />
        <Route path="programs" element={<Navigate to="/school" replace />} />
        <Route path="help-center" element={<Navigate to="/support" replace />} />
        <Route path="privacy-policy" element={<Navigate to="/policies" replace />} />
        <Route path="terms-conditions" element={<Navigate to="/policies" replace />} />
        <Route path="refund-policy" element={<Navigate to="/policies" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
