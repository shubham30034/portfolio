import { createBrowserRouter } from "react-router-dom"; // Use createRoutes instead of createBrowserRouter
import Portpolio from "./Pages/Portpolio";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import App from "./App";

const router = createBrowserRouter([

    {
        path : "/",
        element : <App/>,
        children:[
            {
                path:'about',
                element:<About/>,
               
            },
            {
             path:"portpolio",
             element:<Portpolio/>,
              
        
            },
            {
                path : "contact",
                element : <Contact/>
            }
           
        ]

    },

    

])

export default router



