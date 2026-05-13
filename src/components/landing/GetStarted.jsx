import { ArrowRight } from 'lucide-react'

const GetStarted = () => {
  return (
    <section className="mt-10 w-full bg-[#e94b18] px-4 py-16 text-white sm:mt-12 sm:px-6 lg:mt-16 lg:px-10 lg:py-[70px] xl:px-14">
      <div className="mx-auto flex w-full max-w-7xl justify-center">
        <div className="w-full max-w-[560px] text-center">
          <span className="inline-flex h-5 items-center rounded-full bg-white/18 px-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white">
            Get Started
          </span>

          <h2 className="mx-auto mt-5 max-w-[520px] text-[34px] font-extrabold leading-[1.14] tracking-[-0.045em] sm:text-[44px]">
            Ready to take control of
            <br />
            your meetings?
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-[14px] font-medium leading-6 text-white/88">
            Book a 15-minute consultation. We&apos;ll walk you through Liblib Meet
            on your own subdomain, with your own logo, before the call ends.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-3 rounded-full bg-white px-6 text-[13px] font-extrabold text-[#e94b18] shadow-[0_10px_22px_rgba(116,35,11,0.14)] transition-colors hover:bg-[#fff5ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a Demo
              <ArrowRight className="size-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/45 px-6 text-[13px] font-extrabold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to Sales
            </button>
          </div>

          <p className="mt-5 text-[11px] font-medium text-white/78">
            No credit card. No commitment. Just answers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
