import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import isEmpty from 'lodash/isEmpty'
import { GTAEvent } from '@/lib/gtag'
import { ControlledMenu, MenuItem, useHover, useMenuState } from '@szhsin/react-menu'
import NavLink from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchPage from './searchModal/search'

const queryClient = new QueryClient()

export function Header(menuList: any) {
  const {
    site: {
      navTop: { language, location, topbarNavList },
    },
  } = menuList

  const [country, setCountry]: any = useState()
  const router = useRouter()

  const [menuClose, setMenuclose] = useState(false)

  useEffect(() => {
    fetch(`https://ipinfo.io/json`)
      .then((response) => response.json())
      .then((data) => {
        if (!isEmpty(data)) {
          setCountry(data?.country)
        }
      })
      .catch((error) => {
        console.error('Error fetching IP information:', error)
        setCountry('SG')
      })
    setCountry(country)
  }, [country])

  const handleButton = (gtag_event: any, menu_list: any, menu_location: any) => {
    GTAEvent(gtag_event, {
      menu_list: menu_list !== '' ? menu_list : null,
      menu_location: menu_location !== '' ? menu_location : null,
    })
  }

  const ListMenu = ({ data, index }: any) => {
    const ref = useRef(null)
    const [menuState, toggle] = useMenuState({ transition: true })
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle)

    // const country: any = JSON.parse(JSON.stringify(sessionStorage.getItem('country')))

    const checkSubMenuAvailable = (categories: any): boolean => {
      if (data?.submenuList?.length > 0) {
        return data?.submenuList?.some((submenu: any) => router.pathname === submenu?.href)
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
                `transition duration-300 px-4 py-6  inline-block ease-in-out font-medium text-sm text-off-white leading-5 hover:text-[#B7F2FF] hover:bg-copper-50}`,
              )}
              onClick={() =>
                handleButton('menu', data?.menuTitle, data?.summaryTitle, 'Header Menu')
              }
            >
              {data?.menuTitle}
            </NavLink>
          </div>
          {data?.submenuList?.length > 0 && (
            <ControlledMenu
              direction={`bottom`}
              align={`${
                index === 0 || index === data?.submenuList?.length - 1 ? 'center' : 'start'
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
              <div className="flex flex-col">
                <div className="flex flex-col h-auto  overflow-hidden  rounded-b-3xl drop-shadow-rised">
                  <div className="text-neutral-700 border-r border-neutral-50 w-max bg-light-neutral ">
                    <ul className={`h-auto xl:h-auto flex flex-col`}>
                      {data?.submenuList?.map((menu: any) => {
                        return (
                          <MenuItem key={menu._key}>
                            <li
                              className={
                                'flex  py-3 px-4 flex-col border-b-2 border-b-[#E6E6E6] w-full'
                              }
                            >
                              <div className={'first:mt-0 mt-4 w-auto h-auto'}>
                                <div className="rounded-lg">
                                  <Link
                                    className="flex flex-col items-center"
                                    href={menu?.href ? menu?.href : ''}
                                  >
                                    <span className="w-auto text-grey-darkest text-sm font-normal leading-5 block  hover:text-[#0084C6] ">
                                      {menu?.title}
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          </MenuItem>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </ControlledMenu>
          )}
        </li>
      )
    )
  }

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isOpen && (
          <div className="fixed inset-0 z-[1000] bg-[#F1F6FF] overflow-scroll slider-body">
            {' '}
            <SearchPage isOpen={isOpen} onClose={closeModal} />
          </div>
        )}
      </QueryClientProvider>

      <header className="hidden md:block w-full z-50 text-off-white bg-primary-blue-new px-[71px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 items-center">
            {/* <Link href={'#'} className="flex gap-1 items-center hover:text-[#C1DBFF]">
            {language?.icon && (
              <Image
                src={language?.icon}
                width={20}
                height={20}
                alt=""
                className="w-5 h-5 object-cover object-top"
              />
            )}
            <span className="flex items-center uppercase text-[14px] font-normal leading-5 text-off-white text-sm hover:text-[#C1DBFF]">
              {language?.title}
            </span>
          </Link> */}
            {/* <Link href={'#'} className="flex gap-1 items-center hover:text-[#C1DBFF]">
            {location?.icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <mask
                  id="mask0_1629_727"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1629_727)">
                  <path
                    d="M10.0375 17.2626C11.8262 15.6205 13.1531 14.1287 14.0181 12.7872C14.8831 11.4457 15.3157 10.2544 15.3157 9.21345C15.3157 7.61535 14.8062 6.30681 13.7872 5.28784C12.7682 4.26887 11.5183 3.75938 10.0375 3.75938C8.55671 3.75938 7.30681 4.26887 6.28784 5.28784C5.26887 6.30681 4.75938 7.61535 4.75938 9.21345C4.75938 10.2544 5.19189 11.4457 6.05692 12.7872C6.92195 14.1287 8.24881 15.6205 10.0375 17.2626ZM10.0375 19C9.83226 19 9.62699 18.9633 9.42173 18.89C9.21647 18.8167 9.0332 18.7068 8.87193 18.5602C7.91893 17.6805 7.07589 16.8228 6.34282 15.9871C5.60975 15.1514 4.99763 14.3413 4.50647 13.5569C4.01531 12.7725 3.64144 12.0175 3.38486 11.2917C3.12829 10.566 3 9.87322 3 9.21345C3 7.01423 3.70742 5.26218 5.12225 3.95731C6.53709 2.65244 8.17551 2 10.0375 2C11.8995 2 13.5379 2.65244 14.9528 3.95731C16.3676 5.26218 17.075 7.01423 17.075 9.21345C17.075 9.87322 16.9467 10.566 16.6902 11.2917C16.4336 12.0175 16.0597 12.7725 15.5686 13.5569C15.0774 14.3413 14.4653 15.1514 13.7322 15.9871C12.9991 16.8228 12.1561 17.6805 11.2031 18.5602C11.0418 18.7068 10.8586 18.8167 10.6533 18.89C10.448 18.9633 10.2428 19 10.0375 19ZM10.0375 10.7969C10.5213 10.7969 10.9355 10.6246 11.2801 10.2801C11.6246 9.93553 11.7969 9.52135 11.7969 9.03752C11.7969 8.55369 11.6246 8.1395 11.2801 7.79495C10.9355 7.45041 10.5213 7.27814 10.0375 7.27814C9.55369 7.27814 9.1395 7.45041 8.79495 7.79495C8.45041 8.1395 8.27814 8.55369 8.27814 9.03752C8.27814 9.52135 8.45041 9.93553 8.79495 10.2801C9.1395 10.6246 9.55369 10.7969 10.0375 10.7969Z"
                    fill="#FEFEFE"
                  />
                </g>
              </svg>
            )}
            <span className="flex items-center text-[14px] font-normal leading-5 text-off-white text-sm hover:text-[#C1DBFF]">
              {country === 'SG' ? 'Singapore' : 'Regional'}
            </span>
          </Link> */}
          </div>
          {/* <div className="flex items-center">
          {topbarNavList?.map((data: any, index: number) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <Link
                  href={data?.itemLink?.href ? data?.itemLink?.href : ''}
                  className="text-off-white text-sm font-normal hover:text-[#C1DBFF]"
                  target={data?.itemLink?.text === 'Book an Appointment' ? '_blank' : '_self'}
                  onClick={() => {
                    handleButton('menu', data?.itemLink?.text, 'Sticky Bar')
                  }}
                >
                  {data?.itemLink?.text}
                </Link>
                {index !== topbarNavList?.length - 1 && (
                  <div className="px-6">
                    <span className="block text-off-white w-[5px] h-[5px] bg-off-white rounded-full"></span>
                  </div>
                )}
              </div>
            )
          })}
        </div> */}
          <div className="flex flex-col h-full">
            <ul className="flex items-center">
              {topbarNavList
                .slice(0, 4)
                .filter((menu: any) => !menu?.inFooter)
                .map((menu: any, index: any) => {
                  return <ListMenu data={menu} index={index} key={menu._key} />
                })}

              <li onClick={openModal} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10.25 3C6.25482 3 3 6.25482 3 10.25C3 14.2452 6.25482 17.5 10.25 17.5C11.9782 17.5 13.5669 16.8895 14.8145 15.875L19.7197 20.7803C19.7888 20.8523 19.8716 20.9097 19.9632 20.9493C20.0548 20.9889 20.1534 21.0098 20.2532 21.0108C20.3529 21.0118 20.4519 20.9929 20.5443 20.9552C20.6367 20.9175 20.7206 20.8617 20.7912 20.7912C20.8617 20.7206 20.9175 20.6367 20.9552 20.5443C20.9929 20.4519 21.0118 20.3529 21.0108 20.2532C21.0098 20.1534 20.9889 20.0548 20.9493 19.9632C20.9097 19.8716 20.8523 19.7888 20.7803 19.7197L15.875 14.8145C16.8895 13.5669 17.5 11.9782 17.5 10.25C17.5 6.25482 14.2452 3 10.25 3ZM10.25 4.5C13.4345 4.5 16 7.06548 16 10.25C16 11.8013 15.3881 13.2029 14.3955 14.2354C14.3343 14.2803 14.2803 14.3343 14.2354 14.3955C13.2029 15.3881 11.8013 16 10.25 16C7.06548 16 4.5 13.4345 4.5 10.25C4.5 7.06548 7.06548 4.5 10.25 4.5Z"
                    fill="#FEFEFE"
                    stroke="#FEFEFE"
                    stroke-width="0.5"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
