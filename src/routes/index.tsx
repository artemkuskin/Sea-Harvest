import App from "../App";
import Layout from "../components/Layot";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Order from "../pages/Order";
import Products from "../pages/Products";

export const routes = [
    {
        path: "/",
        element: <Layout>
            <App />
        </Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: '/products',
        element: <Layout><Products /></Layout>
    },
    {
        path: '/contact',
        element:
            <Layout><Contact /></Layout>
    },
    {
        path: '/order',
        element: <Layout><Order /></Layout>
    },
    {
        path: '/about',
        element: <Layout><About /></Layout>
    },

]