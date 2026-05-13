import { Heart, Video } from 'lucide-react'
import arrowImg from '../../assets/images/arrow.png'
import flagImg from '../../assets/images/flag.png'
import heroImg from '../../assets/images/heroImg.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-[#fff8f4] px-3 pb-10 pt-2 sm:px-6 lg:px-14 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative grid items-start gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-10">
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-[#0d8f56] bg-[#0968390D] px-3 text-[11px] font-bold text-[#087546]">
                <img src={flagImg} alt="" className="size-3.5" />
                Saudi Product
              </span>
              <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-[#0d8f56] bg-[#0968390D] px-3 text-[11px] font-bold text-[#087546]">
                <Heart className="size-3" strokeWidth={2.4} />
                Local Content Support
              </span>
            </div>

            <div>
              <h1 className="max-w-[430px] text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#1c1b20] min-[420px]:text-5xl sm:text-6xl lg:text-[64px]">
                MyMeet Application
              </h1>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#fb5b22] px-5 text-xs font-bold text-white shadow-[0_10px_18px_rgba(251,91,34,0.22)] transition-colors hover:bg-[#ed4d16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22]"
              >
                Start A Meeting
              </button>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#d6d2cf] bg-white px-5 text-xs font-bold text-[#2d2926] transition-colors hover:bg-[#fff3e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb5b22]"
              >
                Request App Trial
              </button>
            </div>
          </div>

          <img
            src={arrowImg}
            alt=""
            className="pointer-events-none absolute left-[34%] top-16 hidden w-32 lg:block xl:left-[25%] xl:top-[72px] xl:w-36"
          />

          <div className="min-w-0 pt-1 lg:pt-16">
            <div className="flex gap-3">
              <div className="mt-1 hidden h-[118px] w-px shrink-0 bg-[#fb5b22] sm:block" />
              <div className="min-w-0">
                <p className="max-w-[560px] text-[22px] font-medium leading-[1.2] tracking-[-0.02em] text-[#211f24] min-[420px]:text-2xl lg:text-[26px]">
                  <span className="mr-2 inline-flex size-7 translate-y-1 items-center justify-center rounded bg-[#fb5b22] text-white">
                    <Video className="size-4" fill="currentColor" strokeWidth={2.2} />
                  </span>
                  Run your online{' '}
                  <span className="text-[#fb5b22]">video meetings</span> with your
                  internal teams or clients, through{' '}
                  <span className="text-[#fb5b22]">My Meet Application</span>
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold text-[#59524d]">
                  <span className="h-px w-20 bg-[#fb5b22]" />
                  <span className="size-1.5 rounded-full border border-[#fb5b22] bg-[#fff8f4]" />
                  <span>Seamless, Secure, Collaborative</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <img
            src={heroImg}
            alt="MyMeet video meeting interface"
            className="mx-auto block w-full rounded-[18px]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
