import React from 'react'

interface Props {
  fetchQuote: () => Promise<void>
  quote: string | undefined
}

export default function Buttons ({ quote, fetchQuote }: Props): React.JSX.Element {
  const copyToClipboard = async (): Promise<void> => {
    try {
      if (quote !== undefined) {
        await navigator.clipboard.writeText(`"${quote}"`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='border-2 h-13 rounded-2xl border-[#20293A] flex'>
      <div onClick={async () => { await fetchQuote() }} className='rounded-tl-2xl rounded-bl-2xl h-full w-full transition-all lg:hover:bg-opacity-5 lg:hover:bg-white active:bg-opacity-5 active:bg-white'>
        <img src='/assets/Regroup.svg' alt='random quote image' className='m-2 h-8 w-9 '/>
      </div>
      <div className='h-full border-r-2 border-[rgb(32,41,58)] bg-[#20293A]'></div>
      <div onClick={async () => { await copyToClipboard() }} className='rounded-tr-2xl rounded-br-2xl h-full w-full transition-all lg:hover:bg-opacity-5 lg:hover:bg-white active:bg-opacity-5 active:bg-white'>
        <img src='/assets/link.svg' alt='copy quote image' className='m-2 h-8 w-9 '/>
      </div>
    </div>
  )
}
