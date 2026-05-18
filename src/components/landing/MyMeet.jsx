import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { fadeInUp, revealViewport, scaleFade, staggerContainer } from '../../animation/animation'
import logoImg from '../../assets/images/liblib.png'

const rows = [
  ['data-hosting', 'check', 'x'],
  ['branding', 'check', 'x'],
  ['controls', 'check', 'x'],
  ['private-network', 'check', 'x'],
  ['arabic-ai', 'check', 'limited'],
  ['local-support', 'check', 'x'],
  ['mobile-apps', 'check', 'x'],
  ['documentation', 'check', 'selfService'],
]

const StatusIcon = ({ type, label, className = '' }) => {
  if (type === 'check') {
    return (
      <span className="inline-flex size-3 items-center justify-center rounded-full bg-[#16bf86] text-white">
        <Check className="size-2" strokeWidth={4} />
      </span>
    )
  }

  if (type === 'x') {
    return (
      <span className={`inline-flex size-3 items-center justify-center rounded-full bg-[#ff2f32] text-white ${className}`}>
        <X className="size-2" strokeWidth={4} />
      </span>
    )
  }

  return <span>{label}</span>
}

const MyMeet = () => {
  const { i18n, t } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const translatedRows = t('home.comparison.rows', { returnObjects: true })
  const rowLabels = Array.isArray(translatedRows) ? translatedRows : []

  return (
    <motion.section
      className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10 xl:px-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          className={`mx-auto max-w-[540px] text-center text-[27px] font-extrabold text-[#1d1d22] sm:text-[34px] lg:text-[36px] ${
            isRtl
              ? 'leading-[1.35] tracking-normal'
              : 'leading-[1.16] tracking-[-0.04em] sm:leading-[1.05] sm:tracking-[-0.045em]'
          }`}
          variants={fadeInUp}
        >
          <Trans
            i18nKey="home.comparison.title"
            components={{
              br: <br />,
              highlight: <span className="text-[#fb5b22]" />,
            }}
          />
        </motion.h2>

        <motion.div
          className="mx-auto mt-7 w-full max-w-7xl overflow-hidden rounded-[16px] border border-[#f0dfd0] bg-white shadow-[0_18px_30px_rgba(56,39,28,0.10)] sm:mt-9"
          variants={scaleFade}
        >
          <div className="comparison-table-scroll overflow-x-auto">
            <table
              className={`w-full min-w-[720px] border-collapse text-start text-[13px] text-[#2d2a28] ${
                isRtl ? 'leading-[1.55]' : 'leading-[1.35]'
              }`}
            >
              <thead>
                <tr className="h-[42px] bg-[#fff4ec]">
                  <th className="w-[44.5%] px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.02em] text-[#7d8193]">
                    {t('home.comparison.featureHeader')}
                  </th>
                  <th className="w-[28%] border-s-2 border-white bg-[#ffeee4] px-5 py-3">
                    <img src={logoImg} alt={t('brand.liblib')} className="h-auto w-[54px]" />
                  </th>
                  <th className="w-[27.5%] border-s-2 border-white px-3 py-3 text-[13px] font-semibold text-[#554d48]">
                    <div className="flex items-center justify-between gap-3">
                      <span>{t('home.comparison.genericTools')}</span>
                      <StatusIcon type="x" className="!bg-[#B42318]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([id, myMeet, other], index) => {
                  const outerCellBg = index % 2 === 0 ? 'bg-white' : 'bg-[#fffaf7]'
                  const myMeetCellBg = index % 2 === 0 ? 'bg-[#fff4ef]' : 'bg-[#fff0e8]'

                  return (
                    <tr key={id} className="min-h-[54px] border-t-2 border-white">
                      <td className={`${outerCellBg} px-5 py-3 font-medium`}>
                        {rowLabels[index]}
                      </td>
                      <td className={`border-s-2 border-white ${myMeetCellBg} px-5 py-3`}>
                        <StatusIcon type={myMeet} />
                      </td>
                      <td className={`border-s-2 border-white ${outerCellBg} px-5 py-3 font-medium text-[#554d48]`}>
                        <StatusIcon type={other} label={t(`home.comparison.status.${other}`)} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MyMeet
