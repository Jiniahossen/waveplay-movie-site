import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Questions from '../Pages/Questions/Questions';
import Explore from '../Pages/Explore/Explore';
import Popular from '../Pages/Explore/Popular/Popular';
import Upcoming from '../Pages/Explore/Upcoming/Upcoming';
import Toprated from '../Pages/Explore/TopRated/Toprated';
import Details from '../Pages/Details/Details';
// import Login from '../Pages/Login/Login';

const Routes = createBrowserRouter(
[
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/faq',
                element:<Questions></Questions>
            },
            
            {
                path:'/explore',
                element:<Explore></Explore>,
                children:[
                    {
                        path:'/explore/popular',
                        element:<Popular></Popular>
                    },
                    {
                        path:'/explore/up-coming',
                        element:<Upcoming></Upcoming>
                    },
                    {
                        path:'/explore/top-rated',
                        element:<Toprated></Toprated>
                    },

                ]
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:()=>fetch(`http://localhost:5000/dramas`)
            }
        ]
    },
    
]
)

export default Routes;