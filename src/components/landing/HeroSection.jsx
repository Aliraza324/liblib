import { motion } from 'framer-motion'
import { Heart, Video } from 'lucide-react'
import { fadeIn, fadeInDown, fadeInUp, scaleFade, staggerContainer } from '../../animation/animation'
import arrowImg from '../../assets/images/arrow.png'
import flagImg from '../../assets/images/flag.png'
import heroImg from '../../assets/images/heroImg.png'

const HeroSection = () => {
  return (
    <motion.section
      className="w-full bg-[#fff8f4] px-4 pb-9 pt-8 sm:px-6 lg:px-11 lg:pb-10 lg:pt-3 xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid items-start gap-8 lg:grid-cols-[410px_minmax(0,1fr)] lg:gap-[194px] xl:grid-cols-[410px_minmax(0,1fr)] xl:gap-[210px]">
          <motion.div className="min-w-0" variants={staggerContainer}>
            <motion.div className="mb-7 flex flex-wrap items-center gap-4" variants={fadeInDown}>
              <span className="inline-flex h-10 items-center gap-2 rounded-full border border-[#087546] bg-[#0968390D] px-4 text-[15px] font-bold text-[#087546]">
                <img src={flagImg} alt="" className="size-4" />
                Saudi Product
              </span>
              <span className="inline-flex h-10 items-center gap-2 rounded-full border border-[#087546] bg-[#0968390D] px-4 text-[15px] font-bold text-[#087546]">
                <Heart className="size-4" strokeWidth={2.4} />
                Local Content Support
              </span>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h1 className="max-w-[410px] text-[48px] font-extrabold leading-[0.98] tracking-[-0.06em] text-[#1c1b20] min-[420px]:text-6xl lg:text-[74px]">
                MyMeet Application
              </h1>
            </motion.div>

            <motion.div className="mt-6 flex flex-wrap gap-4" variants={fadeInUp}>
              <motion.button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#fb5b22] px-6 text-[15px] font-bold text-white shadow-[0_10px_18px_rgba(251,91,34,0.22)] transition-colors hover:bg-[#ed4d16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start A Meeting
              </motion.button>
              <motion.button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#bdb7b2] bg-white px-6 text-[15px] font-bold text-[#4c4744] transition-colors hover:bg-[#fff3e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Request App Trial
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.img
            src={arrowImg}
            alt=""
            className="pointer-events-none absolute left-[370px] top-[78px] hidden w-[145px] lg:block xl:left-[370px] xl:top-[78px]"
            variants={fadeIn}
          />

          <motion.div className="min-w-0 pt-1 lg:pt-[136px]" variants={fadeInUp}>
            <div className="flex gap-3 sm:gap-4">
              <div className="mt-1 hidden h-[94px] w-[3px] shrink-0 bg-[#fb5b22] sm:block" />
              <div className="min-w-0">
                <p className="max-w-[610px] text-[28px] font-medium leading-[1.16] tracking-[-0.04em] text-[#1f1f27] sm:text-[30px] lg:text-[30px] xl:text-[30px]">
                  <span className="mr-2 inline-flex size-[30px] translate-y-[3px] items-center justify-center rounded-[8px] bg-gradient-to-br from-[#e53900] via-[#f24a13] to-[#ff5b22] text-white shadow-[0_8px_15px_rgba(242,74,19,0.22)]">
                    <Video className="size-4" fill="currentColor" strokeWidth={2.2} />
                  </span>
                  Run your online{' '}
                  <span className="text-[#fb5b22]">video meetings</span> with your
                  internal teams or clients, through{' '}
                  <span className="text-[#fb5b22]">My Meet Application</span>
                </p>

                <div className="mt-8 flex items-center gap-1.5 text-[12px] font-semibold tracking-[-0.03em] text-[#474747]">
                  <span className="h-[2px] w-[86px] bg-[#fb5b22]" />
                  <span className="size-[9px] shrink-0 rounded-full border-[3px] border-[#fb5b22] bg-[#fff8f4]" />
                  <span>Seamless , Secure , Collaborative</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-8 sm:mt-10 lg:mt-12" variants={scaleFade}>
          <motion.img
            src={heroImg}
            alt="MyMeet video meeting interface"
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
