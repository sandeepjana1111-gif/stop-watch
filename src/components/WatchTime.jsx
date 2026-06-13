import React, { useState } from 'react'
import { useEffect } from 'react'

const WatchTime = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  const milliseconds = Math.floor((time % 1000) / 10)

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`

  return (
    <div className=" flex justify-center items-center flex-col gap-8 font-mono">
      <h1 className="text-6xl font-bold">{formattedTime}</h1>

      <div className="py-4 gap-6 flex justify-center items-center ">
        <button
          disabled={isRunning}
          onClick={() => setIsRunning(true)}
          className={`py-2 px-8 rounded-2xl text-gray-200 transition-all duration-300 ${
            isRunning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-700 hover:scale-105 active:scale-95'
          }`}
        >
          Start
        </button>
        <button
          className="py-2 px-8 rounded-2xl bg-yellow-500 cursor-pointer border-none  text-gray-200
        transition-all duration-300 hover:bg-yellow-700 hover:scale-105 active:scale-95 "
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="py-2 px-8 rounded-2xl bg-orange-500 cursor-pointer border-none  text-gray-200
        transition-all duration-300 hover:bg-orange-700 hover:scale-105 active:scale-95"
          onClick={() => {
            setIsRunning(false)
            setTime(0)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default WatchTime
