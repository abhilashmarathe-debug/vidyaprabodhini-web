import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/chatbot/ChatWidget'

import Home from './pages/Home'
import About from './pages/About'
import Coaching from './pages/Coaching'
import Admission from './pages/Admission'
import Result from './pages/Result'
import Gallery from './pages/Gallery'

import Login from './pages/crm/Login'
import Dashboard from './pages/crm/Dashboard'

import { AuthProvider, useAuth } from './lib/auth'


/* =========================================================
   PROTECTED CRM ROUTE
========================================================= */

function ProtectedCRMRoute({ children }) {

  const {
    session,
    loading,
  } = useAuth()


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
    <>
      <Navbar />

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* COACHING
            Batches + Test Series merged
        */}

        <Route
          path="/coaching"
          element={<Coaching />}
        />


        {/* ADMISSION */}

        <Route
          path="/admission"
          element={<Admission />}
        />


        {/* RESULT */}

        <Route
          path="/result"
          element={<Result />}
        />


        {/* GALLERY */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />

      </Routes>


      <Footer />

      <ChatWidget />
    </>
  )
}


/* =========================================================
   APP
========================================================= */

export default function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* =================================================
              WEBSITE
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