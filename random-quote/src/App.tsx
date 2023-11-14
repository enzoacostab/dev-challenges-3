import React, { useEffect, useState } from 'react'
import Buttons from './components/buttons'

interface Quote {
  author: string
  tags: string[]
  content: string
}

function App (): React.JSX.Element {
  const [quote, setQuote] = useState<Quote>({ author: '', tags: [], content: '' })

  useEffect(() => {
    void fetchQuote()
  }, [])

  const fetchQuote = async (): Promise<void> => {
    try {
      const response = await fetch('https://api.quotable.io/random')
      const data = await response.json()
      setQuote(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="overflow-x-hidden gap-5 bg-[#111729] h-full w-full flex flex-col justify-center items-center">
      <div className="gap-3 p-10 w-[540px] h-fit min-h-[207px] flex flex-col justify-center items-center bg-[#20293A] relative rounded-xl">
        <img src="/assets/bg-image-random-quote.svg" alt="background image" className="min-h-[207px] min-w-[540px] absolute bottom-0 right-0 z-10"/>
        <h1 className='text-[#e3e8ee] font-bold text-xl'>{quote?.author}</h1>
        <div className='flex gap-3'>
          {quote.tags.map(tag => {
            return (
              <span key={tag} className="flex text-[#6466E9] border border-[#6466E9] rounded-3xl px-3">{tag}</span>
            )
          })}
        </div>
        <q className='text-[#98a3b7] mt-4 z-20 text-3xl text-center ma'>{quote?.content}</q>
      </div>
      <Buttons quote={quote?.content} fetchQuote={fetchQuote}/>
    </div>
  )
}

export default App
