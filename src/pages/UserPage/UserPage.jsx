import React, { useEffect, useState } from "react";
import "./UserPage.css";
import ProductTableBody from "./ProductTableBody/ProductTableBody";
import axios from "../../utils/axios";
import { toast } from "react-toastify";
// import UpdataBuyProducts from "./UpdataBuyProducts/UpdataBuyProducts";
import Loader from "../../Components/Loader/Loader";
function UserPage() {
    const [buyProducts, setBuyProducts] = useState([""]);
    // const [updata, setUpdata] = useState({ name: "adasd", price: "dads" });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetching = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get("/product-info-buy");
                setBuyProducts(data.productInfo);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetching();
    }, []);
    const buyProductDelete = async (id) => {
        try {
            const { data } = await axios.delete("/product-info-buy/" + id);
            toast.success(data.message);
        } catch (err) {
            console.log(err);
        }
    };
    // const buyProductUpdate = (index) => {
    //     document.querySelector(".update-modal-body").style.display = "flex";

    //     setUpdata(buyProducts[index]);
    // };
    // Update qismi

    // const changeHandlerUpdata = (e) => {
    //     const { name, value } = e.target;
    //     setUpdata((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const submitUpdata = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const { data } = await axios.put(
    //             "/product-info-buy",
    //             updata
    //         );
    //         document.querySelector(".update-modal-body").style.display = "none";
    //         toast(data.message);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return (
        <main className="user-container">
            <div className="usertable">
                {loading ? (
                    <Loader />
                ) : (
                    <table className="table table-hover  table-striped  table-warning">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Prise</th>

                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyProducts.map((data, index) => (
                                <ProductTableBody
                                    buyProductDelete={buyProductDelete}
                                    // buyProductUpdate={buyProductUpdate}
                                    key={data._id}
                                    data={data}
                                    index={index}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {/* <UpdataBuyProducts
                changeHandlerUpdata={changeHandlerUpdata}
                submitUpdata={submitUpdata}
                data={updata}
            /> */}
        </main>
    );
}

export default UserPage;
