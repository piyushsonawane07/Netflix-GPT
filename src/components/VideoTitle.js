import { Info, Play } from 'lucide-react'
import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='relative w-screen aspect-video z-10 pt-[270px] bg-gradient-to-r from-black px-12 text-white'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h4 className='py-6 text-md w-1/3'>{overview}</h4>
        <div className='flex m-6 gap-5'>
            <button className='flex hover:opacity-85 bg-white px-4 py-2 rounded-lg text-black'> <Play className='mr-2' fill='black' size={20}/> Play</button>
            <button className='flex bg-gray-500 bg-opacity-60 px-4 py-2 rounded-lg text-white'> <Info className='mr-2' size={20}/> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;
