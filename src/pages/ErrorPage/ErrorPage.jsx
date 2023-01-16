import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
    return (
        <main className="err-conteiner">
            <div className="text-block">
                <h2 className="err-title">Error 404</h2>
                <p className="err-tect">
                    The page you are looking for does not exist. How you got
                    here is a mystery. But you can click the button below to go
                    back to the homepage.
                </p>
                <Link className="home-btn" to={"/"}>
                    Home
                </Link>
            </div>
            <div className="img-blok"></div>
        </main>
    );
}

export default ErrorPage;
