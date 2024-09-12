import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProductsPage from "./products/ProductsPage";
import ProductDetailPage from "./products/ProductDetailPage";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />
    },
    {
        path: "products/:id",
        element: <ProductDetailPage />
    }
])




export default function DefaultRouter(){
    return(
        <RouterProvider router={routers} />
    )
}