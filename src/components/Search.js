import {useState,useEffect,useContext} from 'react'
import { BsSearch } from "react-icons/bs";
import { YOUTUBE_SUGGESTION_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const Search = () => {
    const [searchQuery,setSearchQuery] = useState("");
    const [searchTextQuery,setSearchTextQuery] = useState("")
    const [searchResult,setSearchResult] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false)
    const [autoClick,setAutoClick] = useState('')
    const [suggestionIndex,setSuggestionIndex] = useState(-1)
    useEffect(()=>{
        setSuggestionIndex(-1)
        const TimeOut = setTimeout(() => getSearchSuggestions(),200);

        return() => {
            clearTimeout(TimeOut);
        }
    },[searchQuery]);

    useEffect(()=>{
        var input = document.getElementById('searchArea');
        input.addEventListener('keypress',function(event) {
            if(event.key == "Enter") {
                document.getElementById('searchButton').click();
                input.blur()
                setShowSuggestions(false)
            }
        })
    },[])

    useEffect(() => {
        window.addEventListener('click', function(e) {
            if(e.target.id !== 'searchArea' && e.target.id !== 'suggestionArea') {
                setShowSuggestions(false)
                setSuggestionIndex(-1)
            }
        })

        return() => {
            window.removeEventListener('click', function(e) {
                if(e.target.id !== 'searchArea' && e.target.id !== 'suggestionArea') {
                    setShowSuggestions(false)
                }
            })
        }
    },[])

    useEffect(() => {
        if(autoClick.length !== 0) {
            document.getElementById('searchButton').click()
        }
    },[autoClick])

    const handleKeyEvent = (e) => {
        if(e.key == "ArrowUp") {
            if(suggestionIndex > 0) {
                setSuggestionIndex(suggestionIndex-1)
                setSearchTextQuery(searchResult[suggestionIndex-1])
            }
        } else if(e.key == "ArrowDown") {
            if(suggestionIndex < searchResult.length-1) {
                setSuggestionIndex(suggestionIndex+1)
                setSearchTextQuery(searchResult[suggestionIndex+1])
            }
        }
    }

    const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.text();
    const arr = JSON.parse((json !== undefined) && (json.substring(json.indexOf("["), json.indexOf("])") + 1)));
    let suggestionsTuple = []
    if (Array.isArray(arr) && Array.isArray(arr.at(1))) {
        suggestionsTuple = arr.at(1);
    }

    const suggestions = suggestionsTuple.flatMap((suggestion) => suggestion).filter((suggestion) => typeof suggestion === "string");
    console.log(suggestions)
    setSearchResult(suggestions);
    }

    return (
        <div className='flex basis-1/2'>
            <div className='rounded-l-2xl p-1 border-2 border-r hover:border-solid focus:border-blue-600 bg-white w-[95%]'>
                <input
                    id='searchArea'
                    type='text'
                    placeholder='search'
                    className='search w-[95%] cursor-pointer outline-none ml-3'
                    value={searchTextQuery}
                    tabIndex={1}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setSearchTextQuery(e.target.value);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onClick={(e) => {
                        setSearchQuery(searchTextQuery);
                    }}
                    onKeyDown={handleKeyEvent}
                />
                {(showSuggestions && searchResult.length !== 0) &&
                    <ul id='suggestionArea' className='fixed top-[58px] w-[40%] z-[2038] h-auto left-[28%] border rounded-lg bg-white'>
                        {searchResult.map((query,index) => {
                            return (
                                <li id='suggestion' className={'flex items-center ml-2 hover:bg-gray-300 cursor-default ' + (index === suggestionIndex && 'bg-gray-300')}
                                    key={query}
                                    onClick={() => {
                                        setSearchQuery(query)
                                        setAutoClick(query)
                                        setShowSuggestions(false)
                                    }}
                                >
                                    <BsSearch /> <span className='ml-2'>{query}</span>
                                </li>
                            )
                        })}
                    </ul>
                }
            </div>
            <Link className='rounded-r-2xl border-2 border-l px-4 py-1 bg-white' to={'/results?search_query=' + (searchTextQuery.replace(/\s/g,'+'))}>
                <button id='searchButton'>
                    <BsSearch />
                </button>
            </Link>
        </div>
    )
}

export default Search;