import { motion } from 'framer-motion'
import { Heart, Video } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { fadeIn, fadeInDown, fadeInUp, scaleFade, staggerContainer } from '../../animation/animation'
import arrowImg from '../../assets/images/arrow.png'
import flagImg from '../../assets/images/flag.png'
import heroImg from '../../assets/images/heroImg.png'

const HeroSection = () => {
  const { i18n, t } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <motion.section
      className={`w-full bg-[#fff8f4] px-4 sm:px-6 lg:px-11 xl:px-14 ${
        isRtl ? 'pb-8 pt-8 lg:pb-8 lg:pt-4' : 'pb-9 pt-8 lg:pb-10 lg:pt-3'
      }`}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`relative grid items-start gap-8 ${
            isRtl
              ? 'lg:grid-cols-[310px_minmax(0,620px)] lg:gap-[132px] xl:grid-cols-[320px_minmax(0,620px)] xl:gap-[150px]'
              : 'lg:grid-cols-[410px_minmax(0,1fr)] lg:gap-[194px] xl:grid-cols-[410px_minmax(0,1fr)] xl:gap-[210px]'
          }`}
        >
          <motion.div className="min-w-0" variants={staggerContainer}>
            <motion.div
              className={`flex items-center gap-2 min-[420px]:gap-3 sm:gap-4 ${
                isRtl ? 'mb-5 lg:justify-start' : 'mb-7'
              }`}
              variants={fadeInDown}
            >
              <span
                className={`inline-flex shrink-0 items-center rounded-full border border-[#087546] bg-[#0968390D] font-bold text-[#087546] ${
                  isRtl
                    ? 'h-7 gap-1.5 px-3 text-[10px] sm:h-8 sm:text-[11px]'
                    : 'h-8 gap-1.5 px-2.5 text-[11px] min-[420px]:h-9 min-[420px]:px-3 min-[420px]:text-[13px] sm:h-10 sm:gap-2 sm:px-4 sm:text-[15px]'
                }`}
              >
                <img src={flagImg} alt="" className={isRtl ? 'size-3' : 'size-3.5 sm:size-4'} />
                {t('home.hero.badges.saudiProduct')}
              </span>
              <span
                className={`inline-flex shrink-0 items-center rounded-full border border-[#087546] bg-[#0968390D] font-bold text-[#087546] ${
                  isRtl
                    ? 'h-7 gap-1.5 px-3 text-[10px] sm:h-8 sm:text-[11px]'
                    : 'h-8 gap-1.5 px-2.5 text-[11px] min-[420px]:h-9 min-[420px]:px-3 min-[420px]:text-[13px] sm:h-10 sm:gap-2 sm:px-4 sm:text-[15px]'
                }`}
              >
                <Heart className={isRtl ? 'size-3' : 'size-3.5 sm:size-4'} strokeWidth={2.4} />
                {t('home.hero.badges.localContent')}
              </span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1
                className={`font-extrabold text-[#1c1b20] ${
                  isRtl
                    ? 'max-w-[290px] text-end text-[44px] leading-[1.14] tracking-normal min-[420px]:text-[50px] lg:text-[52px]'
                    : 'max-w-[410px] text-[48px] leading-[0.98] tracking-[-0.06em] min-[420px]:text-6xl lg:text-[74px]'
                }`}
              >
                {isRtl ? (
                  <>
                    <span dir="ltr">{t('home.hero.titleLines.first')}</span>
                    <br />
                    <span>{t('home.hero.titleLines.second')}</span>
                  </>
                ) : (
                  t('home.hero.title')
                )}
              </h1>
            </motion.div>

            <motion.div
              className={`flex items-center gap-2 min-[420px]:gap-3 sm:gap-4 ${
                isRtl ? 'mt-5' : 'mt-6'
              }`}
              variants={fadeInUp}
            >
              <motion.button
                type="button"
                className={`inline-flex shrink-0 items-center justify-center rounded-lg bg-[#fb5b22] font-bold text-white shadow-[0_10px_18px_rgba(251,91,34,0.22)] transition-colors hover:bg-[#ed4d16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] ${
                  isRtl
                    ? 'h-8 px-5 text-[10px] sm:h-9 sm:px-6 sm:text-[11px]'
                    : 'h-10 px-4 text-[12px] min-[420px]:px-5 min-[420px]:text-[13px] sm:h-12 sm:px-6 sm:text-[15px]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('home.hero.startMeeting')}
              </motion.button>
              <motion.button
                type="button"
                className={`inline-flex shrink-0 items-center justify-center rounded-lg border border-[#bdb7b2] bg-white font-bold text-[#4c4744] transition-colors hover:bg-[#fff3e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] ${
                  isRtl
                    ? 'h-8 px-5 text-[10px] sm:h-9 sm:px-6 sm:text-[11px]'
                    : 'h-10 px-4 text-[12px] min-[420px]:px-5 min-[420px]:text-[13px] sm:h-12 sm:px-6 sm:text-[15px]'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('home.hero.requestTrial')}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.img
            src={arrowImg}
            alt=""
            className={`pointer-events-none absolute hidden lg:block ${
              isRtl
                ? 'start-[430px] top-[82px] w-[117px] scale-x-[-1] xl:start-[300px] xl:top-[58px]'
                : 'start-[370px] top-[78px] w-[145px] xl:start-[370px] xl:top-[78px]'
            }`}
            variants={fadeIn}
          />

          <motion.div
            className={`min-w-0 pt-1 ${isRtl ? 'lg:pt-[128px]' : 'lg:pt-[136px]'}`}
            variants={fadeInUp}
          >
            <div className="flex gap-3 sm:gap-4">
              <div
                className={`mt-1 hidden w-[3px] shrink-0 bg-[#fb5b22] sm:block ${
                  isRtl ? 'h-[76px]' : 'h-[94px]'
                }`}
              />
              <div className="min-w-0">
                <p
                  className={`font-medium text-[#1f1f27] ${
                    isRtl
                      ? 'max-w-[520px] text-[18px] leading-[1.75] tracking-normal sm:text-[20px] lg:text-[20px] xl:text-[20px]'
                      : 'max-w-[610px] text-[28px] leading-[1.16] tracking-[-0.04em] sm:text-[30px] lg:text-[30px] xl:text-[30px]'
                  }`}
                >
                  <span
                    className={`me-2 inline-flex translate-y-[3px] items-center justify-center rounded-[8px] bg-gradient-to-br from-[#e53900] via-[#f24a13] to-[#ff5b22] text-white shadow-[0_8px_15px_rgba(242,74,19,0.22)] ${
                      isRtl ? 'size-6' : 'size-[30px]'
                    }`}
                  >
                    <Video className={isRtl ? 'size-3.5' : 'size-4'} fill="currentColor" strokeWidth={2.2} />
                  </span>
                  {t('home.hero.copy.beforeHighlight')}{' '}
                  <span className="text-[#fb5b22]">{t('home.hero.copy.videoMeetings')}</span>{' '}
                  {t('home.hero.copy.middle')}{' '}
                  <span className="text-[#fb5b22]">{t('home.hero.copy.product')}</span>
                </p>

                <div
                  className={`flex items-center gap-1.5 font-semibold text-[#474747] ${
                    isRtl ? 'mt-4 text-[8px] tracking-normal' : 'mt-8 text-[12px] tracking-[-0.03em]'
                  }`}
                >
                  <span className={`h-[2px] bg-[#fb5b22] ${isRtl ? 'w-[58px]' : 'w-[86px]'}`} />
                  <span
                    className={`shrink-0 rounded-full border-[#fb5b22] bg-[#fff8f4] ${
                      isRtl ? 'size-[7px] border-2' : 'size-[9px] border-[3px]'
                    }`}
                  />
                  <span>{t('home.hero.tagline')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-8 sm:mt-10 lg:mt-12" variants={scaleFade}>
          <motion.img
            src={heroImg}
            alt={t('home.hero.heroImageAlt')}
            className="mx-auto block w-full rounded-[18px]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
