import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ansIcon from '../../assets/images/ans.png'

const faqs = [
  {
    question: 'Where is our data physically stored?',
    answer:
      'Your meeting data is hosted in KSA-aligned infrastructure, keeping storage and access aligned with local business requirements.',
  },
  {
    question: 'How does Liblib Meet handle PDPL compliance?',
    answer:
      'Liblib Meet is designed around mapped privacy controls, documentation, and operational practices that support PDPL-focused procurement reviews.',
  },
  {
    question: 'Can we deploy Liblib Meet on our own private network?',
    answer:
      'Yes. The platform can support private network and on-premise deployment models for organizations with stricter infrastructure policies.',
  },
  {
    question: 'How customizable is the white-label experience?',
    answer:
      'You can customize branding, app identity, and subdomain details so the meeting experience feels native to your organization.',
  },
  {
    question: "What's the maximum meeting size?",
    answer:
      'Meeting capacity depends on your deployment and package, with support available for larger organizational use cases.',
  },
  {
    question: 'How long does deployment take?',
    answer:
      'Deployment timing depends on hosting, branding, compliance, and integration requirements. Most timelines are planned after discovery.',
  },
  {
    question: 'Do you support Arabic for AI features?',
    answer:
      'Yes. Arabic-first workflows and AI features are part of the product experience for local teams.',
  },
  {
    question: 'What does pricing look like for a 1,000+ user organization?',
    answer:
      'Enterprise pricing is scoped based on users, deployment model, support level, and customization requirements.',
  },
]

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="w-full bg-[#fff8f4] px-5 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-[70px] xl:px-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[390px_minmax(0,640px)] lg:justify-center lg:gap-5 xl:grid-cols-[535px_minmax(0,680px)] xl:gap-6">
        <div className="pt-1 lg:pt-5">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="mt-1 flex h-[123px] w-0.5 shrink-0 flex-col items-center bg-[#fb5b22] sm:h-[140px]" />

            <div>
              <h2 className="text-[28px] font-extrabold leading-[1.02] tracking-[-0.045em] text-black min-[420px]:text-[31px] sm:text-[36px] sm:leading-[0.98]">
                <span className="inline-flex items-center gap-2">
                  <img src={ansIcon} alt="" className="size-7 shrink-0 sm:size-8" />
                  <span>Answers for the</span>
                </span>
                <br />
                <span className="text-[#fb5b22]">questions</span>
                <br />
                procurement&apos;s <span className="text-[#fb5b22]">always</span>
                <br />
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[#fb5b22]">asks</span>
                  <span className="h-px w-12 bg-[#fb5b22] min-[420px]:w-[68px]" />
                  <span className="size-1.5 rounded-full border-2 border-[#fb5b22] bg-[#fff8f4]" />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-[18px] border border-[#f0dfd0] bg-white shadow-[0_1px_0_rgba(255,255,255,0.9)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex min-h-[62px] w-full items-center justify-between gap-4 px-4 text-left text-[14px] font-bold leading-snug text-[#1f1d1c] transition-colors hover:bg-[#fffdfb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22] sm:gap-5 sm:px-6 sm:text-[15px]"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-[#68717f] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    strokeWidth={2.2}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#f4e6dc] px-5 pb-5 pt-1 sm:px-6">
                    <p className="max-w-[590px] text-[14px] font-medium leading-6 text-[#625a55]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faqs
