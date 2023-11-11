import React, { type MouseEventHandler } from 'react'

interface Props {
  handleRandom: MouseEventHandler<HTMLButtonElement>
  handleReset: MouseEventHandler<HTMLButtonElement>
}

export default function Buttons ({ handleRandom, handleReset }: Props): React.JSX.Element {
  return (
    <div className='flex justify-evenly gap-2 flex-wrap w-full'>
      <button onClick={handleRandom} className='px-10 py-2 bg-[#C951E7] border-b-4 rounded-lg border-b-[#672171] text-[#F2F5F9]'>Random</button>
      <button onClick={handleReset} className='px-10 py-2 bg-[#C951E7] border-b-4 rounded-lg border-b-[#672171] text-[#F2F5F9]'>Reset</button>
    </div>
  )
}
