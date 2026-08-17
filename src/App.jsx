import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/chatbot/ChatWidget'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './components/LanguageContext'
import LanguageBar from './components/LanguageBar'

import Home from './pages/Home'
import About from './pages/About'
import Coaching from './pages/Coaching'
import Admission from './pages/Admission'
import Result from './pages/Result'
import Gallery from './pages/Gallery'
import Upsc from './pages/Upsc'
import Mpsc from './pages/Mpsc'
import Banking from './pages/Banking'

import Login from './pages/crm/Login'
import Dashboard from './pages/crm/Dashboard'

import { AuthProvider, useAuth } from './lib/auth'

/* =========================================================
   PROTECTED CRM ROUTE
========================================================= */

function ProtectedCRMRoute({ children }) {
  const { session, loading } = useAuth()

  if (loading) {
    return (
      <div className="crm-auth-loading">
        Loading...
      </div>
    )
  }

  if (!session) {
    return <Login />
  }

  return children
}

/* =========================================================
   PUBLIC WEBSITE
========================================================= */

function PublicWebsite() {
  return (
    <LanguageProvider>

      {/* LANGUAGE BAR */}
      <LanguageBar />

      {/* MAIN NAVBAR */}
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/coaching"
          element={<Coaching />}
        />

        <Route
          path="/upsc"
          element={<Upsc />}
        />

        <Route
          path="/mpsc"
          element={<Mpsc />}
        />

        <Route
          path="/banking"
          element={<Banking />}
        />

        <Route
          path="/admission"
          element={<Admission />}
        />

        <Route
          path="/result"
          element={<Result />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

      </Routes>

      <Footer />

      <ChatWidget />

    </LanguageProvider>
  )
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <BrowserRouter>

      {/* Reset scroll position on route change */}
      <ScrollToTop />

      <AuthProvider>

        <Routes>

          {/* =================================================
              PUBLIC WEBSITE
          ================================================= */}

          <Route
            path="/*"
            element={<PublicWebsite />}
          />


          {/* =================================================
              CRM LOGIN
          ================================================= */}

          <Route
            path="/crm/login"
            element={<Login />}
          />


          {/* =================================================
              CRM DASHBOARD
          ================================================= */}

          <Route
            path="/crm"
            element={
              <ProtectedCRMRoute>
                <Dashboard />
              </ProtectedCRMRoute>
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  )
}