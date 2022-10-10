import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])