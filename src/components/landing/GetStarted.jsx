import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { fadeInUp, revealViewport, staggerContainer } from '../../animation/animation'

const GetStarted = () => {
  const { t } = useTranslation()

  return (
    <motion.section
      className="mt-10 w-full bg-[#e94b18] px-4 py-16 text-white sm:mt-12 sm:px-6 lg:mt-16 lg:px-10 lg:py-[70px] xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <motion.div className="w-full max-w-[560px] text-center" variants={staggerContainer}>
          <span className="inline-flex h-5 items-center rounded-full bg-white/18 px-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">
            {t('home.getStarted.eyebrow')}
          </span>

          <motion.h2
            className="mx-auto mt-5 max-w-[520px] text-[34px] font-extrabold leading-[1.14] tracking-[-0.045em] sm:text-[44px]"
            variants={fadeInUp}
          >
            <Trans
              i18nKey="home.getStarted.title"
              components={{
                br: <br />,
              }}
            />
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-[520px] text-[14px] font-medium leading-6 text-white/88"
            variants={fadeInUp}
          >
            {t('home.getStarted.description')}
          </motion.p>

          <motion.div
            className="mt-7 flex items-center justify-center gap-2 min-[420px]:gap-3"
            variants={fadeInUp}
          >
            <motion.button
              type="button"
              className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-4 text-[12px] font-extrabold text-[#e94b18] shadow-[0_10px_22px_rgba(116,35,11,0.14)] transition-colors hover:bg-[#fff5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[420px]:px-5 sm:h-11 sm:gap-3 sm:px-6 sm:text-[13px]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('home.getStarted.bookDemo')}
              <ArrowRight className="rtl-flip size-3.5 sm:size-4" strokeWidth={2.5} />
            </motion.button>
            <motion.button
              type="button"
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-white/45 px-4 text-[12px] font-extrabold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[420px]:px-5 sm:h-11 sm:px-6 sm:text-[13px]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('home.getStarted.talkToSales')}
            </motion.button>
          </motion.div>

          <motion.p className="mt-5 text-[11px] font-medium text-white/78" variants={fadeInUp}>
            {t('home.getStarted.note')}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default GetStarted
