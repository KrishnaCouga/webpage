import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";


export function Navbar() {
    return (
        <div className="header">
            <div className="left"><Link className="uni" to={"/"}>UNIVERSITY</Link></div>
            <div className="center">
                <Link className="home" to={"/"}>Home</Link>
                <a className="course" href="#">Courses <MdOutlineArrowDropDown />

                    <div className="drop-content">
                        <Link to={"/courses"}>HTML</Link>
                        <Link to={"/courses"}>WordPress</Link>
                        <Link to={"/courses"}>Laravel</Link>
                        <Link to={"/courses"}>Javascript</Link>
                        <Link to={"/courses"}>Python</Link>
                    </div>
                </a>
                <a className="categories" href="#">Categories <MdOutlineArrowDropDown />

                    <div className="cat-content">
                        <Link to={"/courses"}>HTML</Link>
                        <Link to={"/courses"}>WordPress</Link>
                        <Link to={"/courses"}>Laravel</Link>
                        <Link to={"/courses"}>Javascript</Link>
                        <Link to={"/courses"}>Python</Link>
                    </div></a>
                <Link className="blog" to={"/blog"}>Blog</Link>
                <Link className="about" to={"/about"}>About</Link>
                <Link className="contact" to={"/contact"}>Contact</Link>
            </div>
            <div className="right"><Link class="login" to={"/login"}>Login</Link> / <Link class="reg" to={"/register"}>Register</Link></div>
        </div >
    )
}
