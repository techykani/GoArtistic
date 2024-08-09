export const weekDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

// @ts-ignore
export const MapMaker = ({ lat, lng }: { lat: number; lng: number }) => (
  <div>
    <svg width="40" height="40" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 0C3.98438 0 0 4.07812 0 9C0 12.375 1.07812 13.4062 7.07812 22.9688C7.96875 24.375 9.98438 24.375 10.875 22.9688C16.875 13.4062 18 12.375 18 9C18 4.03125 13.9219 0 9 0ZM9 21.75C3 12.1875 2.25 11.5781 2.25 9C2.25 5.29688 5.25 2.25 9 2.25C12.7031 2.25 15.75 5.29688 15.75 9C15.75 11.5781 15 12.0938 9 21.75ZM5.25 9C5.25 11.1094 6.89062 12.75 9 12.75C11.0625 12.75 12.75 11.1094 12.75 9C12.75 6.9375 11.0625 5.25 9 5.25C6.89062 5.25 5.25 6.9375 5.25 9Z"
        fill="#F35252"
      />
    </svg>
  </div>
)

export const convertSecondsToAMPM = (value: string, suffixSpacing: boolean = true) => {
  const time = value.split(':')
  const hours = Number(time[0])
  const minutes = Number(time[1])
  let suffix = hours >= 12 ? 'PM' : 'AM'
  suffix = suffixSpacing ? ` ${suffix}` : suffix
  let hour = hours % 12
  hour = hour ? hour : 12
  const min = minutes < 10 ? `0${minutes}` : minutes
  const timeStr = `${hour}:${min}${suffix}`
  return timeStr
}

export function convertSectionTypeName(string: string) {
  return string.split(' ').join('-')
}

// this is for handling the standard of every page title,
export function pageTitleStandard(string: string) {
  const commonP = ['for', 'of', 'at', 'and', '&', 'by', 'off', 'to', 'with', 'vs']
  const strArr = string.replace(/\s+/g, ' ').trim().split(' ')
  const str = strArr.map((e) => {
    return commonP.includes(e) ? e.toLowerCase() : e[0].toUpperCase() + e.slice(1).toLowerCase()
  })

  return str.join(' ')
}

export function formatCarouselType(type: string) {
  const commonP = ['for', 'of', 'at', 'and', '&', 'by', 'off', 'to', 'with']

  const strArr = type.split(/(?=[A-Z])/)

  const str = strArr.map((e) => {
    return commonP.includes(e.toLowerCase())
      ? e.toLowerCase()
      : e[0].toUpperCase() + e.slice(1).toLowerCase()
  })
  return str.join(' ')
}

// handle the listing pages list item & getting here tips section day and time schedule
export const handleDayAndTimeSchedule = (time: OperatingHour): JSX.Element | undefined => {
  const everyDay = weekDays.reduce((a, b) => a && time.days.includes(b), true)
  const singleDay = time.days.length === 1
  const multipleDays = time.days.length > 1

  if (everyDay) {
    return (
      <p className="text-xs leading-5" key={time._key}>
        <span className="font-bold">Everday {time.time_available_on_ph ? `& PH` : null}</span>{' '}
        <span className="lowercase">
          {`${convertSecondsToAMPM(time.startsAt, false)} - ${convertSecondsToAMPM(
            time.endsAt,
            false,
          )}`}
        </span>
      </p>
    )
  } else if (singleDay) {
    return (
      <p className="text-xs leading-5" key={time._key}>
        <span className="font-bold capitalize">
          {time.days[0].substring(0, 3)} {time.time_available_on_ph ? `& PH` : null}
        </span>{' '}
        <span className="lowercase">
          {`${convertSecondsToAMPM(time.startsAt, false)} - ${convertSecondsToAMPM(
            time.endsAt,
            false,
          )}`}
        </span>
      </p>
    )
  } else if (multipleDays) {
    return (
      <p className="text-xs leading-5" key={time._key}>
        <span className="font-bold capitalize">
          {`${time.days[0].substring(0, 3)} - ${time.days[time.days.length - 1].substring(0, 3)}:`}{' '}
          {time.time_available_on_ph ? `& PH` : null}
        </span>{' '}
        <span className="lowercase">
          {`${convertSecondsToAMPM(time.startsAt, false)} - ${convertSecondsToAMPM(
            time.endsAt,
            false,
          )}`}
        </span>
      </p>
    )
  }
}

export const handleDayAndTimeScheduleTwo = (time: serviceHoursProps): JSX.Element | undefined => {
  return (
    <p className="text-xs leading-5" key={time._key}>
      <span className="font-bold capitalize">
        {!time.startingDay
          ? null
          : time.endingDay
          ? `${time.startingDay.substring(0, 3)} - ${time.endingDay.substring(0, 3)}${
              time.time_available_on_ph ? '' : ':'
            }`
          : `${time.startingDay.substring(0, 3)}${time.time_available_on_ph ? '' : ':'}`}{' '}
        {time.time_available_on_ph ? `& PH:` : null}
      </span>{' '}
      <span className="lowercase">
        {`${convertSecondsToAMPM(time.startsAt, false)} - ${convertSecondsToAMPM(
          time.endsAt,
          false,
        )}`}
      </span>
    </p>
  )
}

// convert portable text to text
const defaults = { nonTextBehavior: 'remove' }

export function blocksToText(blocks: PortableText[], opts = {}) {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }

      return block.children.map((child) => child.text).join('')
    })
    .join('\n\n')
}

// reading time
export function getReadingTime(blocks: PortableText[]) {
  const text = blocksToText(blocks)

  if (text) {
    const wpm = 225
    const wordsLength = text.trim().split(/\s+/).length
    const time = Math.ceil(wordsLength / wpm)
    return time
  } else {
    return 1
  }
}
