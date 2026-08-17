import { useLanguage } from './LanguageContext'

export default function LanguageBar() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="language-bar">

      <div className="container language-bar-inner">

        <div className="language-bar-spacer" />

        <div className="language-switcher">

          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>

          <span className="language-divider">
            /
          </span>

          <button
            type="button"
            className={language === 'mr' ? 'active' : ''}
            onClick={() => setLanguage('mr')}
          >
            मर
          </button>

        </div>

      </div>

    </div>
  )
}