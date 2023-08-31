import React,{useContext,useState,useEffect} from 'react'
import hamBurgerContext from '../utils/hamBurgerContext';
import Search from './Search';
import {BiVideoPlus} from "react-icons/bi"
import {MdOutlineNotifications} from "react-icons/md"
import { Link } from 'react-router-dom';

const Header = () => {
  const {Show,setHbStatus} = useContext(hamBurgerContext)

  return (
    <div className='Header flex items-center fixed w-full top-0 left-0 justify-between py-4 px-1 bg-white z-[2028]'>
        <div className='flex items-center basis-1/4'>
            <button className='rotate-90 py-3 px-6 bg-white mr-2'
                onClick={() => setHbStatus(!Show)}
            >
                <span className='font-bold text-black'>|</span>
                <span className='font-bold text-black'>|</span>
                <span className='font-bold text-black'>|</span>
            </button>
            <Link to='/'>
                <figure className='w-[70%] h-[30px]'>
                    <img className='h-full w-full' alt='youtube-logo' src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" />
                </figure>
            </Link>
        </div>
        <Search />
        <div className='flex items-center justify-between basis-1/5'>
            <BiVideoPlus size={30} className='mx-4 text-black' />
            <MdOutlineNotifications size={30} className='mx-4 text-black'  />
            <button className='border border-blue-500 text-blue-500 font-semibold rounded-2xl p-1  mx-4'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header
