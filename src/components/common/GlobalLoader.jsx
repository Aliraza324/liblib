import { motion } from 'framer-motion'
import { loaderFade, scaleFade, smoothEase } from '../../animation/animation'
import i18n from '../../i18n'
import logo from '../../assets/images/logo.png'

const GlobalLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff8f4]"
      variants={loaderFade}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        variants={scaleFade}
        initial="hidden"
        animate="visible"
      >
        <img
          src={logo}
          alt={i18n.t('loader.logoAlt', { defaultValue: 'Liblib' })}
          className="h-auto w-24"
        />
        <div className="h-1.5 w-36 overflow-hidden rounded-full bg-[#f4d5c5]">
          <motion.span
            className="block h-full rounded-full bg-[#fb5b22]"
            initial={{ x: '-100%' }}
            animate={{ x: ['-100%', '0%', '100%'] }}
            transition={{
              duration: 1.05,
              ease: smoothEase,
              repeat: Infinity,
              repeatDelay: 0.08,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default GlobalLoader
