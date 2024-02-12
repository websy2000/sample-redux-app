import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutComponent from "../components/layout";
import { getSingleProduct } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.productsList?.singleProductData);
    const { productId } = useParams()
    console.log(singleProduct)

    useEffect(() => {
        dispatch(getSingleProduct(productId))
    }, [productId])
    return (
        <>
            <LayoutComponent>
                <div className="single_poduct_container">
                    <div className="single_product_icons">
                        <img src={singleProduct?.image} />
                    </div>
                    <div className="single_product_content">
                        <h3>{singleProduct?.title}</h3>
                        <p>{singleProduct?.description}</p>
                        <p>Price:<strong>${singleProduct?.price}</strong></p>
                        <p>Rating:<strong>{singleProduct?.rating?.rate}</strong></p>
                        <button type="button" className="product_btn">Add to cart</button>
                    </div>
                </div>
            </LayoutComponent>
        </>
    )
}


export default ProductDetails;