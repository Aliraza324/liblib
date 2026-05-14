import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Globe2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { smoothEase } from '../../animation/animation'
import { getLanguageDirection, supportedLanguages } from '../../i18n'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = i18n.resolvedLanguage || i18n.language
  const languageOptions = useMemo(
    () =>
      supportedLanguages.map((language) => ({
        value: language,
        label: t(`language.options.${language}`),
        dir: getLanguageDirection(language),
      })),
    [t],
  )
  const selectedLanguage =
    languageOptions.find((language) => language.value === currentLanguage) ?? languageOptions[0]

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language.value)
    setIsOpen(false)
  }

  const handleLanguageBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false)
    }
  }

  const handleLanguageKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div
      className="relative shrink-0"
      onBlur={handleLanguageBlur}
      onKeyDown={handleLanguageKeyDown}
    >
      <button
        type="button"
        aria-label={t('language.select')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="inline-flex h-7 min-w-[68px] items-center justify-center gap-1 rounded-full border border-[#f1e3d8] bg-[#fffaf6] px-2 text-[10px] font-semibold text-[#2b211b] shadow-[0_1px_0_rgba(251,91,34,0.05)] transition-colors hover:bg-[#fff3e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] min-[420px]:min-w-[78px] min-[420px]:gap-1.5 min-[420px]:px-3 sm:text-[11px]"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Globe2 className="size-3.5 shrink-0" strokeWidth={2.3} />
        <span dir={selectedLanguage.dir}>{selectedLanguage.label}</span>
        <ChevronDown
          className={`size-3 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          strokeWidth={2.4}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="listbox"
            aria-label={t('language.select')}
            className="absolute end-0 top-[calc(100%+8px)] z-10 w-24 overflow-hidden rounded-xl border border-[#f1e3d8] bg-white p-1.5 text-[11px] font-semibold text-[#2b211b] shadow-[0_12px_28px_rgba(65,36,20,0.12)] min-[420px]:w-28"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: smoothEase }}
          >
            {languageOptions.map((language) => {
              const isSelected = language.value === currentLanguage

              return (
                <button
                  key={language.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  aria-label={t('language.switchTo', { language: language.label })}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-start transition-colors ${
                    isSelected ? 'bg-[#fff3e8] text-[#fb5b22]' : 'hover:bg-[#fff8f4]'
                  }`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <span dir={language.dir}>{language.label}</span>
                  {isSelected && <span className="size-1.5 rounded-full bg-[#fb5b22]" />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
