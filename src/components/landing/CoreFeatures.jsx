import cameraIcon from '../../assets/images/camera.png'
import chatIcon from '../../assets/images/chat.png'
import coreFeatureImg from '../../assets/images/coreFeature.png'
import encryptionIcon from '../../assets/images/encryption.png'
import localSupportIcon from '../../assets/images/localSupport.png'
import meetingIcon from '../../assets/images/meeting.png'
import screenIcon from '../../assets/images/screen.png'
import smartIcon from '../../assets/images/smart.png'
import summaryIcon from '../../assets/images/summary.png'
import supportIcon from '../../assets/images/support.png'
import virtualIcon from '../../assets/images/virtual.png'
import wifiIcon from '../../assets/images/wifi.png'

const features = [
  {
    label: 'HD Video Meeting',
    icon: cameraIcon,
    iconBg: 'bg-[#ffe8df]',
  },
  {
    label: 'Virtual Assistant',
    icon: virtualIcon,
    iconBg: 'bg-[#ebe3ff]',
  },
  {
    label: 'Meeting chat',
    icon: chatIcon,
    iconBg: 'bg-[#dffbea]',
  },
  {
    label: 'Meeting Recording',
    icon: meetingIcon,
    iconBg: 'bg-[#ffe7eb]',
  },
  {
    label: 'AI Meeting Summary',
    icon: summaryIcon,
    iconBg: 'bg-[#ffe8dc]',
  },
  {
    label: 'Screen Share',
    icon: screenIcon,
    iconBg: 'bg-[#eae2ff]',
  },
  {
    label: 'Adaptive Quality',
    icon: wifiIcon,
    iconBg: 'bg-[#ddf9ed]',
  },
  {
    label: '50 Attendee Support',
    icon: supportIcon,
    iconBg: 'bg-[#ffe4d9]',
  },
  {
    label: 'Smart Blur',
    icon: smartIcon,
    iconBg: 'bg-[#dff9ed]',
  },
  {
    label: 'Encryption',
    icon: encryptionIcon,
    iconBg: 'bg-[#f1eeee]',
  },
  {
    label: '24/7 Local Support',
    icon: localSupportIcon,
    iconBg: 'bg-[#ffe3d9]',
  },
]

const CoreFeatures = () => {
  return (
    <section className="w-full bg-white px-4 py-9 sm:px-6 lg:px-10 xl:px-11">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-5 lg:grid-cols-[minmax(390px,535px)_minmax(560px,1fr)]">
        <div className="min-h-[260px] overflow-hidden rounded-[9px] sm:min-h-[340px] lg:min-h-[405px]">
          <img
            src={coreFeatureImg}
            alt="MyMeet online meeting on a laptop"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex min-h-[405px] flex-col rounded-[16px] border border-[#dedbd8] bg-white px-3 py-7 sm:px-5 lg:px-3 xl:px-4">
          <div className="mb-6 flex flex-wrap items-center gap-3 pl-1 sm:flex-nowrap sm:gap-4">
            <span className="h-7 w-1 shrink-0 bg-[#fb5b22]" />
            <h2 className="shrink-0 text-[28px] font-extrabold leading-none tracking-[-0.04em] text-[#17171f] sm:text-[30px]">
              Our <span className="text-[#fb5b22]">Core</span> Features
            </h2>
            <span className="hidden items-center gap-1 sm:flex">
              <span className="h-0.5 w-20 bg-[#fb5b22] lg:w-16 xl:w-17" />
              <span className="size-2 shrink-0 rounded-full border-2 border-[#fb5b22] bg-white" />
            </span>
          </div>

          <div className="grid flex-1 grid-cols-2 content-start gap-2 sm:gap-2.5 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex min-h-16 items-center gap-2 rounded-[17px] border border-[#f2dfd1] bg-[#fff7f0] px-2.5 text-[12px] font-bold leading-tight text-[#111116] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] min-[420px]:gap-3 min-[420px]:px-3.5 min-[420px]:text-[15px]"
              >
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full min-[420px]:size-9 ${feature.iconBg}`}
                >
                  <img src={feature.icon} alt="" className="max-h-6 max-w-6" />
                </span>
                <span className="min-w-0">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreFeatures
