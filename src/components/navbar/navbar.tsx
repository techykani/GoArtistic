import { SanityImg } from 'sanity-react-extra'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useWindowScroll } from '@/lib/hooks'
import NavLink from 'next/link'
import { imageUrlBuilder } from '@/sanity'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import isEmpty from 'lodash/isEmpty'
import { GTAEvent } from '@/lib/gtag'

export function Navbar({ site }: { site: any }) {
  const scroll = useWindowScroll()?.y ?? 0
  const router = useRouter()
  const [menuList, setMenuList]: any = useState()

  useEffect(() => {
    // fetch(`https://ipinfo.io/json`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (!isEmpty(data)) {
    //       if (data?.country === 'SG') {
    //         setMenuList(site?.singaporeMenu)
    //         sessionStorage.setItem('country', 'SG')
    //       } else {
    //         setMenuList(site?.regionalMenu)
    //         sessionStorage.setItem('country', data?.country)
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching IP information:', error)
    //     sessionStorage.setItem('country', 'SG')
    //     setMenuList(site?.singaporeMenu)
    //   })
    sessionStorage.setItem('country', 'SG')
    setMenuList(site?.singaporeMenu)
  }, [site?.singaporeMenu])

  const {
    navTop: { topbarNavList, announcement },
  } = site

  const bookAppointment = topbarNavList.filter(
    (item: any) => item.menuTitle === 'Book an Appointment',
  )

  const findAClinic = topbarNavList.filter((item: any) => item.menuTitle === 'Find a Clinic')

  const findADoctor = topbarNavList.filter((item: any) => item.menuTitle === 'Find a Doctor')

  const ListMenu = ({ data, index }: any) => {
    const ref = useRef(null)
    const [menuState, toggle] = useMenuState({ transition: true })
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle)

    const country: any = JSON.parse(JSON.stringify(sessionStorage.getItem('country')))

    const checkSubMenuAvailable = (categories: any): boolean => {
      if (categories?.length > 0) {
        return categories.some((category: any) =>
          category?.submenuList?.some((submenu: any) => router.pathname === submenu?.href),
        )
      }
      return false
    }

    const handleButton = (gtag_event: any, menu_name: any, menu_list: any, menu_location: any) => {
      GTAEvent(gtag_event, {
        menu_name: menu_name !== '' ? menu_name : null,
        menu_list: menu_list !== '' ? menu_list : null,
        menu_location: menu_location !== '' ? menu_location : null,
      })
    }

    return (
      data?.menuTitle && (
        <li
          className="list-none relative"
          onMouseOver={(e) => {
            setMenuclose(false)
          }}
        >
          <div ref={ref} {...anchorProps}>
            <NavLink
              href={data?.menuHref ? data?.menuHref : ''}
              className={clsx(
                `transition duration-300 px-4 py-6  inline-block ease-in-out font-medium text-sm text-grey-9 leading-5 hover:text-secondary-ocean hover:bg-copper-50}`,
                router.pathname === data?.menuHref ||
                  (data?.categories !== undefined && checkSubMenuAvailable(data?.categories))
                  ? 'text-secondary-ocean font-semibold'
                  : 'text-grey-9',
              )}
              onClick={() =>
                handleButton('menu', data?.menuTitle, data?.summaryTitle, 'Header Menu')
              }
            >
              {data?.menuTitle}
            </NavLink>
          </div>
          {data?.categories?.length > 0 && (
            <ControlledMenu
              direction={`bottom`}
              align={`${
                index === 0 || index === data?.categories?.length - 1 ? 'center' : 'start'
              }`}
              position="anchor"
              menuClassName={`${
                country === 'SG' && index === 1
                  ? 'mega-menu-first brands-mega-menu'
                  : index === 0
                  ? 'mega-menu-first'
                  : 'mega-menu'
              }`}
              {...hoverProps}
              {...menuState}
              anchorRef={ref}
              onClose={() => toggle(false)}
            >
              <div className="flex">
                <div className="flex h-auto  overflow-hidden  rounded-b-3xl drop-shadow-rised">
                  <div className="text-neutral-700 border-r border-neutral-50 w-max bg-light-neutral  py-6 px-8">
                    <ul className={`h-auto xl:h-auto flex gap-8`}>
                      {data?.categories?.map((menu: any) => {
                        return (
                          <MenuItem key={menu._key}>
                            <li
                              className={`${
                                menu?.categoryType?.Type === 'Submenu with icon'
                                  ? 'flex flex-col items-start'
                                  : 'flex flex-col'
                              }`}
                            >
                              {/* <Link href={menu.href}> */}
                              {menu?.categoryType?.Type === 'Submenu with icon' && (
                                <div className="flex items-start">
                                  <span
                                    className={clsx(
                                      'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px]  w-[100px] tracking-[2.2px]  min-h-[36px]',
                                    )}
                                  >
                                    {menu.categoryTitle}
                                  </span>
                                </div>
                              )}

                              {menu?.categoryType?.Type === 'Submenu with image' && (
                                <div className="flex flex-col">
                                  <span
                                    className={clsx(
                                      'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px]  w-auto tracking-[2.2px]',
                                    )}
                                  >
                                    {menu.categoryTitle}
                                  </span>
                                </div>
                              )}

                              {menu?.categoryType?.Type === 'Submenu with text' && (
                                <div className="flex flex-col">
                                  <span
                                    className={clsx(
                                      'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px]  w-auto tracking-[2.2px]',
                                    )}
                                  >
                                    {menu.categoryTitle}
                                  </span>
                                </div>
                              )}
                              {/* </Link> */}

                              <div className="">
                                <div className="flex flex-col">
                                  {menu?.submenuList?.map((data: any, i: any) => (
                                    <div
                                      key={i}
                                      className={
                                        isEmpty(menu.categoryTitle)
                                          ? 'first:mt-0 mt-4 w-auto h-auto'
                                          : 'mt-4 w-auto'
                                      }
                                    >
                                      {data?.icon && (
                                        <div className="rounded-lg w-[160px] ">
                                          <Link
                                            className="flex items-start"
                                            href={data.href ? data.href : ''}
                                            target={data?.linkIcon ? '_blank' : '_self'}
                                          >
                                            <span className=" text-grey-darkest text-sm font-normal block leading-5 hover:text-grey-4">
                                              {data?.title}
                                            </span>
                                            {data?.linkIcon && (
                                              <SanityImg
                                                className="relative rounded-lg w-[16px] h-[22px] ml-1"
                                                builder={imageUrlBuilder}
                                                image={data?.linkIcon}
                                                width={16}
                                                height={16}
                                                alt="test"
                                              />
                                            )}
                                          </Link>
                                        </div>
                                      )}

                                      {menu?.categoryType?.Type === 'Submenu with image' && (
                                        <div className="rounded-lg flex items-center justify-start">
                                          <Link
                                            className="flex items-center"
                                            href={data.href ? data.href : ''}
                                          >
                                            <span className="w-auto text-grey-darkest text-sm font-normal leading-5 block  hover:text-grey-4">
                                              {data?.title}
                                            </span>
                                          </Link>
                                        </div>
                                      )}

                                      {menu?.categoryType?.Type === 'Submenu with text' && (
                                        <div className="rounded-lg">
                                          <Link
                                            className="flex items-center"
                                            href={data.href ? data.href : ''}
                                          >
                                            <span className="w-auto text-grey-darkest text-sm font-normal leading-5 block  hover:text-grey-4 ">
                                              {data?.title}
                                            </span>
                                          </Link>
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </li>
                          </MenuItem>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="bg-light-neutral-2 w-[240px] rounded-br-3xl py-6 px-8">
                    <h3 className="text-xs text-grey-9 font-bold uppercase tracking-[2.2px] w-[176px]">
                      {data?.summaryTitle ? data?.summaryTitle : ''}
                    </h3>
                    {data?.summaryImage && (
                      <SanityImg
                        className="relative my-[10px] rounded-lg w-[176px] h-auto"
                        builder={imageUrlBuilder}
                        image={data?.summaryImage}
                        width={176}
                        height={96}
                        alt="test"
                      />
                    )}
                    <p
                      className={`text-sm text-grey-8 w-[176px] pb-[9px] ${
                        isEmpty(data?.summaryImage) ? 'pt-[10px]' : ''
                      }`}
                    >
                      {data?.summaryDescription ? data?.summaryDescription : ''}
                    </p>
                    {data?.ctaButton?.ctaButton?.title && (
                      <button className="custom-button">
                        <a
                          href={
                            data?.ctaButton?.ctaButton?.href ? data?.ctaButton?.ctaButton?.href : ''
                          }
                          className="custom-link"
                        >
                          {data?.ctaButton?.ctaButton?.title
                            ? data?.ctaButton?.ctaButton?.title
                            : ''}
                          <img className="arrow-icon" src="/right-arrow.svg" alt="arrow-icon" />
                        </a>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </ControlledMenu>
          )}
        </li>
      )
    )
  }

  const [menuClose, setMenuclose] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isEmpty(announcement)) {
      sessionStorage.setItem('announcement', 'true')
      return
    }
    sessionStorage.setItem('announcement', 'false')
  }, [announcement])

  return (
    <>
      <div
        className={clsx(
          'w-full z-50 transition-all duration-300 xl:block hidden bg-off-white shadow-soft border-grey-2 ',
        )}
        id="navbar"
      >
        <nav className="container h-full">
          {!scroll && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              // exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
              key="nav-top"
            ></motion.div>
          )}

          <div className="flex items-center justify-between">
            <div className="static justify-start block w-auto">
              <a
                href="/"
                onClick={(ev) => {
                  if (router.pathname == '/home') {
                    ev.preventDefault()
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {site?.logo && (
                  <SanityImg
                    builder={imageUrlBuilder}
                    image={site?.logo}
                    width={102}
                    height={48}
                    className={clsx('transition-all duration-300 w-[102px] h-auto relative')}
                    alt={site?.logo?.alt ?? 'image'}
                    title={site?.logo?.title}
                  />
                )}
              </a>
            </div>

            <div className="flex flex-col h-full">
              <ul className="flex items-center">
                {menuList?.menus
                  .filter((menu: any) => !menu?.inFooter)
                  .map((menu: any, index: any) => {
                    return <ListMenu data={menu} index={index} key={menu._key} />
                  })}
                {bookAppointment && (
                  <li className="pt-[26px] pb-[27px] px-6">
                    <Link
                      className="text-sm px-6 py-[14px] bg-[#0746A2] hover:bg-[#0957CB] text-off-white rounded-full"
                      href={bookAppointment[0]?.menuHref || '/'}
                    >
                      {bookAppointment[0]?.menuTitle}
                    </Link>
                  </li>
                )}
              </ul>

              {!scroll && (
                <motion.div
                  key="nav-secondary"
                  initial={{ opacity: 0, y: -20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  // exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                ></motion.div>
              )}
            </div>
          </div>
        </nav>

        <div className="fixed right-0 top-[40%] flex flex-col">
          {findADoctor?.length > 0 && (
            <div className=" w-[100px] h-[75px] bg-primary-blue-new hover:bg-[#0746A2] text-off-white flex flex-col items-center justify-center">
              <Link
                className="flex flex-col justify-center items-center"
                href={findADoctor[0]?.menuHref}
              >
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
                <h6 className="text-xs pt-1">{findADoctor[0]?.menuTitle}</h6>
              </Link>
            </div>
          )}

          {findAClinic?.length > 0 && (
            <div className=" w-[100px] h-[75px] bg-[#00ADE5] hover:bg-[#0746A2] text-off-white flex flex-col items-center justify-center">
              <Link
                className="flex flex-col justify-center items-center"
                href={findAClinic[0]?.menuHref}
              >
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
                <h6 className="text-xs pt-1">{findAClinic[0]?.menuTitle}</h6>
              </Link>
            </div>
          )}
        </div>
      </div>
      {!isEmpty(announcement) && (
        <div className="hidden md:block bg-secondary-aqua py-2 text-center text-off-white">
          <Link
            className="text-sm flex items-center justify-center"
            href={announcement?.link ?? ''}
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
    </>
  )
}
