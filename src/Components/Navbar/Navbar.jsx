import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import axios from "../../utils/axios";

export default function Navbar() {
    let display = false;
    const activeStyles = {
        color: "#c76e1af3",
    };
    const [token, setToken] = useState(false);
    const [userData, setUserDate] = useState({
        email: "null",
        name: "null",
        _id: "null",
    });

    setInterval(() => {
        setToken(window.localStorage.getItem("token") || false);
    }, 1000);
    const hendlerMenu = () => {
        document.querySelector(".user-menu").style.display = "block";
        setTimeout(() => {
            document.querySelector(".user-menu").style.display = "none";
        }, 3000);
    };
    const hendlerNavbar = () => {
        if (!display) {
            display = !display;
            document.querySelector(".menu-list").style.display = "flex";
        } else {
            display = !display;
            document.querySelector(".menu-list").style.display = "none";
        }
    };
    const hendlerLogout = () => {
        document.querySelector(".user-menu").style.display = "none";
        const valid = window.confirm("Do you really want to log out?");
        if (valid) {
            window.localStorage.clear();
        }
    };

    const hendlerUserInfo = () => {
        document.querySelector(".user-info").style.display = "block";
        document.querySelector(".user-menu").style.display = "none";
        setTimeout(() => {
            document.querySelector(".user-info").style.display = "none";
        }, 3000);
    };
    useEffect(() => {
        const fetching = async () => {
            try {
                const { data } = await axios.get("/users/profile");

                setUserDate(data.user);
            } catch (err) {
                console.log(err);
            }
        };
        fetching();
    }, []);

    return (
        <nav className="navbar">
            <div className="menu">
                <button className="menu-button" onClick={hendlerNavbar}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className="menu-list">
                    <NavLink
                        className="menu-list-item"
                        to={"/"}
                        style={({ isActive }) =>
                            isActive ? activeStyles : undefined
                        }
                    >
                        <li> Home</li>
                    </NavLink>
                    <NavLink
                        to={"/products"}
                        className="menu-list-item"
                        style={({ isActive }) =>
                            isActive ? activeStyles : undefined
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className="menu-list-item"
                        onClick={() => {
                            document.querySelector(
                                ".modal-body"
                            ).style.display = "flex";
                        }}
                    >
                        Register
                    </NavLink>
                </ul>
            </div>
            <div className="user-control">
                {token ? (
                    <ul className="user-control-list">
                        <NavLink
                            to={"/user"}
                            className="user-control-list-item menu-list-item"
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                        <NavLink
                            className="user-control-list-item  menu-list-item"
                            onClick={hendlerMenu}
                        >
                            <i className="fa-solid fa-user"></i>
                        </NavLink>
                        <ul className="user-menu">
                            <li
                                className="user-menu-item"
                                onClick={hendlerUserInfo}
                            >
                                <i className="fa-sharp fa-solid fa-circle-info"></i>{" "}
                                User Info
                            </li>
                            <li
                                className="user-menu-item"
                                onClick={hendlerLogout}
                            >
                                <i className="fa-sharp fa-solid fa-right-from-bracket"></i>{" "}
                                Logout
                            </li>
                        </ul>
                    </ul>
                ) : (
                    <ul className="user-control-list">
                        <NavLink
                            to={"/"}
                            className="user-control-list-item menu-list-item"
                        >
                            Login
                        </NavLink>
                    </ul>
                )}
            </div>
            <div className="user-info">
                <table className=" ctable table-hover   table-striped table-warning">
                    <tr>
                        <th >Id: </th>
                        <th scope="row">{userData._id}</th>
                    </tr>
                    <tr>
                        <th >Name: </th>
                        <th scope="row">{userData.name}</th>
                    </tr>
                    <tr>
                        <th >Email: </th>
                        <th scope="row">{userData.email}</th>
                    </tr>
                </table>
            </div>
        </nav>
    );
}
