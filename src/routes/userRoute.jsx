import Register from "../components/SignUp/Register";
import Login from "../components/Login/Login";
import Courses from "../components/Courses/Courses";
import CardContainer from "../components/CardContainer/CardContainer";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/About/About";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Premium from "../components/Premium/Premium";
import PrivateRoute from "./PrivateRoute";
import FAQ from "../components/FAQ/FAQ";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Main } = require("../layout/Main");


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main />,
        errorElement:<ErrorPage />,
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
                element:<About />
            },
            {
                path:"/courses",
                element:<Courses />,
                children: [
                    {
                        path:"/courses",
                        loader: () => fetch(`https://codedoor-server.vercel.app/courses/`),
                        element:<CardContainer />
                    },
                    {
                        path:"/courses/:categoryId",
                        loader:({ params }) => fetch(`https://codedoor-server.vercel.app/courses/${ params.categoryId }`),
                        element:<CardContainer />
                    },
                    {
                        path:"/courses/course/:id",
                        loader: ({params}) => fetch(`https://codedoor-server.vercel.app/courses/course/${ params.id }`),
                        element:<CourseDetails />
                    }
                ]
            },
            {
                path:"/courses/course/checkout/:id",
                loader: ({params}) => fetch(`https://codedoor-server.vercel.app/courses/course/${ params.id }`),
                element:<PrivateRoute><Premium /></PrivateRoute>
            },
            {
                path:"/faq",
                element:<FAQ />
            }
        ]
    }
]);
export default router;