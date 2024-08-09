import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { MobileSecondaryMenu } from './mobile-secondary-menu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { GTAEvent } from '@/lib/gtag'
import { MobileHeaderMenu } from './mobile-header-menu'

export default function MobileMenu({
  setNavbarActive,
  site,
}: {
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  site: any
}) {
  const router = useRouter()
  const {
    navTop: { language, location, topbarNavList },
  } = site

  const [activeIndex, setActiveIndex] = useState(-1)

  const [categoryList, setCategoryList]: any = useState()

  const toggleSubMenu = (index: any) => {
    setActiveIndex(index)
  }

  const [menuList, setMenuList]: any = useState()

  const [expanded, setExpanded] = useState<false | number>(-1)

  useEffect(() => {
    // fetch(`https://ipinfo.io/json`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     sessionStorage.setItem('country', data?.country)
    //     if (data?.country === 'SG') {
    //       setMenuList(site?.singaporeMenu)
    //     } else {
    //       setMenuList(site?.regionalMenu)
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching IP information:', error)
    //   })
    sessionStorage.setItem('country', 'SG')
    setMenuList(site?.singaporeMenu)
  }, [site?.singaporeMenu])

  const handleClick = (data: any) => {
    if (data?.categories) {
    } else {
      router.push(data?.menuHref)
      setNavbarActive(false)
    }
  }

  const handleButton = (gtag_event: any, menu_name: any, menu_list: any, menu_location: any) => {
    GTAEvent(gtag_event, {
      menu_name: menu_name !== '' ? menu_name : null,
      menu_list: menu_list !== '' ? menu_list : null,
      menu_location: menu_location !== '' ? menu_location : null,
    })
  }

  const ListMenu = ({ data, index }: any) => {
    return (
      data?.menuTitle &&
      activeIndex === -1 && (
        <>
          <li className="flex justify-between items-center px-6 ">
            {activeIndex === -1 && (
              <div className="card w-full">
                <div
                  className={clsx(
                    'w-full relative py-3 h-[60px] transition duration-300 ease-in-out font-semibold text-base text-grey-9 flex justify-between items-center',
                  )}
                  onClick={() => {
                    setCategoryList(data?.categories)
                    setActiveIndex(index)
                    handleButton(
                      'menu',
                      data?.menuTitle,
                      menuList?.menus[activeIndex]?.summaryTitle,
                      'Mobile Menu',
                    )
                  }}
                >
                  <a href="#" onClick={() => handleClick(data)}>
                    {data?.menuTitle}
                  </a>

                  {data?.categories && (
                    <img
                      className="w-6 h-6 flex-shrink-0"
                      src="/chevron-right-grey.svg"
                      alt="chevron-right"
                    />
                  )}
                </div>
              </div>
            )}
          </li>
        </>
      )
    )
  }

  const bookAppointment = topbarNavList?.filter(
    (item: any) => item.menuTitle === 'Book an Appointment',
  )

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] flex flex-col w-full h-screen overflow-y-auto bg-light-neutral"
      initial={{ x: '-100%' }}
      animate={{
        x: 0,
      }}
      exit={{
        x: '-100%',
      }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
    >
      {activeIndex === -1 && (
        <div className="bg-copper-10 ">
          <div className="w-full flex justify-between items-center relative flex-shrink-0 z-20 pt-[16px] pb-[10px] px-6">
            <a
              href="/"
              onClick={(ev) => {
                setNavbarActive(false)
                if (router.pathname == '/') {
                  ev.preventDefault()
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <SanityImg
                builder={imageUrlBuilder}
                image={site.logo}
                width={94}
                height={44}
                alt={site.logo.alt}
                title={site.logo.title}
                className="w-[94px] h-auto"
              />
            </a>

            <button
              className="flex items-center justify-center text-gray-500 transition-opacity hover:opacity-60 w-8 cursor-pointer focus:outline-none"
              onClick={() => setNavbarActive(false)}
              aria-label="close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M22.5 7.5L7.5 22.5M7.5 7.5L22.5 22.5"
                  stroke="#5A5A5A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* <Searchbar setNavbarActive={setNavbarActive} /> */}
        </div>
      )}
      <div className="flex flex-col h-screen">
        {activeIndex !== -1 && (
          <div className="w-full pt-[16px] pb-[10px] pl-6 pr-[25px] flex justify-between items-center relative  flex-shrink-0 border-b-[0.5px] border-grey-3 h-[70px] bg-light-neutral">
            <div className="cursor-pointer focus:outline-none" onClick={() => setActiveIndex(-1)}>
              <img
                src="/chevron-left-grey.svg"
                alt="left-arrow"
                className="w-8 h-8 flex-shrink-0"
              />
            </div>
            <div
              className="cursor-pointer focus:outline-none"
              onClick={() => setNavbarActive(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M22.5 7.5L7.5 22.5M7.5 7.5L22.5 22.5"
                  stroke="#5A5A5A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        )}

        {activeIndex === -1 && (
          <ul className="bg-light-neutral custom__mobile-scroll">
            {menuList?.menus
              .filter((menu: any) => !menu?.inFooter)
              .map((menu: any, index: any) => {
                return <ListMenu data={menu} key={menu._key} index={index} />
              })}
            <li>
              <Link href={bookAppointment[0]?.menuHref}>
                <h1 className="flex items-center h-[60px] px-6 bg-[#008AD8] text-off-white text-base">
                  {bookAppointment[0]?.menuTitle}
                </h1>
              </Link>
            </li>
          </ul>
        )}

        <div className="bg-light-neutral">
          {activeIndex !== -1 && categoryList?.length > 0 && (
            <div className="flex flex-col w-full max-h-screen overflow-y-auto">
              <div className="px-6 py-5 h-[60px] text-base leading-5 font-semibold text-secondary-ocean">
                {menuList?.menus[activeIndex]?.summaryTitle}
              </div>
              {menuList?.menus[activeIndex]?.ctaButton?.ctaButton?.title && (
                <div className="px-6 py-5 h-[60px]">
                  <a
                    href={
                      menuList?.menus[activeIndex]?.ctaButton?.ctaButton?.href
                        ? menuList?.menus[activeIndex]?.ctaButton?.ctaButton?.href
                        : ''
                    }
                    className={clsx(
                      'text-grey-9 text-xs flex justify-between items-center w-full font-bold group uppercase leading-6 tracking-[2.16px]',
                    )}
                    color="black"
                    onClick={() => setNavbarActive(false)}
                  >
                    {menuList?.menus[activeIndex]?.ctaButton?.ctaButton?.title
                      ? menuList?.menus[activeIndex]?.ctaButton?.ctaButton?.title
                      : ''}
                    <img
                      src={'/chevron-right-grey-6.svg'}
                      alt="arrow-up"
                      className={clsx('fill-neutral-300 h-6 w-6 mr-2')}
                    />
                  </a>

                  {/* <button className="font-semibold text-base flex items-center">
                {' '}
                {site?.menu?.menus[activeIndex]?.ctaButton?.ctaButton?.title
                  ? site?.menu?.menus[activeIndex]?.ctaButton?.ctaButton?.title
                  : ''}{' '}
                &nbsp;
                {site?.menu?.menus[activeIndex]?.ctaButton?.icon && (
                  <SanityImg
                    className="relative h-6 w-6"
                    builder={imageUrlBuilder}
                    image={site?.menu?.menus[activeIndex]?.ctaButton?.icon}
                    alt="test"
                    width={24}
                    height={24}
                  />
                )}
              </button> */}
                </div>
              )}
              {/* <Searchbar setNavbarActive={setNavbarActive} /> */}
              {categoryList && (
                <div className=" bg-light-neutral">
                  <MobileSecondaryMenu
                    data={menuList?.menus[activeIndex]}
                    setNavbarActive={setNavbarActive}
                    listingItems={categoryList}
                  />
                </div>
              )}
            </div>
          )}

          {/* {activeIndex === -1 && (
            <div className="absolute landscape:relative bottom-0 z-20 w-full bg-primary-blue-new text-off-white ">
              <div className="flex flex-col">
                <MobileHeaderMenu
                  data={topbarNavList}
                  setNavbarActive={setNavbarActive}
                  listingItems={topbarNavList}
                />
              </div>

             <div className="flex items-center px-6 w-full py-3 text-xs font-light border-t-[0.5px] border-neutral-50">
            <div className="flex h-5 text-off-white text-sm font-normal">


              <img className="pr-1" src="/location_white.svg" alt="" />
              <span>SG</span>
            </div>
            <span className="text-off-white mx-4 w-[5px] h-[5px] bg-off-white rounded-full"></span>
            <div className="flex h-5 text-off-white text-sm font-normal">

              <img className="pr-1" src="/language.svg" alt="" />
              <span>EN</span>
            </div>
          </div>

              <div className="flex items-center w-full space-x-6 text-xs font-light">
                 <div className="flex h-5 space-x-2">
            <SanityImg
              className="w-4 h-4"
              builder={imageUrlBuilder}
              image={contact.icon}
              height={5}
              alt={contact.title + 'icon'}
            />
            <a href={contact.mail} onClick={() => setNavbarActive(false)}>
              {contact.title}
            </a>
          </div>
          <LanguageSwitcher
            borderColor="border-copper-50"
            innerColor="text-neutral-600"
            mobileNav
          /> 
              </div>
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  )
}
