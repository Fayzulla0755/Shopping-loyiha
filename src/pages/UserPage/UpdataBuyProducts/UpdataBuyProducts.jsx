import React from "react";


function UpdataBuyProducts({ data,changeHandlerUpdata,submitUpdata }) {
    const rexisterClose = (e) => {
        if (
            e.target.matches(".update-modal-body") ||
            e.target.matches(".fa-rectangle-xmark")
        ) {
            document.querySelector(".update-modal-body").style.display = "none";
        }
    };

    return (
        <div className="update-modal-body" onClick={rexisterClose}>
            <div className="modal-fixsed">
                <form className="register-form">
                    <div className="register-header">
                        <h2 className="register-title">Update </h2>
                        <i className="fa-regular fa-rectangle-xmark"></i>
                    </div>

                    <label htmlFor="name">New name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={changeHandlerUpdata}
                        name="name"
                        id="name"
                        
                    />

                    <label htmlFor="price">New price</label>
                    <input
                        type="text"
                        value={data.price}
                        onChange={changeHandlerUpdata}
                        name="price"
                        id="price"
                        
                    />

                    <button
                        type="submit"
                        onClick={submitUpdata}
                        className="register-submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdataBuyProducts;
