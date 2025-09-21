// src/routes/index.tsx (for example)
import { createBrowserRouter } from "react-router";
import Layout from "../components/assign-1-c/layout";
import Home from "../pages/home/home";
import About from "../pages/about/About";
import Contact from "../pages/contact/contact";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // same as path: "/"
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      
      {
        path: "*",
        element: <h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>,
      },
    ],
},
{
    path:'flowbite',
    element:<App/>
}
]);
