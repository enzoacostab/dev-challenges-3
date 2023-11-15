import QRCodeComponent from './components/qr-code';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState<null | string>(null)
  return (
    <div className="bg-[#111729] h-full w-full flex flex-col overflow-hidden relative">
      <img src="/assets/bg-illustration.svg" alt="" className="absolute w-fit h-fit right-[-250px] top-[10%] lg:top-[10%] lg:right-20" />
      <div className='flex flex-col h-full justify-center items-center'>
        {value
        ? <QRCodeComponent value={value}/>
        : <Form setValue={setValue}/>}
      </div>
    </div>
  )
}

export default App
