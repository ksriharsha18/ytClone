import { useState,useEffect } from "react"
import { YOUTUBE_SEARCH_API,YOUR_API_KEY } from "../utils/constants"

const CategorySearch = ({element,index,setVideoInfo,categoryBg,setCategoryBg}) => {
    const [ categoryQuery,setCategoryQuery ] = useState('')
    useEffect(() => {
        if(categoryQuery.length !== 0) {
            searchResultFn()
            setCategoryQuery('')
        }
    },[categoryQuery])

    async function searchResultFn() {
        const data = await fetch(YOUTUBE_SEARCH_API + categoryQuery + '&key=' + YOUR_API_KEY)
        const json = await data.json()
        setVideoInfo(json.items)
    }

    return (
            <button className={'w-auto px-1 p-1.5 font-normal text-center max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis border border-solid rounded-lg h-[2rem] m-3 ' + ((categoryBg == index ? "bg-black text-white" : "bg-gray-300 text-black"))}
                onClick={() => {
                    setCategoryBg(categoryBg == index ? undefined : index);
                    if(categoryBg !== index) {
                        setCategoryQuery(element.snippet.title);
                    }
                }}
            >
                {element.snippet.title}
            </button>
    )
}

export default CategorySearch