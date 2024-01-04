import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home';
import Questions from '../Pages/Questions/Questions';
import Explore from '../Pages/Explore/Explore';

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
                element:<Explore></Explore>
            }
        ]
    }
]
)

export default Routes;