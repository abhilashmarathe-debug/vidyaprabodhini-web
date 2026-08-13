import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import logo from '../assets/logo1.jpeg'

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Coaching',
    path: '/coaching',
  },
  {
    label: 'Result',
    path: '/result',
  },
  {
    label: 'Gallery',
    path: '/gallery',
  },
]

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container navbar">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="Vidyaprabodhini Academy"
        >
          <img
            src={logo}
            alt="Vidyaprabodhini Academy"
          />
        </Link>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          id="main-navigation"
          className={`desktop-nav ${
            mobileOpen ? 'is-open' : ''
          }`}
          aria-label="Main navigation"
        >

          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* =================================================
              ADMISSION CTA
          ================================================= */}

          <NavLink
            to="/admission"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive
                ? 'nav-action active'
                : 'nav-action'
            }
          >
            Enquire now
          </NavLink>

        </nav>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() =>
            setMobileOpen((value) => !value)
          }
          aria-label={
            mobileOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

      </div>
    </header>
  )
}