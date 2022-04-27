import { useRef, useState } from 'react'
import Keyboard from 'react-simple-keyboard'

interface numpadProps {
  value: string
}
export default function Numpad(props: numpadProps) {
  const [input, setInput] = useState('')
  const keyboard = useRef<any>(null)
  const onChange = (input: any) => {
    setInput(input)
  }

  const onChangeInput = (event: any) => {
    const input = event.target.value
    setInput(input)
    keyboard.current?.setInput(input)
  }

  return (
    <div>
      <input
        value={input}
        placeholder={'Tap on the virtual keyboard to start'}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={{
          default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 '],
        }}
        onChange={onChange}
      />
    </div>
  )
}
