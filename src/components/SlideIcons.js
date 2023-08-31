import React from 'react';
import { GoHomeFill } from 'react-icons/go';
import {MdOutlineVideoLibrary} from 'react-icons/md'
import { Link } from 'react-router-dom';

const SlideIcons = () => {
  return (
    <div className='max-w-[112] w-28 flex flex-col h-[100vh] fixed top-0 bottom-0 left-0'>
      <div className='mt-[5.125rem]'></div>
      <div className=' overflow-y-auto z-10 w-full h-full'>
        <div className='h-12 ml-0 my-1'>
            <Link to="/"><div className='flex items-center flex-col my-2'><GoHomeFill size={15}/><span className='text-center text-black font-normal text-xs px-4'>Home</span></div></Link>
        </div>
        <div className='h-12 ml-0 my-1'>
            <div className='flex items-center flex-col my-2'><img alt='shorts' src='https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png' height={15} width={15}/><span className='text-center text-black font-normal text-xs px-4'>Shorts</span></div>
        </div>
        <div className='h-12 ml-0 my-1'>
            <div className='flex items-center flex-col my-2'><img alt='subscriptions' src='https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png' height={15} width={15}/><span className='text-center text-black font-normal text-xs px-4'>Subscriptions</span></div>
        </div>
        <div className='h-12 ml-0 my-1'>
            <div className='flex items-center flex-col my-2'><MdOutlineVideoLibrary size={15}/><span className='text-center text-black font-normal text-xs px-4'>Library</span></div>
        </div>
      </div>
    </div>
  )
}

export default SlideIcons
