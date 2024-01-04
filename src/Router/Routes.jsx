import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Questions from '../Pages/Questions/Questions';
import Explore from '../Pages/Explore/Explore';
import Popular from '../Pages/Explore/Popular/Popular';
import Upcoming from '../Pages/Explore/Upcoming/Upcoming';

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

                ]
            }
        ]
    }
]
)

export default Routes;