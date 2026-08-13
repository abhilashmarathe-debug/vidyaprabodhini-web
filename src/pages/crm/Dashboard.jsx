import {
  Users,
  UserPlus,
  Clock3,
  CheckCircle2,
  LogOut,
} from 'lucide-react'

import { useAuth } from '../../lib/auth'

export default function Dashboard() {

  const {
    profile,
    signOut,
  } = useAuth()


  return (
    <main className="crm-app">

      <header className="crm-topbar">

        <div className="crm-topbar-brand">

          <div className="crm-brand-mark">
            VP
          </div>

          <div>
            <strong>
              Vidyaprabodhini
            </strong>

            <span>
              CRM
            </span>
          </div>

        </div>


        <div className="crm-user">

          <div className="crm-user-info">

            <strong>
              {profile?.full_name ||
                'CRM User'}
            </strong>

            <span>
              {profile?.role ||
                'Counsellor'}
            </span>

          </div>


          <button
            type="button"
            onClick={signOut}
            className="crm-logout"
            title="Sign out"
          >
            <LogOut size={17} />
          </button>

        </div>

      </header>


      <div className="crm-layout">

        <aside className="crm-sidebar">

          <nav>

            <a className="crm-sidebar-link active">
              <Users size={17} />
              Leads
            </a>

            <a className="crm-sidebar-link">
              <Clock3 size={17} />
              Follow-ups
            </a>

            <a className="crm-sidebar-link">
              <UserPlus size={17} />
              Counsellors
            </a>

            <a className="crm-sidebar-link">
              <CheckCircle2 size={17} />
              Admissions
            </a>

          </nav>

        </aside>


        <section className="crm-content">

          <div className="crm-page-heading">

            <div>

              <span className="crm-overline">
                OVERVIEW
              </span>

              <h1>
                Dashboard
              </h1>

              <p>
                Monitor enquiries and admissions
                activity from one place.
              </p>

            </div>

          </div>


          <div className="crm-stat-grid">

            <div className="crm-stat-card">

              <span>
                TOTAL LEADS
              </span>

              <strong>
                0
              </strong>

              <small>
                All enquiries
              </small>

            </div>


            <div className="crm-stat-card">

              <span>
                NEW LEADS
              </span>

              <strong>
                0
              </strong>

              <small>
                Require attention
              </small>

            </div>


            <div className="crm-stat-card">

              <span>
                FOLLOW-UPS
              </span>

              <strong>
                0
              </strong>

              <small>
                Pending follow-ups
              </small>

            </div>


            <div className="crm-stat-card">

              <span>
                CONVERTED
              </span>

              <strong>
                0
              </strong>

              <small>
                Successful admissions
              </small>

            </div>

          </div>


          <div className="crm-empty-state">

            <Users size={24} />

            <h2>
              Your leads will appear here.
            </h2>

            <p>
              Once Vidya starts receiving enquiries,
              they will be available in your CRM.
            </p>

          </div>

        </section>

      </div>

    </main>
  )
}