import './App.css';
import Head from "./Components/head"
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
           {
            path:"/",
            element:<Maincontainer/>
           },
           {
            path: "watch",
            element : <WatchPage/>
           }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head/>
        {/* <Body/> */}
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
