import React, { useState, type KeyboardEvent, type Dispatch, type SetStateAction } from 'react'
import TriesMistakes from './tries-mistakes'
import Buttons from './buttons'

interface Props {
  word: string
  fetchWord: () => Promise<void>
  setComplete: Dispatch<SetStateAction<boolean>>
  setIsConfettiVisible: Dispatch<SetStateAction<boolean>>
}

export default function Game ({ word, fetchWord, setIsConfettiVisible, setComplete }: Props): React.JSX.Element {
  const [tries, setTries] = useState(5)
  const [mistakes, setMistakes] = useState('')
  const [input, setInput] = useState('')

  const handleReset = (): void => {
    setTries(5)
    setMistakes('')
    const inputs = document.querySelectorAll('input')
    const inputElements = Array.from(inputs)
    inputElements.forEach(element => {
      element.value = ''
    })
  }

  const handleRandom = (): void => {
    handleReset()
    fetchWord().catch((e) => {
      console.log(e)
    })
  }

  const handleKeyPress = (letter: string, i: number, event: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = event
    const inputElement: HTMLInputElement = document.getElementById(i.toString()) as HTMLInputElement
    if (letter === key) {
      setInput(input + key)
      inputElement.value = key
      const nextLetter = document.getElementById((i + 1).toString())
      if (nextLetter !== null) {
        nextLetter.focus()
      } else {
        setIsConfettiVisible(true)
        setComplete(true)
        inputElement.blur()
        setTimeout(() => {
          setIsConfettiVisible(false)
          handleRandom()
        }, 4500)
      }
    } else {
      setMistakes(mistakes === '' ? key : `${mistakes}, ${key}`)
      if (tries > 1) {
        setTries(tries - 1)
      } else {
        handleRandom()
      }
      inputElement.value = ''
    }
  }

  return (
    <>
      <div className='px-10 py-5 flex w-full flex-col gap-6'>
        <TriesMistakes tries={tries} mistakes={mistakes}/>
        <div className='flex gap-3 min-w-[150px] justify-center flex-wrap'>
          {word !== '' && word.split('').map((letter, i) => {
            return <input id={i.toString()} maxLength={1} className='w-10 focus-visible:border-[#672171] outline-none h-10 text-center text-xl caret-transparent bg-transparent border-2 text-[#F2F5F9] border-[#4A5567] rounded-lg' key={i} onKeyDown={(event) => { handleKeyPress(letter, i, event) }}></input>
          })}
        </div>
      </div>
      <Buttons handleRandom={handleRandom} handleReset={handleReset}/>
    </>
  )
}
