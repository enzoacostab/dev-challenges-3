import { MouseEvent } from "react"
interface Props {
  text: string
  icon: null | React.JSX.Element
  onClick: (() => void) | ((e: MouseEvent<HTMLButtonElement>) => void)
}

export default function Button ({ text, icon, onClick }: Props): React.JSX.Element {
  return (
    <button onClick={onClick} className="bg-[#3662E3] z-50 py-4 px-10 rounded-xl text-[#F2F5F9] flex gap-5 h-fit active:hover:opacity-80 lg:hover:opacity-80">{text} {icon}</button>
  )
}