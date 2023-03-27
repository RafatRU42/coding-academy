import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home/Home'

export const routes = createBrowserRouter([
    {
        path:'/', element:<Main></Main>, children:[
            {path:'/', element:<Home></Home>},
            {path:'/error', element:<ErrorPage></ErrorPage>},
        ]
    }
]) 