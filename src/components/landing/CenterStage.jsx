import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import { fadeInUp, revealViewport, scaleFade, staggerContainer } from '../../animation/animation'
import brandedIcon from '../../assets/images/branded.png'
import customIcon from '../../assets/images/custom.png'
import mobileIcon from '../../assets/images/mobile.png'
import rightSideImg from '../../assets/images/rightSide.png'
import visualIcon from '../../assets/images/visual.png'

const features = [
  {
    id: 'subdomains',
    icon: customIcon,
  },
  {
    id: 'waiting-rooms',
    icon: brandedIcon,
  },
  {
    id: 'visual-consistency',
    icon: visualIcon,
  },
  {
    id: 'mobile-apps',
    icon: mobileIcon,
  },
]

const CenterStage = () => {
  const { i18n, t } = useTranslation()
  const translatedFeatureItems = t('home.centerStage.items', { returnObjects: true })
  const translatedFeatures = Array.isArray(translatedFeatureItems) ? translatedFeatureItems : []
  const hoverOffset = i18n.dir() === 'rtl' ? -4 : 4

  return (
    <motion.section
      className="w-full overflow-visible bg-white px-4 py-10 sm:px-6 lg:h-screen lg:min-h-[720px] lg:px-10 lg:py-6 xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-start pt-3 lg:pt-4">
        <motion.div className="mx-auto w-full max-w-[720px] text-center" variants={fadeInUp}>
          <span className="inline-flex h-5 items-center rounded-full border border-[#ffd7c7] bg-[#fff1ea] px-3 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#fb5b22]">
            {t('home.centerStage.eyebrow')}
          </span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.02] tracking-[-0.045em] text-black sm:text-[42px] lg:text-[44px]">
            <Trans
              i18nKey="home.centerStage.title"
              components={{
                highlight: <span className="text-[#fb5b22]" />,
              }}
            />
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[14px] font-medium leading-[1.7] text-[#5f6878]">
            {t('home.centerStage.description')}
          </p>
        </motion.div>

        <div className="mt-2 grid items-center gap-3 sm:gap-5 lg:mt-2 lg:grid-cols-[minmax(420px,480px)_minmax(0,650px)] lg:justify-center lg:gap-12 xl:gap-14">
          <motion.div className="grid gap-4" variants={staggerContainer}>
            {features.map((feature, index) => (
              <motion.article
                key={feature.id}
                className="flex min-h-[84px] items-center gap-4 rounded-[14px] border border-[#f0dfd0] bg-[#fff8f4] px-5 shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:px-6"
                variants={fadeInUp}
                whileHover={{ x: hoverOffset }}
                transition={{ duration: 0.25 }}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#fff0e8]">
                  <img src={feature.icon} alt="" className="max-h-[23px] max-w-[23px]" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[15px] font-extrabold leading-tight text-[#1d1d22]">
                    {translatedFeatures[index]?.title ?? ''}
                  </h3>
                  <p className="mt-1.5 max-w-[280px] text-[12px] font-medium leading-[1.35] text-[#717987]">
                    {translatedFeatures[index]?.description ?? ''}
                  </p>
                </span>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[720px] items-center justify-center lg:max-w-none"
            variants={scaleFade}
          >
            <motion.img
              src={rightSideImg}
              alt={t('home.centerStage.imageAlt')}
              className="mx-auto block h-auto w-full max-w-[430px] object-contain opacity-100  min-[420px]:max-w-[500px] sm:max-w-[620px] lg:h-[557px] lg:w-[654px] lg:max-w-none"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default CenterStage
