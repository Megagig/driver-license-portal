import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Root from "../components/Root";
import Contact from "../pages/contact/Contact";
import Faq from "../pages/faq/Faq";
import HomePage from "../pages/home/HomePage";
import NewApplicationHome from "../pages/new-application/NewApplicationHome";
import Support from "../pages/support/Support";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "new-application",
                element: <NewApplicationHome />,
            },
            {
                path: "faq",
                element: <Faq />,
            },
            {
                path: "support",
                element: <Support />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
        // <div>
        //     <Routes>
        //         <Route path="/" element={<HomePage />} />
        //         <Route path="/support" element={<Support />} />
        //         <Route path="/faq" element={<Faq />} />
        //         <Route path="/contact" element={<Contact />} />
        //     </Routes>
        // </div>
    );
};

export default Router;
