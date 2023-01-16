import axios from "../../utils/axios";
import React, { useState } from "react";
import "./RegisterModal.css";
import { toast } from "react-toastify";

function RegisterModal() {
    const rexisterClose = (e) => {
        if (
            e.target.matches(".modal-body") ||
            e.target.matches(".fa-rectangle-xmark")
        ) {
            document.querySelector(".modal-body").style.display = "none";
        }
    };
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        name: "",
    });
    const changeHandlerNewUser = (e) => {
        const { name, value } = e.target;
        setNewUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitNewUser = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/auth/register", newUser);
            document.querySelector(".modal-body").style.display = "none";
            toast(data.message);
            setNewUser({ email: "", password: "", name: "" });
           
            
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="modal-body" onClick={rexisterClose}>
            <div className="modal-fixsed">
                <form className="register-form">
                    <div className="register-header">
                        <h2 className="register-title">Register</h2>
                        <i className="fa-regular fa-rectangle-xmark"></i>
                    </div>

                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={newUser.name}
                        onChange={changeHandlerNewUser}
                        name="name"
                        id="name"
                        placeholder="Your Name"
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        value={newUser.email}
                        onChange={changeHandlerNewUser}
                        name="email"
                        id="email"
                        placeholder="Your Login"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={newUser.password}
                        onChange={changeHandlerNewUser}
                        name="password"
                        id="password"
                        placeholder="Your Password key"
                    />

                    <button
                        type="submit"
                        onClick={submitNewUser}
                        className="register-submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;
