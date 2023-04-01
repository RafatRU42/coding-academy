import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Components/Home/Home'
import Signup from '../Pages/SignUp/SignUP'

export const routes = createBrowserRouter([
    {
        path:'/', element:<Main></Main>, children:[
            {path:'/', element:<Home></Home>},
            {path:'/signup', element:<Signup></Signup>},
        ]
    }
]) 