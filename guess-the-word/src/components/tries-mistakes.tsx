import React from 'react'

export default function TriesMistakes ({ tries, mistakes }: { tries: number, mistakes: string }): React.JSX.Element {
  return (
    <div className='flex justify-between flex-wrap gap-5'>
      <div className='flex gap-1 items-center'>
        <h2 className='text-[#4A5567]'>{`Tries(${tries}/5):`}</h2>
        <div className={`w-2 h-2 rounded-full ${tries >= 1 ? 'bg-[#7429C6]' : 'bg-[#4A5567]'} `}></div>
        <div className={`w-2 h-2 rounded-full ${tries >= 2 ? 'bg-[#7429C6]' : 'bg-[#4A5567]'}`}></div>
        <div className={`w-2 h-2 rounded-full ${tries >= 3 ? 'bg-[#7429C6]' : 'bg-[#4A5567]'}`}></div>
        <div className={`w-2 h-2 rounded-full ${tries >= 4 ? 'bg-[#7429C6]' : 'bg-[#4A5567]'}`}></div>
        <div className={`w-2 h-2 rounded-full ${tries === 5 ? 'bg-[#7429C6]' : 'bg-[#4A5567]'}`}></div>
      </div>
      <div className='flex gap-1 items-center'>
        <h2 className='text-[#4A5567]'>{'Mistakes: '}</h2>
        <h2 className='w-16 text-[#4A5567]'>{mistakes}</h2>
      </div>
    </div>
  )
}
