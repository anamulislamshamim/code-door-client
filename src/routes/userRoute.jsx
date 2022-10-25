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
            }
        ]
    }
]);
export default router;