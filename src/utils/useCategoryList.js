import { useState,useEffect } from "react"
import { YOUTUBE_CATEGORY_NAMES,YOUR_API_KEY } from "./constants"

const useCategoryList = () => {
    const [categoryName,setCategoryName] = useState()
    useEffect(() => {
        categoryListFn()
    },[])

    const categoryListFn = async () => {
        const data = await fetch(YOUTUBE_CATEGORY_NAMES + YOUR_API_KEY);
        const json = await data.json()
        setCategoryName(json.items)
    }

    return categoryName
}

export default useCategoryList