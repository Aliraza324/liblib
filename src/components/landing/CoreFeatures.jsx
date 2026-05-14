import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { fadeInUp, revealViewport, scaleFade, staggerContainer } from '../../animation/animation'
import cameraIcon from '../../assets/images/camera.png'
import chatIcon from '../../assets/images/chat.png'
import coreFeatureImg from '../../assets/images/coreFeature.png'
import encryptionIcon from '../../assets/images/encryption.png'
import localSupportIcon from '../../assets/images/localSupport.png'
import meetingIcon from '../../assets/images/meeting.png'
import screenIcon from '../../assets/images/screen.png'
import smartIcon from '../../assets/images/smart.png'
import summaryIcon from '../../assets/images/summary.png'
import supportIcon from '../../assets/images/support.png'
import virtualIcon from '../../assets/images/virtual.png'
import wifiIcon from '../../assets/images/wifi.png'

const features = [
  {
    id: 'video',
    icon: cameraIcon,
    iconBg: 'bg-[#ffe8df]',
  },
  {
    id: 'assistant',
    icon: virtualIcon,
    iconBg: 'bg-[#ebe3ff]',
  },
  {
    id: 'chat',
    icon: chatIcon,
    iconBg: 'bg-[#dffbea]',
  },
  {
    id: 'recording',
    icon: meetingIcon,
    iconBg: 'bg-[#ffe7eb]',
  },
  {
    id: 'summary',
    icon: summaryIcon,
    iconBg: 'bg-[#ffe8dc]',
  },
  {
    id: 'screen',
    icon: screenIcon,
    iconBg: 'bg-[#eae2ff]',
  },
  {
    id: 'quality',
    icon: wifiIcon,
    iconBg: 'bg-[#ddf9ed]',
  },
  {
    id: 'attendees',
    icon: supportIcon,
    iconBg: 'bg-[#ffe4d9]',
  },
  {
    id: 'blur',
    icon: smartIcon,
    iconBg: 'bg-[#dff9ed]',
  },
  {
    id: 'encryption',
    icon: encryptionIcon,
    iconBg: 'bg-[#f1eeee]',
  },
  {
    id: 'support',
    icon: localSupportIcon,
    iconBg: 'bg-[#ffe3d9]',
  },
]

const CoreFeatures = () => {
  const { t } = useTranslation()
  const translatedFeatureLabels = t('home.coreFeatures.items', { returnObjects: true })
  const featureLabels = Array.isArray(translatedFeatureLabels) ? translatedFeatureLabels : []

  return (
    <motion.section
      className="w-full bg-white px-4 py-9 sm:px-6 lg:px-10 xl:px-11"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-5 lg:grid-cols-[minmax(390px,535px)_minmax(560px,1fr)]">
        <motion.div
          className="min-h-[260px] overflow-hidden rounded-[9px] sm:min-h-[340px] lg:min-h-[405px]"
          variants={scaleFade}
        >
          <motion.img
            src={coreFeatureImg}
            alt={t('home.coreFeatures.imageAlt')}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        <motion.div
          className="flex min-h-[405px] flex-col rounded-[16px] border border-[#dedbd8] bg-white px-3 py-7 sm:px-5 lg:px-3 xl:px-4"
          variants={fadeInUp}
        >
          <motion.div
            className="mb-6 flex flex-wrap items-center gap-3 ps-1 sm:flex-nowrap sm:gap-4"
            variants={fadeInUp}
          >
            <span className="h-7 w-1 shrink-0 bg-[#fb5b22]" />
            <h2 className="shrink-0 text-[28px] font-extrabold leading-none tracking-[-0.04em] text-[#17171f] sm:text-[30px]">
              {t('home.coreFeatures.title.prefix')}{' '}
              <span className="text-[#fb5b22]">{t('home.coreFeatures.title.highlight')}</span>{' '}
              {t('home.coreFeatures.title.suffix')}
            </h2>
            <span className="hidden items-center gap-1 sm:flex">
              <span className="h-0.5 w-20 bg-[#fb5b22] lg:w-16 xl:w-17" />
              <span className="size-2 shrink-0 rounded-full border-2 border-[#fb5b22] bg-white" />
            </span>
          </motion.div>

          <motion.div
            className="grid flex-1 grid-cols-2 content-start gap-2 sm:gap-2.5 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="flex min-h-16 items-center gap-2 rounded-[17px] border border-[#f2dfd1] bg-[#fff7f0] px-2.5 text-[12px] font-bold leading-tight text-[#111116] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] min-[420px]:gap-3 min-[420px]:px-3.5 min-[420px]:text-[15px]"
                variants={fadeInUp}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full min-[420px]:size-9 ${feature.iconBg}`}
                >
                  <img src={feature.icon} alt="" className="max-h-6 max-w-6" />
                </span>
                <span className="min-w-0">{featureLabels[index] ?? ''}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CoreFeatures
