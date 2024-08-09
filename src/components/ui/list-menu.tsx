import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

interface MegaMenuProps {
  menuItem: MegaMenu
  menuClose: boolean
  setMenuClose: Dispatch<SetStateAction<boolean>>
}

export const ListMenu: React.FC<any> = ({ menuItem, menuClose, setMenuClose }) => {
  const { headline, menus } = menuItem
  return (
    <div
      className={clsx(
        'bg-white rounded-lg absolute shadow-point py-5 pl-10 w-[350px] top-7 left-0 z-20',
        menuClose
          ? 'opacity-0 invisible'
          : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible ',
      )}
    >
      <div
        className="bottom-0 right-0 h-[35%] bg-copper-10 w-[65%] absolute"
        style={{
          clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
        }}
      />
      <div className="relative flex">
        <div className="pt-4">
          <h3 className="font-medium text-head-3 text-neutral-900">
            {headline ? headline : menuItem.title}
          </h3>
          <div className="h-0.5 bg-copper-500 w-[40px] mt-0.5 mb-3" />
          <ul className="py-3 space-y-3 text-neutral-700">
            {menus?.map((menu: any) => (
              <li key={menu._key} onClick={() => setMenuClose(true)}>
                <Link href={menuItem.href + menu.href}>
                  <span className="cursor-pointer text-nav-mastheads hover:text-green-500 hover:bg-warning-50 py-1.5 px-1">
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
