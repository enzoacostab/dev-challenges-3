import React, { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import Game from './components/game'

function App (): React.JSX.Element {
  const [word, setWord] = useState('default')
  const [shuffleWord, setShuffleWord] = useState(shuffle(word))
  const [isConfettiVisible, setIsConfettiVisible] = useState(false)
  const [complete, setComplete] = useState(false)

  function shuffle (string: string): string {
    const letters = string.split('')
    letters.sort(() => Math.random() - 0.5)
    const shuffledString = letters.join('')
    return shuffledString
  }

  const fetchWord = async (): Promise<void> => {
    const url = 'https://random-word-api.p.rapidapi.com/get_word'
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f2841b798bmsh4ae6e12481008d1p118acfjsn87677087c96b',
        'X-RapidAPI-Host': 'random-word-api.p.rapidapi.com'
      }
    }
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setWord(result.word)
      setShuffleWord(shuffle(result.word))
    } catch (error) {
      setWord('default')
      setShuffleWord(shuffle('default'))
      console.error(error)
    }
  }

  useEffect(() => {
    fetchWord().catch((e) => {
      console.error(e)
    })
  }, [])

  return (
    <div className='flex justify-center items-center bg-[url("/assets/bg-guess-the-word.png")] bg-cover bg-center h-screen '>
      {isConfettiVisible && <ReactConfetti />}
      <div className='w-[68%] max-w-[450px] min-h-[65%] p-7 gap-1 flex flex-col justify-between items-center rounded-xl bg-gradient-to-r from-[#0e1424] to-[#1d2436]'>
        <img className='max-w-[200px]' src='/assets/Word Scramblle.svg'></img>
        <div className='bg-[#4A5567] h-16 w-full flex justify-center items-center rounded-md shadow-[0_3px]'>
          <h3 className='text-[#97A3B6] text-3xl tracking-[10px] font-bold overflow-x-scroll overflow-y-hidden px-2 sm:overflow-hidden'>{complete ? word : shuffleWord}</h3>
        </div>
        <Game word={word} fetchWord={fetchWord} setIsConfettiVisible={setIsConfettiVisible} setComplete={setComplete}/>
      </div>
    </div>
  )
}

export default App
