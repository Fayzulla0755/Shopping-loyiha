import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import CatalogCard from "../../Components/CatalogCard/CatalogCard";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader/Loader";
// import image from '../../image/main-page-bg.jpg'

function ProductPage() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([false]);
    useEffect(() => {
        setLoading(true);
        const fetching = async () => {
            try {
                const { data } = await axios.get("/product-info");

                setProducts(data);
                setLoading(false);
            } catch (err) {
                toast.error(err.response.data.message);
            }
        };
        fetching();
    }, []);

    const productBuy = async (e) => {
        const data = products[e];
        const productBuyData = {
            name: data.name,
            price: data.price,
        };
        try {
            await axios.post(
                "/product-info-buy",
                productBuyData
            );
            toast.success("Maxsulo savatchaga qo'shildi");
        } catch (err) {
            toast.error(err.response.data.message);
        }
    };

    return (
        <main className="product-catalog">
            {loading ? (
                <Loader/>
            ) : (
                <div className="catalog-body">
                    {products.map((product, index) => (
                        <CatalogCard
                            key={product.id}
                            product={product}
                            productBuy={productBuy}
                            index={index}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export default ProductPage;
