import React, { useEffect, useRef } from "react"
import QRCode from "qrcode"
import { DownloadIcon, ShareIcon } from "./icons";
import Button from "./button";

export default function QRCodeComponent ({ value }: { value: string }): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    QRCode.toCanvas(canvas, value, {}, function (error: Error | null | undefined): void {
      if (error) console.error(error)
    })
  }, [value])

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement("a")
      link.download = "qr.png"
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  const copyQR = () => {
    QRCode.toDataURL('some text', function (_err, url) {
      navigator.clipboard.writeText(url)
    })
  }

  return (
    <>
    <header className='pt-10 px-20 w-full'>
        <img src="/assets/logo-qr-generator.svg" className='w-fit h-fit' alt="" />
      </header>
    <main className="scale-75 flex flex-col justify-center items-center h-full gap-20">
      <div className="bg-[#4e80ee33] rounded-full flex justify-center items-center h-[350px] w-[350px] overflow-visible">
        <canvas ref={canvasRef} className="rounded-3xl min-h-[280px] min-w-[280px]" id="canvas" />
      </div>
      <div className="flex gap-10">
        <Button onClick={downloadQR} text="Download" icon={<DownloadIcon/>}/>
        <Button onClick={copyQR} text="Share" icon={<ShareIcon/>}/>
      </div>
    </main>
    </>
  )
}