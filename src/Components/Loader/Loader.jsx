import React from "react";
import "./Loader.css";

function Loader() {
    return (
        <div className="loading-body">
            <div className="loading"></div>
            <h3 className="loading-text">Loading...</h3>
        </div>
    );
}

export default Loader;
