import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utils/axios";
import "./MainPage.css";

function MainPage() {
    const [token, setToken] = useState(false);

    setInterval(() => {
        setToken(window.localStorage.getItem("token") || false);
    }, 1);

    const [loginData, setLoginDate] = useState({
        email: "",
        password: "",
    });
    const changeHendler = (e) => {
        const { name, value } = e.target;
        setLoginDate((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/auth/login", loginData);

            window.localStorage.setItem("token", data.accessToken);
            setLoginDate({
                email: "",
                password: "",
            });
           
                toast.success("Profilingzga kirdingiz");
            

        } catch (error) {
            
        }
    };

    return (
        <main className="main-body">
            <div className="bg-main">
                {token ? (
                    <div className="users-container">
                        <h1 className="users-header">
                            "Online do'kon" ga hush kelibsiz
                        </h1>
                        <p>
                            do'kon haqida to'liq malumot va sizga quydagi
                            bo'limlar orqali maxsulotlarni tabfsiya etadi va
                            yana birnimala
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="main-item">
                            <h1 className="main-hedding">Online do'kon</h1>
                            <p className="main-paragrf">
                                Do'kon haqida malumot va pastigi tugma orqli
                                ro'yhatdan o'tib foydalanish haqida malumot
                            </p>
                            <button
                                className="start-register"
                                onClick={() => {
                                    document.querySelector(
                                        ".modal-body"
                                    ).style.display = "flex";
                                }}
                            >
                                GET START
                            </button>
                        </div>
                        <div className="login-item">
                            <form className="login-form">
                                <h2 className="login-title">Login</h2>
                                <label className="login-label" htmlFor="login">
                                    Your Login
                                </label>
                                <input
                                    className="login"
                                    type="text"
                                    value={loginData.email}
                                    onChange={changeHendler}
                                    name="email"
                                    id="login"
                                    required
                                    placeholder="login..."
                                />
                                <label
                                    className="password-label"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="password"
                                    type="password"
                                    value={loginData.password}
                                    onChange={changeHendler}
                                    name="password"
                                    id="password1"
                                    required
                                    placeholder="password..."
                                />
                                <button
                                    type="submit"
                                    className="login-btn"
                                    onClick={submitHandler}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default MainPage;
