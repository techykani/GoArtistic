import {BiTimeFive} from 'react-icons/bi'
import {SanityTimePicker} from '../common/timepicker'
// `import TimeToSecondsField from 'sanity-plugin-time-seconds'
const convertSecondsToAMPM = (value) => {
  let _ = Math.floor(value / 3600)
  let hours = Math.floor((value - _ * 3600) / 60)
  let minutes = value - _ * 3600 - hours * 60

  const suffix = hours >= 12 ? 'pm' : 'am'

  const hourAMPM = ((hours + 11) % 12) + 1
  const minAMPM = minutes < 10 ? `0${minutes}` : minutes

  return hourAMPM + ':' + minAMPM + suffix
}

export default {
  name: 'common.dayAndTimeInSeconds',
  title: 'Day and Time',
  type: 'object',
  icon: BiTimeFive,
  fields: [
    {
      name: 'startingDay',
      title: 'Starting day of this time schedule',
      description:
        'e.g. saturday or Saturday or Sat, also if there in only one day for this time schedule, no need to fill ending day of this time schedule',
      type: 'string',
    },
    {
      name: 'endingDay',
      title: 'Ending day of this time schedule',
      description:
        'e.g. saturday or Saturday or Sat, also if there in only one day for this time schedule, no need to fill ending day of this time schedule',
      type: 'string',
    },
    {
      name: 'time_available_on_ph',
      title: 'Time applied for public holiday too?',
      description: 'Toggle if the time is applied for public holiday too',
      type: 'boolean',
    },
    {
      name: 'startsAt',
      title: 'Start At',
      type: 'string',
      components: {
        input: SanityTimePicker,
      },
      description: 'Please enter time in 00:00 format',
    },
    {
      name: 'endsAt',
      title: 'End At',
      type: 'string',
      components: {
        input: SanityTimePicker,
      },
      description: 'Please enter time in 00:00 format',
    },
  ],

  preview: {
    select: {
      startingDay: 'startingDay',
      endingDay: 'endingDay',
      startsAt: 'startsAt',
      endsAt: 'endsAt',
    },
    prepare({startingDay, endingDay, startsAt, endsAt}) {
      return {
        title: ` ${endingDay ? `${startingDay} - ${endingDay}` : `${startingDay}`} `,
        subtitle: `${convertSecondsToAMPM(startsAt)} - ${convertSecondsToAMPM(endsAt)}`,
      }
    },
  },
}
