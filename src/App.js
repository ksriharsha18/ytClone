import MainContainer from "./components/MainContainer";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/watchVideo";
import SearchResult from "./components/SearchResult";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: '/watch',
          element: <WatchVideo />
        },
        {
          path: '/results',
          element: <SearchResult />
        }
      ]
    }
  ])

  return (
      <div>
        <RouterProvider router = {router}/>
      </div>
  );
}

export default App;
