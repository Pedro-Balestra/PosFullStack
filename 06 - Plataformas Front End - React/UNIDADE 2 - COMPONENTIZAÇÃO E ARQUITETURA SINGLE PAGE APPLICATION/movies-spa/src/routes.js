import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { MovieDetail } from "./views/movieDetail/MovieDetail";
import { Movies } from "./views/movies/Movies";
import { RootLayout } from "./views/RootLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/movies',
                element: <Movies />
            },
            {
                path: '/movies/:id',
                element: <MovieDetail />
            },
        ]
    }
])