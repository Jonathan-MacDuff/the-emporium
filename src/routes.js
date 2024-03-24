import App from "./compnents/App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Musings from "./components/Musings";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/musings",
                element: <Musings />
            }
        ]
    }
]

export default routes;