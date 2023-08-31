import React from 'react';
import { useState,useContext,useEffect,Suspense } from 'react';
import hamBurgerContext from '../utils/hamBurgerContext';
import useSearch from '../utils/useSearch';
import SlideIcons from "./SlideIcons";
import { YOUTUBE_VIDEO_API,YOUR_API_KEY } from '../utils/constants';
import VideoCard from './VideoCard';
import CategorySearch from './CategorySearch';
import useCategoryList from '../utils/useCategoryList';

const MainContainer = () => {
  const {Show, setHbStatus} = useContext(hamBurgerContext);
  const [videoInfo, setVideoInfo] = useState([])
  const [categoryBg,setCategoryBg] = useState()
  const [all, setAll] = useState('')
  useEffect(() => {
    ytPopularVideos()
  },[])

  useEffect(() => {
    setVideoInfo(all)
  },[categoryBg === undefined])

  async function ytPopularVideos() {
    const data = await fetch(YOUTUBE_VIDEO_API + YOUR_API_KEY)
    const json = await data.json()
    setVideoInfo(json.items)
    setAll(json.items)
  }


  const List = useCategoryList()

  return (
    <>
        {!Show && <SlideIcons />}
        <div className={'h-full mt-[80px] ' + (Show ? 'ml-64' : 'ml-28')}>
            {(List !== undefined && List.length !== 0) &&
                (<div className={'fixed top-[80px] category_scroller flex justify-start whitespace-nowrap w-full h-16 bg-white overflow-x-auto ' + (Show ? 'max-w-[81.3vw]' : 'max-w-[91.3vw]')}>
                    <div className='flex flex-row'>
                    <button className={'w-auto px-1 p-1.5 font-normal text-center max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis border border-solid rounded-lg h-[2rem] m-3 ' + ((categoryBg == undefined ? "bg-black text-white" : "bg-gray-300 text-black"))}
                        onClick={() => {
                            setCategoryBg()
                            setVideoInfo(all)
                        }}
                    >
                        {'All'}
                    </button>
                        {List.map((element,index) => {
                            return(
                                <CategorySearch
                                    key={element.id}
                                    element={element}
                                    index={index}
                                    setVideoInfo={setVideoInfo}
                                    categoryBg = {categoryBg}
                                    setCategoryBg = {setCategoryBg}
                                />
                            )
                        })}
                    </div>
                </div>)
            }
            { (videoInfo !== undefined && videoInfo.length !== 0) &&
            (<div className='flex flex-wrap pt-16 px-5'>
                {videoInfo.map((video) => {
                    return(
                        <VideoCard
                            key={video.id.videoId ? video.id.videoId : video.id}
                            id={video.id.videoId ? video.id.videoId : video.id}
                            video={video.snippet}
                            statistics = {video.statistics}
                        />
                    )
                })}
            </div>)}
        </div>
    </>
  )
}

export default MainContainer
