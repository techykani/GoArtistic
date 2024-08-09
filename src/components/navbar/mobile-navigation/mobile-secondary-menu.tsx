import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { isEmpty } from 'lodash'

const Accordion = ({
  menuItem,
  index,
  expanded,
  setExpanded,
  setNavbarActive,
  listingItems,
}: {
  menuItem: MegaMenu
  index: number
  expanded: false | number
  setExpanded: Dispatch<SetStateAction<false | number>>
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  listingItems: ListingItem[]
}) => {
  const isOpen = index === expanded
  const [menuName, setMenuName] = useState<any>()
  const [visibleMenu, setVisibleMenu] = useState(null)
  const [menuVisible, setMenuVisible] = useState(false)

  // const handleVisibleMenu = (index: number) => {
  //   // setVisibleMenu(index)
  //   setMenuVisible(true)
  // }

  useEffect(() => {
    if (menuItem?.subMenu?.menus) {
      setMenuName(menuItem.title)
    }
  }, [menuItem])

  const handleToggle = (index: number) => {
    const cond = expanded === index ? false : index
    setExpanded(cond)
  }

  return (
    <motion.li initial={false}>
      {menuItem.href && !menuItem.submenuList ? (
        <Link
          href={menuItem.href}
          className="w-full relative py-3 px-6 transition duration-300 ease-in-out font-bold leading-6 tracking-[2.16px] text-xs text-grey-9 uppercase"
          onClick={() => {
            setNavbarActive(false)
          }}
        >
          {menuItem?.categoryTitle}
        </Link>
      ) : (
        <span
          onClick={() => handleToggle(index)}
          className={clsx(
            'w-full relative py-3 px-6 h-[60px] transition duration-300 ease-in-out font-bold leading-6 tracking-[2.16px] text-xs text-grey-9 flex justify-between items-center uppercase',
            isOpen &&
              menuItem.submenuList &&
              'font-bold transition-all duration-300 bg-secondary-ocean px-6 text-off-white',
          )}
        >
          {menuItem?.categoryTitle}
          {menuItem.submenuList && (
            <img
              src={
                isOpen && menuItem.submenuList
                  ? '/chevron-up-off-white.svg'
                  : menuItem?.submenuList?.length > 0
                  ? '/chevron-down-grey.svg'
                  : '/chevron-right-grey-6.svg'
              }
              alt="arrow-up"
              className={clsx(
                'fill-neutral-300 h-6 w-6',
                isOpen &&
                  menuItem.submenuList &&
                  'font-bold  duration-300 ease-in-out stroke-green-500 stroke-1',
              )}
            />
          )}
          {!menuItem.submenuList && (
            <img
              src={'/chevron-right-grey-6.svg'}
              alt="arrow-up"
              className={clsx('fill-neutral-300 h-6 w-6')}
            />
          )}
        </span>
      )}
      <AnimatePresence initial={false}>
        {menuItem.submenuList && isOpen && (
          <motion.ul
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="bg-light-neutral-2  text-grey-9"
          >
            {menuItem.submenuList.map((menu: any, i: any) => (
              <li
                className="w-full relative transition duration-300 ease-in-out font-semibold text-base text-grey-9"
                key={menu._key}
              >
                <div key={i} className="py-3 px-6 flex items-center rounded-lg h-[60px]">
                  {/* {menu?.icon && (
                    <SanityImg
                      builder={imageUrlBuilder}
                      image={menu?.icon}
                      width={73}
                      height={40}
                      className={clsx('transition-all duration-300 w-[73px] h-auto relative')}
                      alt="brand-logo"
                    />
                  )} */}
                  <a
                    href={menu?.href ? menu?.href : ''}
                    className={clsx(
                      'flex justify-between text-sm font-normal leading-5  text-grey-dark hover:text-grey-dark w-full',
                    )}
                    color="black"
                    onClick={() => setNavbarActive(false)}
                    target={menu?.linkIcon ? '_blank' : '_self'}
                  >
                    <span>
                      {menu?.title}
                      {/* <img
                      src={'/chevron-right-grey-6.svg'}
                      alt="arrow-up"
                      className={clsx('fill-neutral-300 h-6 w-6')}
                    /> */}
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export const MobileSecondaryMenu = ({
  data,
  setNavbarActive,
  listingItems,
}: {
  data: any
  setNavbarActive: Dispatch<SetStateAction<boolean>>
  listingItems: any
}) => {
  const [expanded, setExpanded] = useState<false | number>(-1)
  return (
    <ul className="bg-light-neutral">
      {listingItems.map((menu: any, i: any) => (
        <div
          key={i}
          className="h-auto overflow-y-scroll overflow-x-hidden nav-custom-scrollbar bg-light-neutral"
        >
          {menu?.categoryType?.Type === 'Submenu with icon' && (
            <div>
              <Accordion
                key={menu._key}
                menuItem={menu}
                index={i}
                expanded={expanded}
                setExpanded={setExpanded}
                setNavbarActive={setNavbarActive}
                listingItems={listingItems}
              />
            </div>
          )}
          {menu?.categoryType?.Type === 'Submenu with image' && (
            <div>
              <h6
                className={`uppercase font-bold leading-6 tracking-[2.16px] text-xs text-grey-9 ${
                  isEmpty(menu.categoryTitle) ? 'flex' : 'hidden'
                } `}
              >
                {menu.categoryTitle}
              </h6>

              <div>
                {menu?.submenuList?.map((data: any, i: any) => (
                  <div key={i} className="py-3 px-6 flex items-center rounded-lg h-[60px]">
                    <span className="text-sm font-normal leading-5  text-grey-dark hover:text-grey-dark w-full">
                      <a
                        href={data?.href ? data?.href : ''}
                        color="black"
                        className="flex justify-between "
                        onClick={() => setNavbarActive(false)}
                      >
                        {data?.title}
                        <img
                          src={'/chevron-right-grey-6.svg'}
                          alt="arrow-up"
                          className={clsx('fill-neutral-300 h-6 w-6')}
                        />
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </ul>
  )
}
