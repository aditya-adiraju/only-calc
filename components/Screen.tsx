import React from 'react'

interface ScreenProps {
  content: string
  onChange: React.ChangeEventHandler
  onKeyDown: React.KeyboardEventHandler
}

export default function Screen (props: ScreenProps): React.ReactElement {
  return (
    <input
      className="text-xl bg-[#f7ebec] border-4 border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] font-bold h-14 max-w-md rounded-sm text-right pr-3"
      readOnly={false}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      value={props.content}
    />
  )
}
