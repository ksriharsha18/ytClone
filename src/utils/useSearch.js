import { useState,useEffect } from "react"
import { YOUTUBE_SEARCH_API,YOUR_API_KEY } from "./constants"

const useSearch = (q) => {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        searchResultFn()
    },[])

    async function searchResultFn() {
        const data = await fetch(YOUTUBE_SEARCH_API + q.replace(' ','%20') + '&key=' + YOUR_API_KEY)
        const json = await data.json()
        setSearchResult(json)
    }

    return searchResult
}

export default useSearch
