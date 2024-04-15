import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Help from "../pages/Help";



export const mainRoute = createBrowserRouter ([
    {
        element: <WebLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <LandingPage />,
            },

            {
                path: "/about",
                element: <About />,
            },

            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/faq",
                element: <FAQ />,
            },

            {
                path: "/help",
                element: <Help />,
            },
        ],
    },
]); 