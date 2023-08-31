import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./SlideBar";
import hamBurgerContext from "../utils/hamBurgerContext";
import { useState,useContext } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import searchContext from "../utils/searchContext";

const Body = () => {
    const {Show} = useContext(hamBurgerContext)
    const {searchResultArray} = useContext(searchContext)
    const [hbStatus,setHbStatus] = useState(Show)
    const [seResult,setSeResult] = useState(searchResultArray)
    return (
        <Provider store={appStore}>
            <searchContext.Provider value={{searchResultArray:seResult, setSeResult}}>
                <hamBurgerContext.Provider value={{Show : hbStatus, setHbStatus}}>
                    <Header />
                    <div>
                        {hbStatus && (
                            <div className="fixed bottom-0 top-0 left-0 w-[256px] flex flex-col max-w-[256px] h-[100vh]">
                                <div className="mt-[80px]"></div>
                                <SlideBar />
                            </div>
                        )}
                        <Outlet/>
                    </div>
                </hamBurgerContext.Provider>
            </searchContext.Provider>
        </Provider>
    )
}

export default Body
