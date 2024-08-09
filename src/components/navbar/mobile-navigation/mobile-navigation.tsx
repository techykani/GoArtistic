import MobileMenu from './mobile-menu'
import { Dispatch, SetStateAction } from 'react'
import React, { useRef, useState, useEffect } from 'react'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { useWindowScroll } from '@/lib/hooks'
import { AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchPage from '../searchModal/search'
import { isEmpty } from 'lodash'

const queryClient = new QueryClient()
export const BottomNavigation: React.FC<{
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  navbarActive: boolean
  site: any
}> = ({ setNavbarActive, navbarActive, site }) => {
  function handleMobileMenu() {
    setNavbarActive(true)
  }

  const scroll = useWindowScroll()?.y ?? 0
  const { ctaButton } = site
  const router = useRouter()
  const [menuClose, setMenuclose] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const {
    navTop: { topbarNavList, announcement },
  } = site

  const findAClinic = topbarNavList.filter((item: any) => item.menuTitle === 'Find a Clinic')

  const findADoctor = topbarNavList.filter((item: any) => item.menuTitle === 'Find a Doctor')

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    // Function to toggle body overflow
    const toggleBodyOverflow = (value: any) => {
      document.body.style.overflow = navbarActive ? 'hidden' : 'auto'
    }

    if (isOpen) {
      toggleBodyOverflow(true)
    } else {
      toggleBodyOverflow(false)
    }

    return () => {
      toggleBodyOverflow(false)
    }
  }, [isOpen, navbarActive])

  useEffect(() => {
    if (!isEmpty(announcement)) {
      sessionStorage.setItem('announcement', 'true')
      return
    }
    sessionStorage.setItem('announcement', 'false')
  }, [announcement])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] bg-[#F1F6FF] slider-body">
            {' '}
            <SearchPage isOpen={isOpen} onClose={closeModal} />
          </div>
        )}
      </QueryClientProvider>

      {!navbarActive && !isEmpty(announcement) && (
        <div className="block md:hidden bg-secondary-aqua py-2 text-center text-off-white">
          <Link
            className="text-sm flex items-center justify-center"
            href={announcement?.link || '/'}
          >
            <span className="pr-2">{announcement?.title}</span>
            <div className={clsx('transition-all duration-300 w-5 h-5 relative')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M3.33333 10.5H16.6667M16.6667 10.5L11.6667 5.5M16.6667 10.5L11.6667 15.5"
                  stroke="#FEFEFE"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      )}
      <div
        className={clsx(
          'xl:hidden sticky flex items-center justify-between text-gray-700 body-font  w-full pt-[16px] pb-[10px] px-6 transition-all duration-150 top-0 bg-light-neutral',
          navbarActive ? 'z-[1100]' : 'z-[150]',
        )}
      >
        {!navbarActive && (
          <a
            href="/"
            onClick={(ev) => {
              if (router.pathname == '/home') {
                ev.preventDefault()
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <SanityImg
              className="w-[94px] h-auto"
              builder={imageUrlBuilder}
              image={site.logo}
              width={94}
              height={45}
              alt={site.logo.alt}
              title={site.logo.title}
            />
          </a>
        )}

        {!navbarActive && (
          <div className="flex">
            <img className="w-8 h-8" src="/search.svg" alt="search" onClick={openModal} />
            <button
              aria-label="Menu"
              className="flex flex-col items-center justify-center flex-shrink-0 outline-none pl-4 focus:outline-none"
              onClick={handleMobileMenu}
            >
              <img className="w-8 h-8" src="/hamburger.svg" alt="Hamburger Menu" />
            </button>
          </div>
        )}
        <AnimatePresence>
          {navbarActive && <MobileMenu site={site} setNavbarActive={setNavbarActive} />}
        </AnimatePresence>
      </div>

      <div className={clsx('w-full fixed bottom-0 flex z-[150] xl:hidden ')}>
        {!navbarActive && findADoctor?.length > 0 && (
          <div className="w-1/2 h-[75px] bg-primary-blue-new hover:bg-[#0746A2] text-off-white flex flex-col items-center justify-center">
            <Link className="flex justify-center items-center" href={findADoctor[0]?.menuHref}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M17.8572 15.2651V19.0187C17.8572 19.5425 17.4294 19.9703 16.9022 19.9703H3.34017C2.81634 19.9703 2.38518 19.5425 2.38518 19.0187V15.2651C2.38518 12.0032 5.03745 9.35107 8.29924 9.35107H11.9386C15.2006 9.35107 17.8527 12.0033 17.8527 15.2651H17.8572ZM15.1454 14.2987H13.948V13.1012C13.948 12.9022 13.7867 12.7387 13.5854 12.7387C13.383 12.7387 13.2229 12.8999 13.2229 13.1012V14.2987H12.0254C11.8264 14.2987 11.6629 14.46 11.6629 14.6613C11.6629 14.8637 11.8241 15.0238 12.0254 15.0238H13.2229V16.2213C13.2229 16.4203 13.3841 16.5838 13.5854 16.5838C13.7879 16.5838 13.948 16.4226 13.948 16.2213V15.0238H15.1454C15.3445 15.0238 15.508 14.8626 15.508 14.6613C15.508 14.4588 15.3467 14.2987 15.1454 14.2987Z"
                  fill="#FEFEFE"
                />
                <path
                  d="M6.05732 4.56363C6.05732 6.80873 7.87695 8.62842 10.1209 8.62842C12.3649 8.62842 14.1846 6.80879 14.1846 4.56363C14.1846 2.31966 12.3649 0.5 10.1209 0.5C7.87695 0.5 6.05732 2.31963 6.05732 4.56363Z"
                  fill="#FEFEFE"
                />
              </svg>
              <h6 className="text-base pt-1 pl-1">{findADoctor[0]?.menuTitle}</h6>
            </Link>
          </div>
        )}

        {!navbarActive && findAClinic?.length > 0 && (
          <div className="w-1/2 h-[75px] bg-[#00ADE5] hover:bg-[#0746A2] text-off-white flex flex-col items-center justify-center">
            <Link className="flex justify-center items-center" href={findAClinic[0]?.menuHref}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0C9.50786 0 9.01491 0.156154 8.5924 0.46835L2.04695 5.30471C1.3908 5.78955 1 6.58182 1 7.42727V16.4091C1 17.84 2.09894 19 3.45455 19H6.72727C7.17914 19 7.54545 18.6133 7.54545 18.1364V14.6818C7.54545 13.7278 8.27808 12.9545 9.18182 12.9545H10.8182C11.7219 12.9545 12.4545 13.7278 12.4545 14.6818V18.1364C12.4545 18.6133 12.8208 19 13.2727 19H16.5455C17.9011 19 19 17.84 19 16.4091V7.42727C19 6.58182 18.6092 5.78955 17.9531 5.30471L11.4076 0.46835C10.9851 0.156154 10.4921 0 10 0ZM10.4091 4.31818C10.635 4.31818 10.8182 4.51152 10.8182 4.75V6.04545H12.0455C12.2714 6.04545 12.4545 6.23879 12.4545 6.47727V7.34091C12.4545 7.57939 12.2714 7.77273 12.0455 7.77273H10.8182V9.06818C10.8182 9.30663 10.635 9.5 10.4091 9.5H9.59091C9.36501 9.5 9.18182 9.30663 9.18182 9.06818V7.77273H7.95455C7.72861 7.77273 7.54545 7.57939 7.54545 7.34091V6.47727C7.54545 6.23879 7.72861 6.04545 7.95455 6.04545H9.18182V4.75C9.18182 4.51152 9.36501 4.31818 9.59091 4.31818H10.4091Z"
                  fill="#FEFEFE"
                />
              </svg>
              <h6 className="text-base pt-1 pl-1">{findAClinic[0]?.menuTitle}</h6>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
