import { useContext,useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUR_API_KEY,YOUTUBE_SEARCH_API } from "../utils/constants";
import SlideIcons from "./SlideIcons";
import hamBurgerContext from "../utils/hamBurgerContext";
import CategorySearch from "./CategorySearch";
import { Link } from "react-router-dom";
import useCategoryList from "../utils/useCategoryList";

const SearchResult = () => {
    const {Show, setHbStatus} = useContext(hamBurgerContext);
    const [searchRe,setSearchRe] = useState([])
    const [categoryBg,setCategoryBg] = useState()
    const [searchHist,setSearchHist] = useState([])
    const [searchParams] = useSearchParams()
    const search_query = searchParams.get("search_query");
    const searchQuery = search_query.replace(/\+/g, ' ');
    useEffect(() => {
        setSearchRe([])
        searchResultFn()
    },[searchQuery])

    useEffect(() => {
        setSearchRe(searchHist)
    },[categoryBg === undefined])

    async function searchResultFn() {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery + '&type=video&key=' + YOUR_API_KEY)
        const json = await data.json()
        setSearchRe(json.items)
        setSearchHist(json.items)
    }

    const List = useCategoryList()

    return (
        <>
            {!Show && <SlideIcons />}
            <div className={"mt-[80px] px-6 pb-4 " + (Show ? 'ml-64' : 'ml-28')}>
                {(List !== undefined && List.length !== 0) &&
                (<div className={'fixed top-[80px] category_scroller flex justify-start whitespace-nowrap w-full h-16 bg-white overflow-x-auto ' + (Show ? 'max-w-[81.3vw]' : 'max-w-[91.3vw]')}>
                    <div className='flex flex-row'>
                        <button className={'w-auto px-1 p-1.5 font-normal text-center max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis border border-solid rounded-lg h-[2rem] m-3 ' + ((categoryBg == undefined ? "bg-black text-white" : "bg-gray-300 text-black"))}
                            onClick={() => {
                                setCategoryBg()
                                setSearchRe(searchHist)
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
                                    setVideoInfo={setSearchRe}
                                    categoryBg = {categoryBg}
                                    setCategoryBg = {setCategoryBg}
                                />
                            )
                        })}
                    </div>
                </div>)}
                {searchRe.length === 0 ? 'Loading' : (
                <div className='pt-16 px-5'>
                    {searchRe.map((array) => {
                        return(
                            <div key={array.id.videoId} className="flex m-2 items-start">
                                <figure className="max-w-[360px] min-w-[240px] mr-4">
                                    <Link to={'/watch?v=' + array.id.videoId}><img className="rounded-2xl" alt="thumbNail" src={array.snippet.thumbnails.high.url}/></Link>
                                </figure>
                                <div>
                                    <Link to={'/watch?v=' + array.id.videoId}>
                                        <h4 className="text-black">{array.snippet.title}</h4>
                                        <h6 className="py-3">{array.snippet.channelTitle}</h6>
                                        <h6>{array.snippet.description}</h6>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>)}
            </div>
        </>
    )
}

export default SearchResult