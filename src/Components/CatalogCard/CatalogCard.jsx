import React from "react";
import "./CatalogCard.css";

function CatalogCard({ product,index,productBuy}) {
    const { name, image, phone, place, price, size } = product;
    return (
        <div className="cardp" style={{ width: "18rem" }}>
            <div className="card-bodyp">
                <h4 className="card-titlep title">{name}</h4>
                <div className="img-continer">
                    <img
                        src={"http://139.144.180.200:3000/img/"+image}
                        alt={name + "img"}
                        className="card-imagep"
                    />
                </div>
                <div className="product-info">
                    <div className="card-textp phone">
                        <strong>Tel:</strong> {phone}
                    </div>
                    <div className="card-textp country">
                        <strong>Made in {place}</strong>
                    </div>
                    <div className="price">
                        <strong>Price: </strong>
                        {price} $
                    </div>
                    <div className="size">
                        <strong>Size: </strong>
                        {size}
                    </div>
                </div>
                <div className="control">
                    {/* <i className="fa-solid fa-eye">
                        <span className="view-num">0</span>
                    </i> */}
                    <i className="fa-solid fa-bag-shopping" onClick={()=>productBuy(index)}></i>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;
