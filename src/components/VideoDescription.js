import { BiDislike, BiLike } from "react-icons/bi"
import useChannelDetails from "../utils/useChannelDetails"
import { PiShareFatLight } from 'react-icons/pi'
import { LiaDownloadSolid } from 'react-icons/lia'

const VideoDescription = (props) => {
    const {videodet} = props
    const [items] = videodet.items
    const n = items.statistics.likeCount

    const channelDet = useChannelDetails(items.snippet.channelId)

    return  (channelDet !== undefined && channelDet.length !== 0) && (
        <>
            <div className="w-auto mb-4">
                <div>
                    <h4 className="font-medium text-black">{items.snippet.title}</h4>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <figure className="w-16 h-16 border border-black rounded-full"><img className="w-full h-full rounded-full" alt="channelLogo" src = {channelDet.items[0].snippet.thumbnails.high.url} /></figure>
                        <div className="flex items-center">
                            <div className="ml-1">
                                <h6 className="text-black">{items.snippet.channelTitle}</h6>
                                <h6 className="font-normal text-black">
                                    {((Math.log10(channelDet.items[0].statistics.subscriberCount)/3|0)===0)?channelDet.items[0].statistics.subscriberCount:Number((channelDet.items[0].statistics.subscriberCount/Math.pow(10,(Math.log10(channelDet.items[0].statistics.subscriberCount)/3|0)*3)).toFixed(1))+["","K","M","B","T",][Math.log10(channelDet.items[0].statistics.subscriberCount)/3|0]} subscribers
                                </h6>
                            </div>
                            <div className="ml-2">
                                <span className="inline-block border py-2 px-4 bg-black text-white font-semibold rounded-full">Subscribe</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex border bg-gray-200 m-0 rounded-full">
                            <div className="py-2 pl-2 hover:bg-gray-300 rounded-l-full">
                                <button className="flex items-center px-4 w-[auto] border-r border-gray-400">
                                    <BiLike size={20} /> <span>{((Math.log10(n)/3|0)===0)?n:Number((n/Math.pow(10,(Math.log10(n)/3|0)*3)).toFixed(1))+["","K","M","B","T",][Math.log10(n)/3|0]}</span>
                                </button>
                            </div>
                            <div className="px-2 pb-2 pt-2.5 hover:bg-gray-300 rounded-r-full">
                                <button className="pl-1 pr-1">
                                    <BiDislike size={20} />
                                </button>
                            </div>
                        </div>
                        <button className="flex items-center p-2 px-3 border bg-gray-200 mx-2 rounded-full hover:bg-gray-300">
                            <PiShareFatLight size={20} /> <span className="ml-2">Share</span>
                        </button>
                        <button className="flex items-center p-2 px-3 border bg-gray-200 mx-2 rounded-full hover:bg-gray-300">
                            <LiaDownloadSolid size={20} /> <span className="ml-2">Download</span>
                        </button>
                        <button className="flex items-baseline px-4 pb-2 border bg-gray-200 mx-2 rounded-3xl hover:bg-gray-300">
                            <span className="font-bold">.</span>
                            <span className="font-bold">.</span>
                            <span className="font-bold">.</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoDescription