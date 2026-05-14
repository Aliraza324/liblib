import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { fadeInUp, revealViewport, smoothEase, staggerContainer } from '../../animation/animation'
import ansIcon from '../../assets/images/ans.png'

const Faqs = () => {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = t('home.faqs.items', { returnObjects: true })

  return (
    <motion.section
      className="w-full bg-[#fff8f4] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-[70px] xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[390px_minmax(0,640px)] lg:justify-center lg:gap-5 xl:grid-cols-[535px_minmax(0,680px)] xl:gap-6">
        <motion.div className="pt-1 lg:pt-5" variants={fadeInUp}>
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="mt-1 flex h-[123px] w-0.5 shrink-0 flex-col items-center bg-[#fb5b22] sm:h-[140px]" />

            <div>
              <h2 className="text-[28px] font-extrabold leading-[1.02] tracking-[-0.045em] text-black min-[420px]:text-[31px] sm:text-[36px] sm:leading-[0.98]">
                <Trans
                  i18nKey="home.faqs.heading"
                  components={{
                    br: <br />,
                    highlight: <span className="text-[#fb5b22]" />,
                    icon: (
                      <img
                        src={ansIcon}
                        alt=""
                        className="me-2 inline-block size-7 shrink-0 align-[-0.12em] sm:size-8"
                      />
                    ),
                    line: (
                      <span className="ms-1.5 inline-flex items-center gap-1.5">
                        <span className="h-px w-12 bg-[#fb5b22] min-[420px]:w-[68px]" />
                        <span className="size-1.5 rounded-full border-2 border-[#fb5b22] bg-[#fff8f4]" />
                      </span>
                    ),
                  }}
                />
              </h2>
            </div>
          </div>
        </motion.div>

        <motion.div className="grid w-full gap-3" variants={staggerContainer}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.article
                key={faq.question}
                className="overflow-hidden rounded-[18px] border border-[#f0dfd0] bg-white shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                variants={fadeInUp}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex min-h-[62px] w-full items-center justify-between gap-4 px-4 text-start text-[14px] font-bold leading-snug text-[#1f1d1c] transition-colors hover:bg-[#fffdfb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] sm:gap-5 sm:px-6 sm:text-[15px]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-[#68717f] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2.2}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="border-t border-[#f4e6dc] px-5 pb-5 pt-1 sm:px-6"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: smoothEase }}
                    >
                      <p className="max-w-[590px] text-[14px] font-medium leading-6 text-[#625a55]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Faqs
