/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { SanityImg } from 'sanity-react-extra'
import { imageUrlBuilder } from '@/sanity'
import clsx from 'clsx'
import { useWindowSize } from '@/lib/hooks'
import { LinkAngleRight } from '@/components/ui'

interface MegaMenuProps {
  menuClose: boolean
  setMenuClose: Dispatch<SetStateAction<boolean>>
  listingItems: any
  description: string
  menus: any
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  menuClose,
  setMenuClose,
  listingItems,
  menus,
}) => {
  // const { title, description, submenus, image } = listingItems[0]
  // const [hoverMenuTitle, setHoverMenuTitle] = useState<string | undefined>(listingItems?.[0].title)
  // const [menuTitle, setMenuTitle] = useState<string | undefined>(submenus?.[0].title)

  // const handleMenuHover = (menus: any) => {
  //   menus.title && setHoverMenuTitle(menus.title)
  //   menus.title && menus.document && setMenuTitle(menus.title)
  // }

  return (
      <div
        className={clsx(
          'absolute left-0 bg-light-neutral rounded-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible',
        )}
      >
        <div className="flex h-auto  overflow-hidden  rounded-b-3xl drop-shadow-rised">
          <div className="text-neutral-700 border-r border-neutral-50 w-max bg-light-neutral  py-6 px-8">
            <ul className={`h-auto xl:h-auto flex`}>
              {listingItems?.map((menu: any) => {
                return (
                  <li
                    key={menu._key}
                    className={`${
                      menu?.categoryType?.Type === 'Submenu with icon'
                        ? 'flex flex-col items-start'
                        : 'flex flex-col pb-12'
                    }`}
                  >
                    {/* <Link href={menu.href}> */}
                    {menu?.categoryType?.Type === 'Submenu with icon' && (
                      <div className="flex items-start">
                        <span
                          className={clsx(
                            'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px] mb-[10px] w-[178px]',
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
                            'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px]  mb-[10px] w-[178px]',
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
                            'cursor-pointer text-grey-9 inline-block text-xs uppercase font-bold leading-[18px]  mb-[10px] w-[178px]',
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
                          <div key={i} className="mb-4 pr-2 w-auto">
                            {data?.icon && (
                              <div className="rounded-lg h-5">
                                <Link
                                  className="flex items-center"
                                  href={data.href ? data.href : '/'}
                                >
                                  {' '}
                                  {/* {menu?.categoryType?.Type === 'Submenu with icon' && (
                                    <div>
                                      {data?.icon && (
                                        <SanityImg
                                          builder={imageUrlBuilder}
                                          image={data?.icon}
                                          width={80}
                                          height={23}
                                          className={clsx(
                                            'transition-all duration-300 relative px-2 w-[80px] h-auto',
                                          )}
                                          alt="brand-icon"
                                        />
                                      )}
                                    </div>
                                  )} */}
                                  <span className="w-[178px] text-grey-darkest text-sm font-normal block  hover:text-grey-4 pr-8 pt-4">
                                    {data?.title}
                                  </span>
                                </Link>
                              </div>
                            )}

                            {data?.image && (
                              <div className="rounded-lg flex items-center justify-start">
                                <Link
                                  className="flex items-center"
                                  href={data.href ? data.href : '/'}
                                >
                                  {/* {data?.image && (
                                    <SanityImg
                                      builder={imageUrlBuilder}
                                      image={data?.image}
                                      width={100}
                                      height={80}
                                      className={clsx(
                                        'transition-all duration-300 w-[96px] h-[80px] relative rounded-lg',
                                      )}
                                      alt="brand-logo"
                                    />
                                  )} */}
                                  <span className="w-[178px] text-grey-darkest text-sm font-normal block  hover:text-grey-4 pr-8 pt-4">
                                    {data?.title}
                                  </span>
                                </Link>
                              </div>
                            )}

                            {menu?.categoryType?.Type === 'Submenu with text' && (
                              <div className="rounded-lg">
                                <Link
                                  className="flex items-center"
                                  href={data.href ? data.href : '/'}
                                >
                                  <span className="w-[178px] text-grey-darkest text-sm font-normal block  hover:text-grey-4 pr-8 pt-4">
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
                )
              })}
            </ul>
          </div>

          <div className="bg-light-neutral-2 w-[20%] rounded-br-3xl py-6 px-8">
            <h3 className="text-xs text-grey-darkest font-bold uppercase tracking-[2.8px]">
              {menus?.summaryTitle ? menus?.summaryTitle : ''}
            </h3>
            {menus?.summaryImage && (
              <SanityImg
                className="relative my-3 rounded-lg w-[176px] h-auto"
                builder={imageUrlBuilder}
                image={menus?.summaryImage}
                width={176}
                height={96}
                alt="test"
              />
            )}
            <p className="text-sm text-grey-8 py-3">
              {menus?.summaryDescription ? menus?.summaryDescription : ''}
            </p>
            {menus?.ctaButton?.ctaButton?.title && (
              <button className="custom-button">
                <a
                  href={menus?.ctaButton?.ctaButton?.href ? menus?.ctaButton?.ctaButton?.href : '/'}
                  className="custom-link"
                >
                  {menus?.ctaButton?.ctaButton?.title ? menus?.ctaButton?.ctaButton?.title : ''}
                </a>
                <img className="arrow-icon" src="/right-arrow.svg" alt="arrow-icon" />
              </button>
            )}
          </div>
        </div>
        {/* </div> */}
      </div>
  )
}
