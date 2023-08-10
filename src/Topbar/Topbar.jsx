import React from "react";
import "./Topbar.css";
import Image from '../Topbar/back.jpg'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function Topbar() {
    return (
        <div className="top">
            <div className="topleft">
                <h4>Blog App</h4>
            </div>
            <div className="topcenter">
                <ul className="top-links">
                    <Link to="/"><li className="toplist">Home</li></Link>
                    <Link to="/about"><li className="toplist">About</li></Link>
                    <Link to="/contact"><li className="toplist">Contact</li></Link>
                    <Link to="/login"><li className="toplist">Login</li></Link>
                    <Link to="/register"><li className="toplist">Register</li></Link>
                </ul>
            </div>
            <div className="topright" align="center">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    );
}
