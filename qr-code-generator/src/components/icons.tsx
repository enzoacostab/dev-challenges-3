import { IoUnlink } from "react-icons/io5"
import { CgArrowDown } from "react-icons/cg";
import React from "react";

export const ShareIcon = (): React.JSX.Element => {
  return (
    <div className="flex justify-center items-center -rotate-45">
      <IoUnlink className="opacity-30" size={24}/>
      <div className="w-[10px] h-[2px] bg-white rounded-xl absolute"></div>
    </div>
  )
}

export const DownloadIcon = (): React.JSX.Element => {
  return (
    <div className="relative">
      <CgArrowDown/>
      <div className="bg-white h-4 w-4 rounded-full opacity-30 absolute top-1 self-center"></div>
    </div>
  )
}