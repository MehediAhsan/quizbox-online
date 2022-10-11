import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import TopicDetails from "../components/TopicDetails/TopicDetails";
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
            },
            {
                path:'/quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <TopicDetails></TopicDetails>
            },
            {
                path:'statistics',
                element: <Statistics></Statistics>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            }
        ]
    }
])