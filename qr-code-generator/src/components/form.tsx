import { useRef, type MouseEvent, Dispatch, SetStateAction } from "react"
import Button from "./button"

export default function Form ({ setValue }: { setValue: Dispatch<SetStateAction<string | null>> }) {
  const URLRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    if (URLRef.current) setValue(URLRef.current.value)
  }

  return (
    <div className="w-full flex flex-col items-center gap-5">
      <img src="/assets/logo-qr-generator.svg" className='w-fit h-fit' alt="" />
      <form className="flex bg-black p-1 rounded-2xl border-2 border-[#3662E3] w-[95%] max-w-[600px] justify-between">
        <input placeholder="Enter an url" ref={URLRef} type="text" className="bg-transparent w-[70%] z-50 placeholder:text-[#364153] focus-visible:outline-none pl-5 text-[#F2F5F9]" />
        <Button onClick={handleSubmit} text="QR code" icon={null}/>
      </form>
    </div>
  )
}