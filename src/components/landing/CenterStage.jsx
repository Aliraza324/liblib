import brandedIcon from '../../assets/images/branded.png'
import customIcon from '../../assets/images/custom.png'
import mobileIcon from '../../assets/images/mobile.png'
import rightSideImg from '../../assets/images/rightSide.png'
import visualIcon from '../../assets/images/visual.png'

const features = [
  {
    title: 'Custom Subdomains',
    description: 'meet.yourcompany.sa instead of a generic link',
    icon: customIcon,
  },
  {
    title: 'Branded Waiting Rooms',
    description: 'Greet guests with your logo, message, and music',
    icon: brandedIcon,
  },
  {
    title: 'Visual Consistency',
    description: 'Your colors, typefaces, and logo in every meeting detail',
    icon: visualIcon,
  },
  {
    title: 'Custom Mobile Apps',
    description: 'Ship your own iOS and Android apps under your brand',
    icon: mobileIcon,
  },
]

const CenterStage = () => {
  return (
    <section className="w-full overflow-visible bg-white px-4 py-10 sm:px-6 lg:h-screen lg:min-h-[720px] lg:px-10 lg:py-6 xl:px-14">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-start pt-3 lg:pt-4">
        <div className="mx-auto w-full max-w-[720px] text-center">
          <span className="inline-flex h-5 items-center rounded-full border border-[#ffd7c7] bg-[#fff1ea] px-3 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#fb5b22]">
            White-label customization
          </span>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.02] tracking-[-0.045em] text-black sm:text-[42px] lg:text-[44px]">
            Your brand, <span className="text-[#fb5b22]">center stage.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[14px] font-medium leading-[1.7] text-[#5f6878]">
            Don&apos;t just host a meeting - host an experience that feels unmistakably
            yours. Liblib Meet ships as a fully white-label platform you can shape
            down to the smallest detail.
          </p>
        </div>

        <div className="mt-2 grid items-center gap-3 sm:gap-5 lg:mt-2 lg:grid-cols-[minmax(420px,480px)_minmax(0,650px)] lg:justify-center lg:gap-12 xl:gap-14">
          <div className="grid gap-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="flex min-h-[84px] items-center gap-4 rounded-[14px] border border-[#f0dfd0] bg-[#fff8f4] px-5 shadow-[0_1px_0_rgba(255,255,255,0.9)] sm:px-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[11px] bg-[#fff0e8]">
                  <img src={feature.icon} alt="" className="max-h-[23px] max-w-[23px]" />
                </span>
                <span className="min-w-0">
                  <h3 className="text-[15px] font-extrabold leading-tight text-[#1d1d22]">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 max-w-[280px] text-[12px] font-medium leading-[1.35] text-[#717987]">
                    {feature.description}
                  </p>
                </span>
              </article>
            ))}
          </div>

          <div className="relative mx-auto flex w-full max-w-[720px] items-center justify-center lg:max-w-none">
            <img
              src={rightSideImg}
              alt="White-label meeting interface preview"
              className="mx-auto block h-auto w-full max-w-[430px] object-contain opacity-100  min-[420px]:max-w-[500px] sm:max-w-[620px] lg:h-[557px] lg:w-[654px] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CenterStage
