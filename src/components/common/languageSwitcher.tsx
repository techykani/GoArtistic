import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Listbox, Transition } from '@headlessui/react'
import { GlobeOutline } from '@/icons/globeOutline'
import clsx from 'clsx'

export const LanguageSwitcher = ({
  borderColor = 'border-neutral-300',
  innerColor = 'white',
  mobileNav = false,
}) => {
  const router = useRouter()

  const [languageCode, countryCode] = router.locale?.split('-') ?? []

  const localeMap = [
    {
      country: {
        label: 'Malaysia',
        value: 'my',
      },
      language: {
        label: 'English',
        value: 'en',
      },
    },
    // {
    //   country: {
    //     label: 'Malaysia',
    //     value: 'my',
    //   },
    //   language: {
    //     label: 'Chinese (中文)',
    //     value: 'zh',
    //   },
    // },
    // {
    //   country: {
    //     label: 'Malaysia',
    //     value: 'my',
    //   },
    //   language: {
    //     label: 'Bahasa Melayu',
    //     value: 'bm',
    //   },
    // },
    {
      country: {
        label: 'Indonesia',
        value: 'id',
      },
      language: {
        label: 'Bahasa Indonesia',
        value: 'id',
      },
    },
  ]

  const languages = localeMap.map((l) => l.language)
  const selectedLocale = localeMap.find(({ language }) => language.value === languageCode)
  const selectedLanguage = selectedLocale?.language

  const setLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}`
    router.replace(router.asPath, undefined, { locale: locale })
  }

  return (
    <div className="inline-block">
      <div className={clsx('flex border rounded-[4px] items-center', borderColor)}>
        <Listbox
          value={selectedLanguage}
          onChange={(language) => {
            const country = localeMap.find((l) => l.language.value === language?.value)?.country

            setLocale(`${language?.value}-${country?.value}`)
          }}
        >
          <div className="relative w-full min-w-[120px]">
            <Listbox.Button className="relative flex items-center w-full py-1.5 pr-2 font-semibold text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 text-button-mic">
              <span className="px-1 pointer-events-none">
                <GlobeOutline className={clsx(`fill-${innerColor}`)} />
              </span>
              <span className={clsx('block translate-y-[.5px]', `text-${innerColor}`)}>
                {selectedLanguage?.label}
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={clsx(
                  'absolute w-full mt-2 overflow-auto text-left bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-button-mic',
                  mobileNav && '-translate-y-full -top-4',
                )}
              >
                {languages.map((language, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 px-2`
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className="block font-semibold">{language.label}</span>
                        {selected ? (
                          <span
                            className={`${active ? 'text-amber-600' : 'text-amber-600'}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  )
}
