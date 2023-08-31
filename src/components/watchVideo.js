import { useSearchParams } from "react-router-dom";
import VideoDescription from "./VideoDescription";
import { useEffect, useState } from "react";
import { YOUR_API_KEY, YOUTUBE_VIDEO_ID_API } from "../utils/constants";
import VideoMedia from "./VideoMedia";
import VideoComments from "./VideoComments";

const WatchVideo = () => {
    const [searchParams] = useSearchParams()
    const [ videodet,setVideoDet ] = useState([])

    async function videoDetail() {
        const data = await fetch(YOUTUBE_VIDEO_ID_API + searchParams.get("v") + '&key=' + YOUR_API_KEY)
        const json =await  data.json()
        setVideoDet(json)
    }

    useEffect(() => {
        videoDetail()
    },[])
    return (videodet.length !== 0 && videodet !== undefined) && (
        <>
            <div className="mt-[82px]">
                <div className="max-w-[180vh] min-w-[1024px] mx-auto">
                    <div>
                        <VideoMedia
                            searchParams = {searchParams.get("v")}
                        />
                        <VideoDescription
                            videodet = {videodet}
                        />
                        <VideoComments
                            searchParams = {searchParams.get("v")}
                            videodet = {videodet}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WatchVideo
