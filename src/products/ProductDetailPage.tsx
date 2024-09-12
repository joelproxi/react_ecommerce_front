import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import getProductDetail from "./getProductDetail";
import {IProduct} from "./typeProducts";

export default function ProductDetailPage(){
    const [product, setProduct] = useState<IProduct>(Object)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const { id } = useParams()

    const BASE_API = process.env.REACT_APP_BASE_API;
    const API_V1 = process.env.REACT_APP_V1;

    useEffect(() => {
        let cancel = false;

        if (!cancel && id) {
            console.log(BASE_API);
            getProductDetail(`${BASE_API}/${API_V1}/products/${id}`).then((body) => {
                console.log(body);
                setProduct(body);
                setIsLoading(false);
            });
        }
        return () => {
            cancel = true;
        };
    }, []);

    if(isLoading){
        return (<h4 className={"text-center justify-content-center align-items-center"}>Loading ...</h4>)
    }
    return(
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0"
                                                       src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg"
                                                       alt="..."/></div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h1 className="display-5 fw-bolder"> { product.name} </h1>
                            <div className="fs-5 mb-5">
                                <span>XAF { product.price }</span>
                            </div>
                            <p className="lead">
                                { product.description}
                            </p>
                            <div className="d-flex">
                                <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1"
                                       style={{ maxWidth: "3rem"}}/>
                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                    <i className="bi-cart-fill me-1"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}