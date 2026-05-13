import appImg from '../../assets/images/app.png'
import complaintImg from '../../assets/images/complaint.png'
import developImg from '../../assets/images/develop.png'
import noInternetImg from '../../assets/images/noInternet.jpg'

const cards = [
  {
    image: noInternetImg,
    badge: 'OFFLINE CAPABILITY',
    title: (
      <>
        No
        <br />
        Internet?
        <br />
        <span className="text-[#fb5b22]">No</span> Problem.
      </>
    ),
    className: 'lg:col-start-2',
    imageClassName: 'object-[center_42%]',
  },
  {
    image: appImg,
    title: (
      <>
        Your app in
        <br />
        your visual
        <br />
        <span className="text-[#fb5b22]">identity</span>
      </>
    ),
    description: (
      <>
        Make it yours with Custom
        <br />
        Branding
      </>
    ),
    className: 'lg:col-start-3',
    imageClassName: 'object-[55%_center]',
  },
  {
    image: developImg,
    badge: 'PRIVATE NETWORK',
    title: (
      <>
        Can be deployed on <span className="text-[#fb5b22]">your private</span>
        <br />
        network
      </>
    ),
    className: 'lg:col-span-2',
    imageClassName: 'object-[center_42%]',
    wide: true,
  },
  {
    image: complaintImg,
    title: (
      <>
        Compliant
        <br />
        Personal <span className="text-[#fb5b22]">Data</span>
        <br />
        <span className="text-[#fb5b22]">Protection</span>
        <br />
        Law
      </>
    ),
    description: (
      <>
        View real-world examples
        <br />
        specific to your engineering
        <br />
        discipline.
      </>
    ),
    className: 'lg:col-start-3',
    imageClassName: 'object-[52%_center]',
  },
]

const WhyChoose = () => {
  return (
    <section className="w-full bg-[#fff8f4] px-4 py-8 sm:px-6 lg:px-10 lg:py-9 xl:px-14">
      <div className="mx-auto grid w-full max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-[minmax(235px,0.88fr)_minmax(270px,1fr)_minmax(270px,1fr)] lg:grid-rows-[306px_306px] lg:gap-x-6 lg:gap-y-6">
        <div className="flex min-h-[244px] flex-col justify-center pl-3 pr-4 sm:col-span-2 lg:col-span-1 lg:min-h-0 lg:justify-start lg:pl-0 lg:pt-9 xl:pl-1">
          <div className="flex items-start gap-3 xl:gap-4">
            <span className="mt-0.5 flex h-[153px] w-0.5 shrink-0 flex-col items-center bg-[#fb5b22]">
              <span className="mt-auto size-2 translate-y-1 rounded-full border-2 border-[#fb5b22] bg-[#fff8f4]" />
            </span>
            <div>
              <h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#1b1b22] xl:text-[38px]">
                Why
                <br />
                ChooseThis
                <br />
                MyMeet
                <br />
                Application
              </h2>
              <p className="mt-4 max-w-[205px] text-[16px] leading-[1.02] tracking-[-0.03em] text-[#1e1f25] xl:text-[17px]">
                What makes your <span className="text-[#fb5b22]">meetings</span>
                <br />
                app stand out
              </p>
            </div>
          </div>
        </div>

        {cards.map((card) => (
          <article
            key={`${card.badge || ''}${card.className}`}
            className={`relative min-h-[264px] overflow-hidden rounded-[16px] bg-[#17120f] lg:min-h-0 ${card.className}`}
          >
            <img
              src={card.image}
              alt=""
              className={`h-full w-full object-cover ${card.imageClassName}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/28 to-black/22" />

            {card.badge && (
              <span className="absolute left-[18px] top-[26px] rounded-[4px] bg-[#d87c55] px-2 py-1 text-[7px] font-black leading-none tracking-[0.08em] text-white lg:left-6">
                {card.badge}
              </span>
            )}

            <div
              className={`absolute inset-x-0 bottom-0 px-[22px] pb-6 text-white lg:pb-7 ${
                card.wide ? 'lg:px-10' : 'lg:px-7'
              }`}
            >
              <h3
                className={`font-extrabold leading-[0.98] tracking-[-0.05em] ${
                  card.wide ? 'text-[28px] xl:text-[32px]' : 'text-[28px] xl:text-[32px]'
                }`}
              >
                {card.title}
              </h3>
              {card.description && (
                <p className="mt-8 text-[16px] font-medium leading-[0.9] tracking-[-0.04em] text-white xl:text-[17px]">
                  {card.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
