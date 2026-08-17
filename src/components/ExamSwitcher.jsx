import { NavLink } from 'react-router-dom'
import { Layers } from 'lucide-react'
import { useLanguage } from './LanguageContext.jsx'

export default function ExamSwitcher({ current }) {
  const { language } = useLanguage()
  const isMarathi = language === 'mr'

  const exams = [
    {
      id: 'upsc',
      path: '/upsc',
      label: isMarathi ? 'UPSC नागरी सेवा' : 'UPSC Civil Services',
    },
    {
      id: 'mpsc',
      path: '/mpsc',
      label: isMarathi ? 'MPSC राज्यसेवा व संयुक्त' : 'MPSC Rajyaseva & Combined',
    },
    {
      id: 'banking',
      path: '/banking',
      label: isMarathi ? 'Banking (IBPS / SBI)' : 'Banking (IBPS / SBI)',
    },
  ]

  return (
    <div className="exam-switcher-bar">
      <div className="container exam-switcher-inner">
        <div className="exam-switcher-label">
          <Layers size={14} />
          <span>{isMarathi ? 'इतर अभ्यासक्रम पहा:' : 'Switch Program:'}</span>
        </div>

        <div className="exam-switcher-pills">
          {exams.map((exam) => (
            <NavLink
              key={exam.id}
              to={exam.path}
              className={`exam-pill ${current === exam.id ? 'active' : ''}`}
            >
              {exam.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}