import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { YOUR_API_KEY,YOUTUBE_CHANNEL } from "../utils/constants"
import useChannelDetails from "../utils/useChannelDetails"

const VideoCard = (props) => {
    const {id,video,statistics} = props

    const channelDet = useChannelDetails(video.channelId)

    return (channelDet !== undefined && channelDet.length !== 0) && (
        <>
            <div className="max-w-1/5 m-6 h-auto">
                <Link to={'/watch?v=' + ((typeof id == "object") ? id.videoId : id)}>
                    <figure>
                        <img className="rounded-2xl" alt="thumbnail" src={video.thumbnails.high.url} />
                    </figure>
                    <div className="flex items-start mt-1">
                        <figure className="w-9 h-9 bg-transparent border border-black rounded-[50%] mt-1"><img className="w-full h-full rounded-[50%]" alt="channelLogo" src = {channelDet.items[0].snippet.thumbnails.high.url} /></figure>
                        <div className="ml-1">
                            <h5 className="text-black h-auto max-h-[2.9rem] w-full break-all overflow-hidden multiline-ellipsis">{video.title}</h5>
                            <h6>{video.channelTitle}</h6>
                            {(statistics !== undefined) && <h6><span>{((Math.log10(statistics.viewCount)/3|0)===0)?statistics.viewCount:Number((statistics.viewCount/Math.pow(10,(Math.log10(statistics.viewCount)/3|0)*3)).toFixed(1))+["","K","M","B","T",][Math.log10(statistics.viewCount)/3|0]} views</span></h6>}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default VideoCard
