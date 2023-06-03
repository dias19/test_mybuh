import React from 'react'

export default function Residency() {
  return (
    <div className="flex w-full pb-4 mb-4 border-b-2 p-2">
    <p className="font-bold text-lg w-1/6">Резиденство</p>
    <div className='grid grid-cols-2'>   
      <div className="flex items-center mr-4">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] mr-1"
        />
        <span className="text-lg">Гражданин РК</span>
      </div>
      <div className="flex items-center mr-1">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] mr-1"
        />
        <span className="text-lg">Иностранец</span>
      </div>
      <div className="flex items-center mr-4">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] mr-1"
        />
        <span className="text-lg">Гражданин ЕАЭС</span>
      </div>
      <div className="flex items-center mr-1">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] mr-1"
        />
        <span className="text-lg">Вид на жительство</span>
      </div>
    </div>
  </div>
  )
}
