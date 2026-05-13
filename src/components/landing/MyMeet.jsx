import { Check, X } from 'lucide-react'
import logoImg from '../../assets/images/liblib.png'

const rows = [
  ['Data hosted in KSA', 'check', 'x'],
  ['Your branding and subdomain', 'check', 'x'],
  ['PDPL & NCA controls mapped', 'check', 'x'],
  ['On-premise / private network deployment', 'check', 'x'],
  ['Native Arabic AI features', 'check', 'Limited'],
  ['Local Arabic-speaking support 24/7', 'check', 'x'],
  ['Custom mobile apps under your brand', 'check', 'x'],
  ['Compliance documentation included', 'check', 'Self-service'],
]

const StatusIcon = ({ type, className = '' }) => {
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

  return <span>{type}</span>
}

const MyMeet = () => {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mx-auto max-w-[540px] text-center text-[30px] font-extrabold leading-[1.05] tracking-[-0.045em] text-[#1d1d22] sm:text-[34px] lg:text-[36px]">
          <span className="text-[#fb5b22]">MyMeet Application</span> vs. Other
          <br />
          meeting Application
        </h2>

        <div className="mx-auto mt-9 w-full max-w-7xl overflow-hidden rounded-[16px] border border-[#f0dfd0] bg-white shadow-[0_18px_30px_rgba(56,39,28,0.10)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-[13px] text-[#2d2a28]">
              <thead>
                <tr className="h-[42px] bg-[#fff4ec]">
                  <th className="w-[44.5%] px-5 text-[12px] font-extrabold uppercase tracking-[0.02em] text-[#7d8193]">
                    Feature
                  </th>
                  <th className="w-[28%] border-l-2 border-white bg-[#ffeee4] px-5">
                    <img src={logoImg} alt="Liblib" className="h-auto w-[54px]" />
                  </th>
                  <th className="w-[27.5%] border-l-2 border-white px-3 text-[13px] font-semibold text-[#554d48]">
                    <div className="flex items-center justify-between gap-3">
                      <span>Generic foreign tools</span>
                      <StatusIcon type="x" className="!bg-[#B42318]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feature, myMeet, other], index) => {
                  const outerCellBg = index % 2 === 0 ? 'bg-white' : 'bg-[#fffaf7]'
                  const myMeetCellBg = index % 2 === 0 ? 'bg-[#fff4ef]' : 'bg-[#fff0e8]'

                  return (
                    <tr key={feature} className="h-[50px] border-t-2 border-white">
                      <td className={`${outerCellBg} px-5 font-medium`}>
                        {feature}
                      </td>
                      <td className={`border-l-2 border-white ${myMeetCellBg} px-5`}>
                        <StatusIcon type={myMeet} />
                      </td>
                      <td className={`border-l-2 border-white ${outerCellBg} px-5 font-medium text-[#554d48]`}>
                        <StatusIcon type={other} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyMeet
