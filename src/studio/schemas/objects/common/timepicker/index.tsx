import {Stack} from '@sanity/ui'
import TimePicker from 'react-time-picker'
import {set, unset} from 'sanity'

interface Props {
  onChange: (val: string) => void
  value: string
  type: {
    title: string
    description: string
  }
}

const SanityTimePicker = (props: Props) => {
  const {value = '00:00'} = props
  return (
    <Stack space={2}>
      <TimePicker onChange={(val) => (val ? set(val) : unset())} value={value} />
    </Stack>
  )
}

export {SanityTimePicker}
