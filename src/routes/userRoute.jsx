import Register from "../components/SignUp/Register";
import Login from "../components/Login/Login";
import Courses from "../components/Courses/Courses";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/register",
                element:<Register />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/blog",
                element:<p>This is blog component</p>
            },
            {
                path:"/about",
                element:<p>This is about page</p>
            },
            {
                path:"/courses",
                element:<Courses />
            }
        ]
    }
]);
export default router;