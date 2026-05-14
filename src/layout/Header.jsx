import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { fadeInDown } from '../animation/animation'
import LanguageSwitcher from '../components/common/LanguageSwitcher'
import logo from '../assets/images/logo.png'

const Header = () => {
  const { t } = useTranslation()

  return (
    <motion.header
      className="w-full bg-[#fff8f4] px-2 py-4 min-[420px]:px-3 sm:px-6 sm:py-5 lg:px-14"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <motion.nav className="mx-auto flex min-h-13 w-full max-w-7xl flex-wrap items-center justify-between gap-2 rounded-[16px] border border-[#eadfd8] bg-white px-3 py-2 shadow-[0_1px_1px_rgba(15,23,42,0.05)] min-[420px]:flex-nowrap min-[420px]:gap-3 sm:min-h-[54px] sm:rounded-[18px] sm:px-8">
        <Link
          to="/"
          aria-label={t('header.homeAria')}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt={t('brand.liblib')}
            className="h-auto w-[58px] min-[420px]:w-[64px] sm:w-[72px]"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 min-[420px]:flex-none min-[420px]:gap-2 sm:gap-6">
          <LanguageSwitcher />

          <Link
            to="/start"
            className="inline-flex h-8 min-w-0 shrink items-center justify-center gap-1.5 rounded-full bg-[#fb5b22] px-3 text-[10px] font-bold text-white transition-colors hover:bg-[#ed4d16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] min-[420px]:shrink-0 min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:text-[11px] sm:h-9 sm:px-5 sm:text-xs"
          >
            <span className="whitespace-nowrap">{t('header.startMeeting')}</span>
            <ArrowRight className="rtl-flip size-3.5 shrink-0 sm:size-4" strokeWidth={2.4} />
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  )
}

export default Header
