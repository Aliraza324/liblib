import { useState } from 'react'
import { ArrowRight, ChevronDown, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const languages = [
  { value: 'en', label: 'Eng', dir: 'ltr' },
  { value: 'ar', label: '\u0639\u0631\u0628\u064a', dir: 'rtl' },
]

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1])
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setIsLanguageOpen(false)
  }

  const handleLanguageBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsLanguageOpen(false)
    }
  }

  const handleLanguageKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsLanguageOpen(false)
    }
  }

  return (
    <header className="w-full bg-[#fff8f4] px-2 py-4 min-[420px]:px-3 sm:px-6 sm:py-5 lg:px-14">
      <nav className="mx-auto flex min-h-13 w-full max-w-7xl flex-wrap items-center justify-between gap-2 rounded-[16px] border border-[#eadfd8] bg-white px-3 py-2 shadow-[0_1px_1px_rgba(15,23,42,0.05)] min-[420px]:flex-nowrap min-[420px]:gap-3 sm:min-h-[54px] sm:rounded-[18px] sm:px-8">
        <Link
          to="/"
          aria-label="Liblib home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Liblib"
            className="h-auto w-[58px] min-[420px]:w-[64px] sm:w-[72px]"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 min-[420px]:flex-none min-[420px]:gap-2 sm:gap-6">
          <div
            className="relative shrink-0"
            onBlur={handleLanguageBlur}
            onKeyDown={handleLanguageKeyDown}
          >
            <button
              type="button"
              aria-label="Select language"
              aria-haspopup="listbox"
              aria-expanded={isLanguageOpen}
              className="inline-flex h-7 min-w-[68px] items-center justify-center gap-1 rounded-full border border-[#f1e3d8] bg-[#fffaf6] px-2 text-[10px] font-semibold text-[#2b211b] shadow-[0_1px_0_rgba(251,91,34,0.05)] transition-colors hover:bg-[#fff3e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] min-[420px]:min-w-[78px] min-[420px]:gap-1.5 min-[420px]:px-3 sm:text-[11px]"
              onClick={() => setIsLanguageOpen((open) => !open)}
            >
              <Globe2 className="size-3.5 shrink-0" strokeWidth={2.3} />
              <span dir={selectedLanguage.dir}>{selectedLanguage.label}</span>
              <ChevronDown
                className={`size-3 shrink-0 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                strokeWidth={2.4}
              />
            </button>

            {isLanguageOpen && (
              <div
                role="listbox"
                aria-label="Language options"
                className="absolute right-0 top-[calc(100%+8px)] z-10 w-24 overflow-hidden rounded-xl border border-[#f1e3d8] bg-white p-1.5 text-[11px] font-semibold text-[#2b211b] shadow-[0_12px_28px_rgba(65,36,20,0.12)] min-[420px]:w-28"
              >
                {languages.map((language) => {
                  const isSelected = language.value === selectedLanguage.value

                  return (
                    <button
                      key={language.value}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors ${
                        isSelected
                          ? 'bg-[#fff3e8] text-[#fb5b22]'
                          : 'hover:bg-[#fff8f4]'
                      }`}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <span dir={language.dir}>{language.label}</span>
                      {isSelected && (
                        <span className="size-1.5 rounded-full bg-[#fb5b22]" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            to="/start"
            className="inline-flex h-8 min-w-0 shrink items-center justify-center gap-1.5 rounded-full bg-[#fb5b22] px-3 text-[10px] font-bold text-white transition-colors hover:bg-[#ed4d16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] min-[420px]:shrink-0 min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:text-[11px] sm:h-9 sm:px-5 sm:text-xs"
          >
            <span className="whitespace-nowrap">Start a Meeting</span>
            <ArrowRight className="size-3.5 shrink-0 sm:size-4" strokeWidth={2.4} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
