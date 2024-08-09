import { TabView, TabPanel } from 'primereact/tabview'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/lib/hooks'
import GoogleMapComponent from '@/components/common/GoogleMap'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Paginator } from 'primereact/paginator'
import { classNames } from 'primereact/utils'
import { GTAEvent } from '@/lib/gtag'

export const LocationList: React.FC<any> = ({ locations }) => {
  const router = useRouter()
  const windowWidth = useWindowSize()?.width ?? 0

  const [activeIndex, setActiveIndex] = useState(0)

  const [locationList, setlocationlist] = useState(locations)

  const [tabListData, setTabListData] = useState(locations)

  const [first, setFirst] = useState(0)
  const [rows, setRows] = useState(9)
  const [totalRecords, setTotalRecords] = useState(locations.length)
  const [currentPage, setCurrentPage] = useState(1)

  const onPageChange = (event: any) => {
    setFirst(event.first)
    setRows(event.rows)
    setCurrentPage(event.page + 1)
    console.log('event ', event)
  }

  const renderDesktopData = () => {
    const endIndex = first + rows
    return locationList.slice(first, endIndex).map((location: any, index: any) => (
      <div className="p-6 bg-off-white rounded-xl flex shadow-megaMenu h-full" key={index}>
        {location?.locationImage ? (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url(${location?.locationImage})` }}
          >
            {' '}
          </div>
        ) : (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url('/user-profile.png')` }}
          >
            {' '}
          </div>
        )}
        <div className="pl-4 break-words" style={{ wordBreak: 'break-word' }}>
          <h1 className="text-[18px] text-grey-dark font-semibold leading-[20px]">
            {location?.locationName} {location?.country && <span>{location?.country}</span>}
          </h1>

          {location?.mobileNumber && (
            <div className={clsx(`text-primary-blue-new text-sm font-normal leading-5 flex pt-2`)}>
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19538"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19538)">
                    <path
                      d="M15.3 16C13.9111 16 12.5389 15.6972 11.1833 15.0917C9.82778 14.4861 8.59444 13.6278 7.48333 12.5167C6.37222 11.4056 5.51389 10.1722 4.90833 8.81667C4.30278 7.46111 4 6.08889 4 4.7C4 4.5 4.06667 4.33333 4.2 4.2C4.33333 4.06667 4.5 4 4.7 4H7.4C7.55556 4 7.69444 4.05278 7.81667 4.15833C7.93889 4.26389 8.01111 4.38889 8.03333 4.53333L8.46667 6.86667C8.48889 7.04444 8.48333 7.19444 8.45 7.31667C8.41667 7.43889 8.35556 7.54444 8.26667 7.63333L6.65 9.26667C6.87222 9.67778 7.13611 10.075 7.44167 10.4583C7.74722 10.8417 8.08333 11.2111 8.45 11.5667C8.79444 11.9111 9.15556 12.2306 9.53333 12.525C9.91111 12.8194 10.3111 13.0889 10.7333 13.3333L12.3 11.7667C12.4 11.6667 12.5306 11.5917 12.6917 11.5417C12.8528 11.4917 13.0111 11.4778 13.1667 11.5L15.4667 11.9667C15.6222 12.0111 15.75 12.0917 15.85 12.2083C15.95 12.325 16 12.4556 16 12.6V15.3C16 15.5 15.9333 15.6667 15.8 15.8C15.6667 15.9333 15.5 16 15.3 16ZM6.01667 8L7.11667 6.9L6.83333 5.33333H5.35C5.40556 5.78889 5.48333 6.23889 5.58333 6.68333C5.68333 7.12778 5.82778 7.56667 6.01667 8ZM11.9833 13.9667C12.4167 14.1556 12.8583 14.3056 13.3083 14.4167C13.7583 14.5278 14.2111 14.6 14.6667 14.6333V13.1667L13.1 12.85L11.9833 13.9667Z"
                      fill="#0957CB"
                    />
                  </g>
                </svg>
              </div>
              <a href={`tel:${location?.mobileNumber}`} className="hover:underline">
                {location?.mobileNumber}
              </a>
            </div>
          )}
          {location?.whatsapp && (
            <div
              className={clsx(
                `text-primary-blue-new text-sm font-normal leading-5 flex first:pt-2 pt-2`,
              )}
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19585"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19585)">
                    <path
                      d="M10.5 3C6.91599 3 4 5.91599 4 9.5C4 10.5645 4.28038 11.5595 4.73506 12.4466L4.03047 14.9691C3.86636 15.5552 4.44588 16.1347 5.03213 15.9708L7.55659 15.2662C8.44299 15.7199 9.43652 16 10.5 16C14.084 16 17 13.084 17 9.5C17 5.91599 14.084 3 10.5 3ZM10.5 3.975C13.557 3.975 16.025 6.44296 16.025 9.5C16.025 12.557 13.557 15.025 10.5 15.025C9.52449 15.025 8.61195 14.7713 7.81621 14.328C7.70405 14.2655 7.57175 14.2498 7.44805 14.2842L5.04736 14.9539L5.71768 12.5545C5.7523 12.4306 5.73656 12.298 5.67388 12.1857C5.22969 11.3894 4.975 10.4765 4.975 9.5C4.975 6.44296 7.44296 3.975 10.5 3.975ZM8.30308 6.57563C8.1994 6.57563 8.03188 6.61452 7.88921 6.76987C7.74686 6.92457 7.34585 7.29978 7.34585 8.06353C7.34585 8.82728 7.90167 9.56485 7.97935 9.66885C8.0567 9.77187 9.05289 11.3897 10.6308 12.0118C11.9418 12.5285 12.2085 12.4256 12.4932 12.3996C12.7779 12.3743 13.4118 12.0247 13.5412 11.662C13.6705 11.2993 13.6706 10.9891 13.6326 10.925C13.5939 10.8604 13.4902 10.8212 13.3349 10.7435C13.1798 10.6658 12.4172 10.2905 12.2748 10.2389C12.1325 10.1872 12.0284 10.161 11.925 10.3163C11.8217 10.4717 11.5244 10.8211 11.4337 10.9244C11.3431 11.0284 11.2527 11.0414 11.0973 10.9638C10.9416 10.8854 10.4422 10.7219 9.84873 10.1932C9.38723 9.78204 9.07676 9.27386 8.98608 9.11851C8.89573 8.96381 8.97633 8.87878 9.054 8.80176C9.12388 8.73221 9.20929 8.62075 9.28696 8.53008C9.36399 8.4394 9.38954 8.37508 9.44121 8.27173C9.49289 8.1687 9.46719 8.07772 9.42852 8.00005C9.38984 7.92237 9.08803 7.15444 8.9499 6.84731C8.83388 6.58926 8.71161 6.58367 8.60078 6.57944C8.51043 6.57587 8.40643 6.57563 8.30308 6.57563Z"
                      fill="#0957CB"
                      stroke="#0957CB"
                      stroke-width="0.2"
                    />
                  </g>
                </svg>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://api.whatsapp.com/send?phone=${location?.whatsapp}`}
                className="hover:underline"
              >
                {location?.whatsapp}
              </a>
            </div>
          )}
          {location?.email && (
            <div
              className={clsx(
                `text-primary-blue-new text-sm font-normal leading-5 flex first:pt-2 pt-2`,
              )}
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3 6.55027L7.89895 9.9183C8.29565 10.191 8.49401 10.3274 8.70976 10.3802C8.90034 10.4269 9.09966 10.4269 9.29024 10.3802C9.50599 10.3274 9.70435 10.191 10.101 9.9183L15 6.55027M5.88 14.211H12.12C13.1281 14.211 13.6321 14.211 14.0172 14.0183C14.3559 13.8488 14.6312 13.5784 14.8038 13.2457C15 12.8675 15 12.3725 15 11.3824V7.61098C15 6.62089 15 6.12584 14.8038 5.74768C14.6312 5.41503 14.3559 5.14458 14.0172 4.97509C13.6321 4.78241 13.1281 4.78241 12.12 4.78241H5.88C4.87191 4.78241 4.36786 4.78241 3.98282 4.97509C3.64413 5.14458 3.36876 5.41503 3.19619 5.74768C3 6.12584 3 6.62089 3 7.61098V11.3824C3 12.3725 3 12.8675 3.19619 13.2457C3.36876 13.5784 3.64413 13.8488 3.98282 14.0183C4.36786 14.211 4.87191 14.211 5.88 14.211Z"
                    stroke="#0957CB"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <a href={`mailto:${location?.email}`} className="hover:underline">
                {location?.email}
              </a>
            </div>
          )}
          {location?.address && (
            <a
              href={location?.locationLink}
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary-blue-new text-sm font-normal leading-5 pt-2 flex cursor-pointer"
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19548"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19548)">
                    <path
                      d="M9.5 15.5692C10.8979 14.2169 11.9349 12.9884 12.6109 11.8836C13.287 10.7788 13.625 9.79776 13.625 8.94049C13.625 7.62441 13.2268 6.54679 12.4305 5.70763C11.6341 4.86848 10.6573 4.4489 9.5 4.4489C8.34271 4.4489 7.36589 4.86848 6.56953 5.70763C5.77318 6.54679 5.375 7.62441 5.375 8.94049C5.375 9.79776 5.71302 10.7788 6.38906 11.8836C7.0651 12.9884 8.10208 14.2169 9.5 15.5692ZM9.5 17C9.33958 17 9.17917 16.9698 9.01875 16.9094C8.85833 16.8491 8.7151 16.7585 8.58906 16.6378C7.84427 15.9133 7.18542 15.207 6.6125 14.5188C6.03958 13.8305 5.5612 13.1634 5.17734 12.5175C4.79349 11.8715 4.5013 11.2497 4.30078 10.652C4.10026 10.0543 4 9.48383 4 8.94049C4 7.12937 4.55286 5.6865 5.65859 4.6119C6.76432 3.5373 8.04479 3 9.5 3C10.9552 3 12.2357 3.5373 13.3414 4.6119C14.4471 5.6865 15 7.12937 15 8.94049C15 9.48383 14.8997 10.0543 14.6992 10.652C14.4987 11.2497 14.2065 11.8715 13.8227 12.5175C13.4388 13.1634 12.9604 13.8305 12.3875 14.5188C11.8146 15.207 11.1557 15.9133 10.4109 16.6378C10.2849 16.7585 10.1417 16.8491 9.98125 16.9094C9.82083 16.9698 9.66042 17 9.5 17ZM9.5 10.2445C9.87813 10.2445 10.2018 10.1026 10.4711 9.81889C10.7404 9.53514 10.875 9.19405 10.875 8.7956C10.875 8.39715 10.7404 8.05606 10.4711 7.77232C10.2018 7.48857 9.87813 7.3467 9.5 7.3467C9.12187 7.3467 8.79818 7.48857 8.52891 7.77232C8.25964 8.05606 8.125 8.39715 8.125 8.7956C8.125 9.19405 8.25964 9.53514 8.52891 9.81889C8.79818 10.1026 9.12187 10.2445 9.5 10.2445Z"
                      fill="#0957CB"
                    />
                  </g>
                </svg>
              </div>
              <span className="hover:underline">{location?.address}</span>
            </a>
          )}
        </div>
      </div>
    ))
  }

  const renderMobileData = () => {
    const endIndex = first + rows
    return locationList.slice(first, endIndex).map((location: any, index: any) => (
      <div className="p-4 bg-off-white rounded-xl flex shadow-megaMenu" key={index}>
        {location?.locationImage ? (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url(${location?.locationImage})` }}
          >
            {' '}
          </div>
        ) : (
          <div
            className="min-w-[64px] lg:min-w-[112px] min-h-[64px] max-h-[64px] lg:min-h-[112px] lg:max-h-[112px] bg-cover bg-center rounded-full overflow-hidden"
            style={{ backgroundImage: `url('/user-profile.png')` }}
          >
            {' '}
          </div>
        )}
        <div className="pl-4 max-w-[216px] break-words">
          <h1 className="text-[16px] text-grey-dark font-semibold leading-6">
            {location?.locationName} {location?.country && <span>{location?.country}</span>}
          </h1>

          {location?.mobileNumber && (
            <div className={clsx(`text-primary-blue-new text-sm font-normal leading-5 flex pt-2`)}>
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19538"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19538)">
                    <path
                      d="M15.3 16C13.9111 16 12.5389 15.6972 11.1833 15.0917C9.82778 14.4861 8.59444 13.6278 7.48333 12.5167C6.37222 11.4056 5.51389 10.1722 4.90833 8.81667C4.30278 7.46111 4 6.08889 4 4.7C4 4.5 4.06667 4.33333 4.2 4.2C4.33333 4.06667 4.5 4 4.7 4H7.4C7.55556 4 7.69444 4.05278 7.81667 4.15833C7.93889 4.26389 8.01111 4.38889 8.03333 4.53333L8.46667 6.86667C8.48889 7.04444 8.48333 7.19444 8.45 7.31667C8.41667 7.43889 8.35556 7.54444 8.26667 7.63333L6.65 9.26667C6.87222 9.67778 7.13611 10.075 7.44167 10.4583C7.74722 10.8417 8.08333 11.2111 8.45 11.5667C8.79444 11.9111 9.15556 12.2306 9.53333 12.525C9.91111 12.8194 10.3111 13.0889 10.7333 13.3333L12.3 11.7667C12.4 11.6667 12.5306 11.5917 12.6917 11.5417C12.8528 11.4917 13.0111 11.4778 13.1667 11.5L15.4667 11.9667C15.6222 12.0111 15.75 12.0917 15.85 12.2083C15.95 12.325 16 12.4556 16 12.6V15.3C16 15.5 15.9333 15.6667 15.8 15.8C15.6667 15.9333 15.5 16 15.3 16ZM6.01667 8L7.11667 6.9L6.83333 5.33333H5.35C5.40556 5.78889 5.48333 6.23889 5.58333 6.68333C5.68333 7.12778 5.82778 7.56667 6.01667 8ZM11.9833 13.9667C12.4167 14.1556 12.8583 14.3056 13.3083 14.4167C13.7583 14.5278 14.2111 14.6 14.6667 14.6333V13.1667L13.1 12.85L11.9833 13.9667Z"
                      fill="#0957CB"
                    />
                  </g>
                </svg>
              </div>
              <a href={`tel:${location?.mobileNumber}`} className="hover:underline">
                {location?.mobileNumber}
              </a>
            </div>
          )}
          {location?.whatsapp && (
            <div
              className={clsx(
                `text-primary-blue-new text-sm font-normal leading-5 flex first:pt-2 pt-2`,
              )}
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19585"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19585)">
                    <path
                      d="M10.5 3C6.91599 3 4 5.91599 4 9.5C4 10.5645 4.28038 11.5595 4.73506 12.4466L4.03047 14.9691C3.86636 15.5552 4.44588 16.1347 5.03213 15.9708L7.55659 15.2662C8.44299 15.7199 9.43652 16 10.5 16C14.084 16 17 13.084 17 9.5C17 5.91599 14.084 3 10.5 3ZM10.5 3.975C13.557 3.975 16.025 6.44296 16.025 9.5C16.025 12.557 13.557 15.025 10.5 15.025C9.52449 15.025 8.61195 14.7713 7.81621 14.328C7.70405 14.2655 7.57175 14.2498 7.44805 14.2842L5.04736 14.9539L5.71768 12.5545C5.7523 12.4306 5.73656 12.298 5.67388 12.1857C5.22969 11.3894 4.975 10.4765 4.975 9.5C4.975 6.44296 7.44296 3.975 10.5 3.975ZM8.30308 6.57563C8.1994 6.57563 8.03188 6.61452 7.88921 6.76987C7.74686 6.92457 7.34585 7.29978 7.34585 8.06353C7.34585 8.82728 7.90167 9.56485 7.97935 9.66885C8.0567 9.77187 9.05289 11.3897 10.6308 12.0118C11.9418 12.5285 12.2085 12.4256 12.4932 12.3996C12.7779 12.3743 13.4118 12.0247 13.5412 11.662C13.6705 11.2993 13.6706 10.9891 13.6326 10.925C13.5939 10.8604 13.4902 10.8212 13.3349 10.7435C13.1798 10.6658 12.4172 10.2905 12.2748 10.2389C12.1325 10.1872 12.0284 10.161 11.925 10.3163C11.8217 10.4717 11.5244 10.8211 11.4337 10.9244C11.3431 11.0284 11.2527 11.0414 11.0973 10.9638C10.9416 10.8854 10.4422 10.7219 9.84873 10.1932C9.38723 9.78204 9.07676 9.27386 8.98608 9.11851C8.89573 8.96381 8.97633 8.87878 9.054 8.80176C9.12388 8.73221 9.20929 8.62075 9.28696 8.53008C9.36399 8.4394 9.38954 8.37508 9.44121 8.27173C9.49289 8.1687 9.46719 8.07772 9.42852 8.00005C9.38984 7.92237 9.08803 7.15444 8.9499 6.84731C8.83388 6.58926 8.71161 6.58367 8.60078 6.57944C8.51043 6.57587 8.40643 6.57563 8.30308 6.57563Z"
                      fill="#0957CB"
                      stroke="#0957CB"
                      stroke-width="0.2"
                    />
                  </g>
                </svg>
              </div>
              <span className="hover:underline">{location?.whatsapp}</span>
            </div>
          )}
          {location?.email && (
            <div
              className={clsx(
                `text-primary-blue-new text-sm font-normal leading-5 flex first:pt-2 pt-2`,
              )}
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3 6.55027L7.89895 9.9183C8.29565 10.191 8.49401 10.3274 8.70976 10.3802C8.90034 10.4269 9.09966 10.4269 9.29024 10.3802C9.50599 10.3274 9.70435 10.191 10.101 9.9183L15 6.55027M5.88 14.211H12.12C13.1281 14.211 13.6321 14.211 14.0172 14.0183C14.3559 13.8488 14.6312 13.5784 14.8038 13.2457C15 12.8675 15 12.3725 15 11.3824V7.61098C15 6.62089 15 6.12584 14.8038 5.74768C14.6312 5.41503 14.3559 5.14458 14.0172 4.97509C13.6321 4.78241 13.1281 4.78241 12.12 4.78241H5.88C4.87191 4.78241 4.36786 4.78241 3.98282 4.97509C3.64413 5.14458 3.36876 5.41503 3.19619 5.74768C3 6.12584 3 6.62089 3 7.61098V11.3824C3 12.3725 3 12.8675 3.19619 13.2457C3.36876 13.5784 3.64413 13.8488 3.98282 14.0183C4.36786 14.211 4.87191 14.211 5.88 14.211Z"
                    stroke="#0957CB"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <a
                href={`mailto:${location?.email}`}
                className="hover:underline w-[185px] break-words"
              >
                {location?.email}
              </a>
            </div>
          )}
          {location?.address && (
            <a
              href={location?.locationLink}
              rel="noopener noreferrer"
              target="_blank"
              className="text-primary-blue-new text-sm font-normal leading-5 pt-2 flex cursor-pointer"
            >
              <div className="w-5 h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_480_19548"
                    style={{ maskType: 'alpha' }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_480_19548)">
                    <path
                      d="M9.5 15.5692C10.8979 14.2169 11.9349 12.9884 12.6109 11.8836C13.287 10.7788 13.625 9.79776 13.625 8.94049C13.625 7.62441 13.2268 6.54679 12.4305 5.70763C11.6341 4.86848 10.6573 4.4489 9.5 4.4489C8.34271 4.4489 7.36589 4.86848 6.56953 5.70763C5.77318 6.54679 5.375 7.62441 5.375 8.94049C5.375 9.79776 5.71302 10.7788 6.38906 11.8836C7.0651 12.9884 8.10208 14.2169 9.5 15.5692ZM9.5 17C9.33958 17 9.17917 16.9698 9.01875 16.9094C8.85833 16.8491 8.7151 16.7585 8.58906 16.6378C7.84427 15.9133 7.18542 15.207 6.6125 14.5188C6.03958 13.8305 5.5612 13.1634 5.17734 12.5175C4.79349 11.8715 4.5013 11.2497 4.30078 10.652C4.10026 10.0543 4 9.48383 4 8.94049C4 7.12937 4.55286 5.6865 5.65859 4.6119C6.76432 3.5373 8.04479 3 9.5 3C10.9552 3 12.2357 3.5373 13.3414 4.6119C14.4471 5.6865 15 7.12937 15 8.94049C15 9.48383 14.8997 10.0543 14.6992 10.652C14.4987 11.2497 14.2065 11.8715 13.8227 12.5175C13.4388 13.1634 12.9604 13.8305 12.3875 14.5188C11.8146 15.207 11.1557 15.9133 10.4109 16.6378C10.2849 16.7585 10.1417 16.8491 9.98125 16.9094C9.82083 16.9698 9.66042 17 9.5 17ZM9.5 10.2445C9.87813 10.2445 10.2018 10.1026 10.4711 9.81889C10.7404 9.53514 10.875 9.19405 10.875 8.7956C10.875 8.39715 10.7404 8.05606 10.4711 7.77232C10.2018 7.48857 9.87813 7.3467 9.5 7.3467C9.12187 7.3467 8.79818 7.48857 8.52891 7.77232C8.25964 8.05606 8.125 8.39715 8.125 8.7956C8.125 9.19405 8.25964 9.53514 8.52891 9.81889C8.79818 10.1026 9.12187 10.2445 9.5 10.2445Z"
                      fill="#0957CB"
                    />
                  </g>
                </svg>
              </div>
              <span className="hover:underline">{location?.address}</span>
            </a>
          )}
        </div>
      </div>
    ))
  }

  const positions = locationList.map(
    ({
      locationName,
      latitude,
      longitude,
      address,
      slug,
      description,
    }: {
      locationName: string
      latitude: number
      longitude: number
      address: string
      slug: any
      description: string
    }) => ({
      locationName,
      latitude,
      longitude,
      address,
      slug,
      description,
    }),
  )

  const locationsByCountry = locations.reduce((acc: any, location: { country: string }) => {
    const country = location.country || 'Unknown Country'
    acc[country] = acc[country] || []
    acc[country].push(location)
    return acc
  }, {})

  const countryNames = ['All countries', ...Object.keys(locationsByCountry)]

  const filterLocationsByCountry = (countryName: string | number) => {
    return locationsByCountry[countryName] || locations
  }

  const template1 = {
    layout: 'PrevPageLink PageLinks NextPageLink',
    PrevPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={classNames(options.className, 'border-round')}
          onClick={() => {
            GTAEvent('view_content', {
              content_name: 'Medical Travel Agents',
              content_type: options.onClick,
            })
            options.onClick
          }}
          disabled={options.disabled}
        >
          <span>
            <img src="/chevron-left.svg" height={24} width={24} className="h-6 w-6" alt="left" />
          </span>
        </button>
      )
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={classNames(options.className, 'border-round')}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.87084 6.22279C10.3001 5.87529 10.9298 5.94157 11.2773 6.37084L14.3062 10.1124C15.1972 11.2131 15.1972 12.787 14.3062 13.8876L11.2773 17.6292C10.9298 18.0585 10.3001 18.1248 9.87084 17.7773C9.44157 17.4298 9.37529 16.8001 9.72279 16.3708L12.7517 12.6292C13.0487 12.2623 13.0487 11.7377 12.7517 11.3708L9.72279 7.62923C9.37529 7.19997 9.44157 6.57028 9.87084 6.22279Z"
              fill="#3C3C3C"
            />
          </svg>
        </button>
      )
    },
    PageLinks: (options: any) => {
      if (
        (options.view.startPage === options.page && options.view.startPage !== 0) ||
        (options.view.endPage === options.page && options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { 'p-disabled': true })

        return (
          <span className={className} style={{ userSelect: 'none' }}>
            ...
          </span>
        )
      }

      return (
        <button
          type="button"
          className={`cursor-pointer w-8 h-8 text-sm rounded-full flex justify-center items-center ${
            options.page + 1 === currentPage ? 'text-off-white bg-black-700' : ''
          }`}
          onClick={options.onClick}
        >
          {options.page + 1}
        </button>
      )
    },
  }

  return (
    <>
      <div className={`hidden xl:block ${windowWidth > 1550 ? 'container' : ''}`}>
        <div className="location-tabview">
          <TabView
            className=""
            scrollable
            activeIndex={activeIndex}
            onTabChange={(e: any) => {
              setActiveIndex(e.index)
              setlocationlist(filterLocationsByCountry(countryNames[e.index]))
              setTabListData(filterLocationsByCountry(countryNames[e.index]))
              setCurrentPage(1)
              setTotalRecords(filterLocationsByCountry(countryNames[e.index])?.length)
              setFirst(0)
            }}
          >
            {countryNames.map((tab, index) => {
              return (
                <TabPanel
                  className={`text-base font-semibold leading-5 mr-3 rounded-3xl location__tab hover:bg-secondary-ocean hover:text-off-white ${
                    activeIndex === index
                      ? 'bg-secondary-ocean text-off-white'
                      : 'text-secondary-blue-active bg-secondary-blue-inactive '
                  }`}
                  key={tab}
                  header={
                    <div>
                      {tab}
                      {/* {index !== 0 ? `(${locationsByCountry[tab].length})` : ''} */}
                    </div>
                  }
                ></TabPanel>
              )
            })}
          </TabView>
        </div>
        <div className="pt-[36px] flex justify-between">
          <span className="text-sm font-semibold leading-5 text-grey-dark">
            Showing <span className="text-primary-blue">{locationList?.length}</span> locations
          </span>
        </div>
        <div className="grid grid-cols-3 mt-8 gap-6">{renderDesktopData()}</div>

        <div className="py-[36px]">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template={template1}
          />
        </div>

        <div>
          <GoogleMapComponent positionsList={positions} />
        </div>
      </div>
      <div className="xl:hidden block">
        <div className="location-tabview">
          <TabView
            className="py-8"
            scrollable
            activeIndex={activeIndex}
            onTabChange={(e: any) => {
              setActiveIndex(e.index)
              setlocationlist(filterLocationsByCountry(countryNames[e.index]))
              setTabListData(filterLocationsByCountry(countryNames[e.index]))
              setCurrentPage(1)
              setTotalRecords(filterLocationsByCountry(countryNames[e.index])?.length)
              setFirst(0)
            }}
          >
            {countryNames.map((tab, index) => {
              return (
                <TabPanel
                  className={`mr-3  first:ml-6 last:mr-6 text-base font-semibold leading-5 rounded-3xl location__tab ${
                    activeIndex === index
                      ? 'bg-secondary-ocean text-off-white'
                      : 'text-secondary-blue-active bg-secondary-blue-inactive'
                  }`}
                  key={tab}
                  header={<div>{tab}</div>}
                ></TabPanel>
              )
            })}
          </TabView>
        </div>
        <div className="flex flex-col px-6 ">
          <span className="text-sm font-semibold leading-5 text-grey-dark">
            Showing {locationList?.length} locations
          </span>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-6 px-6 ">{renderMobileData()}</div>
        <div className="py-8 px-6 ">
          <Paginator
            first={first}
            rows={rows}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template={template1}
          />
        </div>
        <div className="px-6 ">
          <GoogleMapComponent positionsList={positions} />
        </div>
      </div>
    </>
  )
}
