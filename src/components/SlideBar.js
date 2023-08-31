import React from 'react'
import { GoHomeFill,GoHistory } from "react-icons/go";
import { MdOutlineVideoLibrary,MdOutlineWatchLater,MdOutlineLocalMovies,MdOutlineFeedback } from 'react-icons/md';
import { BiLike,BiShoppingBag,BiHelpCircle,BiCopyright } from 'react-icons/bi';
import {AiOutlinePlusCircle,AiOutlineFire,AiOutlineTrophy,AiOutlineBulb,AiFillYoutube,AiFillFlag} from "react-icons/ai";
import {IoMdMusicalNote,IoIosSettings} from 'react-icons/io'
import {CgMediaLive} from 'react-icons/cg'
import { BsNewspaper } from "react-icons/bs";
import {GiHanger} from "react-icons/gi"
import {SiYoutubegaming,SiYoutubemusic} from "react-icons/si"
import {TbBrandYoutubeKids} from "react-icons/tb"
import { Link } from 'react-router-dom';

const SlideBar = () => {
  return (
    <>
        <div className='bg-white overflow-y-auto z-[2020] w-full h-full left-0 bottom-0 overscroll-contain webkitScrollbar .webkitScrollbarTrack'>
            <div className='p-4'>
                <div className='h-10 ml-0'>
                    <Link to='/'><div className='flex items-center mx-4 my-2'><GoHomeFill size={25}/><span className='text-center text-black font-normal px-4'>Home</span></div></Link>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><img alt='shorts' src='https://seeklogo.com/images/Y/youtube-shorts-logo-E2B507EF18-seeklogo.com.png' height={24} width={24}/><span className='text-center text-black font-normal px-4'>Shorts</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><img alt='subscriptions' src='https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png' height={24} width={24}/><span className='text-center text-black ffont-normal px-4'>Subscriptions</span></div>
                </div>
                <hr/>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><MdOutlineVideoLibrary size={25}/><span className='text-center text-black font-normal px-4'>Library</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><GoHistory size={25}/><span className='text-center text-black font-normal px-4'>History</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><MdOutlineWatchLater size={25}/><span className='text-center text-black font-normal px-4'>Watch Later</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><BiLike size={25}/><span className='text-center text-black font-normal px-4'>Liked Videos</span></div>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <span className='inline-block pt-1.5 pb-1 mx-3'>Subscriptions</span>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><img alt='subscriptions' src='https://icons.iconarchive.com/icons/pictogrammers/material/256/youtube-subscription-icon.png' height={24} width={24}/><span className='text-center text-black font-normal px-4'>World Affairs</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiOutlinePlusCircle size={25}/><span className='text-center text-black font-normal pl-4'>Browse Channels</span></div>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <span className='inline-block pt-1.5 pb-1 mx-3'>Explore</span>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiOutlineFire size={25}/><span className='text-center text-black font-normal pl-4'>Trending</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><BiShoppingBag size={25}/><span className='text-center text-black font-normal pl-4'>Shopping</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><IoMdMusicalNote size={25}/><span className='text-center text-black font-normal pl-4'>Music</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><MdOutlineLocalMovies size={25}/><span className='text-center text-black font-normal pl-4'>Movies</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><CgMediaLive size={25}/><span className='text-center text-black font-normal pl-4'>Live</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><SiYoutubegaming size={25}/><span className='text-center text-black font-normal pl-4'>Gaming</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><BsNewspaper size={25}/><span className='text-center text-black font-normal pl-4'>News</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiOutlineTrophy size={25}/><span className='text-center text-black font-normal pl-4'>Sports</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiOutlineBulb size={25}/><span className='text-center text-black font-normal pl-4'>Learning</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><GiHanger size={25}/><span className='text-center text-black font-normal pl-4'>Fashion & Beauty</span></div>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiFillYoutube size={25}/><span className='text-center text-black font-normal pl-4'>Youtube Premium</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><SiYoutubemusic size={25}/><span className='text-center text-black font-normal pl-4'>Youtube Music</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><TbBrandYoutubeKids size={25}/><span className='text-center text-black font-normal pl-4'>Youtube Kids</span></div>
                </div>
            </div>
            <hr />
            <div className='p-4'>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><IoIosSettings size={25}/><span className='text-center text-black font-normal pl-4'>Settings</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><AiFillFlag size={25}/><span className='text-center text-black font-normal pl-4'>Report History</span></div>
                </div>
                <div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><BiHelpCircle size={25}/><span className='text-center text-black font-normal pl-4'>Help</span></div>
                </div><div className='h-10 ml-0'>
                    <div className='flex items-center mx-4 my-2'><MdOutlineFeedback size={25}/><span className='text-center text-black font-normal pl-4'>Send Feedback</span></div>
                </div>
            </div>
            <hr />
            <div className='py-4 px-1'>
                <div className='py-1 max-w-[210px]'>
                    <span className='font-thin mx-0.5 text-gray-400'>About</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Press</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Copyright</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Contact Us</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Creators</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Advertise</span>
                    <span className='font-thin mx-0.5 text-gray-400'>Developers</span>
                </div>
                <div className='py-1 w-[210px]'>
                    <span className='font-thin mx-1 text-gray-400'>Terms</span>
                    <span className='font-thin mx-1 text-gray-400'>Privacy</span>
                    <span className='font-thin mx-1 text-gray-400'>Policy & Safety</span>
                    <span className='font-thin mx-1 text-gray-400'>How Youtube Works</span>
                    <span className='font-thin mx-1 text-gray-400'>Test new features</span>
                </div>
                <div className='my-1'>
                    <span className='flex items-center'><BiCopyright size={15}/> <span className='h-full w-full'>2003 Google LLC</span></span>
                </div>
            </div>
        </div>
    </>
  )
}

export default SlideBar
