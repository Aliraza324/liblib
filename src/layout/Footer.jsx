import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeInUp, revealViewport } from '../animation/animation'
import footerLogo from '../assets/images/footerLogo.png'
import hashIcon from '../assets/images/hash.png'
import hostedImg from '../assets/images/hosted.png'
import instaIcon from '../assets/images/insta.png'
import linkdinIcon from '../assets/images/linkdin.png'
import locationIcon from '../assets/images/location.png'
import mailIcon from '../assets/images/mail.png'
import phoneIcon from '../assets/images/phone.png'
import tiktokIcon from '../assets/images/tiktok.png'
import xIcon from '../assets/images/x.png'
import youtubeIcon from '../assets/images/youtube.png'

const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Security', 'Pricing', 'Integrations', 'Mobile Apps', 'Roadmap'],
  },
  {
    title: 'Solutions',
    links: ['For Banks', 'For Government', 'For Healthcare', 'For Education', 'For Enterprise IT'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'PDPL Compliance', 'Status', 'Help Center', 'Blog'],
  },
]

const socials = [
  { label: 'Instagram', icon: instaIcon },
  { label: 'TikTok', icon: tiktokIcon },
  { label: 'YouTube', icon: youtubeIcon },
  { label: 'X', icon: xIcon },
  { label: 'LinkedIn', icon: linkdinIcon },
]

const contacts = [
  {
    label: 'Mobile',
    value: '+966 53 799 2726',
    icon: phoneIcon,
  },
  {
    label: 'Registration',
    value: 'CR 7049477842',
    icon: hashIcon,
  },
  {
    label: 'Location',
    value: 'Riyadh, Kingdom of Saudi Arabia',
    icon: locationIcon,
  },
  {
    label: 'Information',
    value: 'info@liblib.sa',
    icon: mailIcon,
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'PDPL Notice', 'Cookie Settings']

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#1b2944] px-4 py-8 text-white sm:px-6 lg:px-10 xl:px-14"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(220px,310px)_1fr] lg:gap-16">
          <div>
            <img src={footerLogo} alt="Liblib" className="h-auto w-[79px]" />
            <p className="mt-5 max-w-[260px] text-[13px] font-medium leading-6 text-[#a9b3c5]">
              Liblib Meet is a white-label, Saudi-hosted enterprise video meetings
              platform. Built in Riyadh, trusted across the Kingdom.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ label, icon }) => (
                <Link
                  key={label}
                  to="/"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <img src={icon} alt="" className="max-h-4 max-w-4" />
                </Link>
              ))}
            </div>

            <Link
              to="https://www.codes-inc.com/"
              className="mt-6 inline-flex max-w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img
                src={hostedImg}
                alt="Designed and hosted by Codesinc."
                className="h-auto w-[244px] max-w-full"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-[13px] font-extrabold text-white">{column.title}</h2>
                <ul className="mt-5 space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        to="/"
                        className="text-[13px] font-medium text-[#a9b3c5] transition-colors hover:text-white"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 border-t border-white/12 pt-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ label, value, icon }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#9f3d2f]/55">
                  <img src={icon} alt="" className="max-h-5 max-w-5" />
                </span>
                <span>
                  <span className="block text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#75829a]">
                    {label}
                  </span>
                  <span className="mt-1 block text-[13px] font-extrabold text-white">
                    {value}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-white/12 pt-5 text-[11px] font-medium text-[#8290a7] md:flex-row md:items-center md:justify-between">
          <p>
            &copy; 2026 Liblib. All rights reserved. Designed with pride for leading
            enterprises in the Kingdom of Saudi Arabia.
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {legalLinks.map((link, index) => (
              <Link key={link} to="/" className="transition-colors hover:text-white">
                {index > 0 && <span className="mr-3 text-[#5f6b80]">&bull;</span>}
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
