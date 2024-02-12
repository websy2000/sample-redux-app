import React, { useEffect } from "react";
import LayoutComponent from "../components/layout";
import { getAllProductsList } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productsList.allProducts);
    const navigate = useNavigate();


    const redirectProductDetails = (productId) => {
        navigate(`/productDetails/${productId}`);
    }



    useEffect(() => {
        dispatch(getAllProductsList());
    }, [])
    return (
        <>
            <LayoutComponent>
                {productList?.length > 0 ? (
                    <ul className="product_list">
                        {productList.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <img src={item?.image} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                                <button type="button" className="product_btn" onClick={() => redirectProductDetails(item.id)}>View</button>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <div>Loading...</div>
                )}

            </LayoutComponent>

        </>
    )
}


export default ProductPage;