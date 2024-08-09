import { AngleDown } from '@/icons/angleDown'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { ListMenu, MegaMenu } from '@/components/ui'

interface MegaMenuProps {
  data: MegaMenu[]
  listingItems: ListingItem[]
}

const SecondaryMenu: FC<MegaMenuProps> = ({ data, listingItems }) => {
  const router = useRouter()
  const [menuClose, setMenuclose] = useState(false)


  return (
    <div className="flex">
      {data?.map((item) => {
        return (
          <div
            onMouseOver={() => setMenuclose(false)}
            className={`group relative`}
            key={item._key}
          >
            {item.href && !item.subMenu ? (
              <Link href={item.href}>
                <span className="relative inline-flex items-center pt-2 pr-2 font-medium cursor-pointer text-neutral-700 text-nav-secondary group-hover:grey-9 rounded-tl-xl rounded-tr-xl">
                  {item.title}
                </span>
              </Link>
            ) : (
              <div
                className={clsx(
                  'inline-flex items-center font-medium relative text-neutral-700 text-nav-secondary group-hover:grey-9 rounded-tl-xl rounded-tr-xl pt-2 pr-2 cursor-pointer',
                  item.subMenu && 'group-hover:bg-copper-50 p-2',
                  item.highlight &&
                    'font-semibold !text-copper-400 shadow-tight !rounded-sm bg-white my-1 !p-1',
                  router.route.includes(item.href ?? '') && '!grey-9',
                )}
              >
                {item.highlight && (
                  <img
                    src="/icons/virus.svg"
                    className="mr-0.5"
                    alt="Virus"
                    height="16"
                    width="16"
                  />
                )}
                {item.title}
                {item.subMenu && (
                  <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                    <AngleDown
                      className={clsx(
                        'transition duration-300 ease-in-out transform group-hover:-rotate-180 group-hover:grey-9',
                        router.route.includes(item.href ?? '')
                          ? 'grey-9'
                          : 'fill-neutral-300 ',
                      )}
                    />
                  </span>
                )}
              </div>
            )}

            {listingItems && (
              <MegaMenu
                menuClose={menuClose}
                setMenuClose={setMenuclose}
                listingItems={listingItems}
                description={''}
                menus={[]}
              />
            )}

            {/* {listingItems && (
              <ListMenu menuItem={item} menuClose={menuClose} setMenuClose={setMenuclose} />
            )} */}
          </div>
        )
      })}
    </div>
  )
}

export default SecondaryMenu
