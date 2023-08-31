import { useState,useEffect } from "react";
import { YOUTUBE_CHANNEL,YOUR_API_KEY } from "./constants";

const useChannelDetails = (id) => {
    const [channelDet,setChannelDet] = useState([])

    useEffect(() => {
        channelDetails()
    },[])

    const channelDetails = async () => {
        const data = await fetch(YOUTUBE_CHANNEL + id + '&key=' + YOUR_API_KEY)
        const json = await data.json()
        setChannelDet(json)
    }

    return channelDet
}

export default useChannelDetails
