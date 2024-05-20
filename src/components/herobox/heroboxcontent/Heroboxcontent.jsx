import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRight } from "react-icons/md";

export function HeroboxContent(props) {
    return (
        <div className="Content">
            <h1>{props.h1} </h1>
            <div className="Para"><Link className="Home" to={"/"} >Home</Link>
                <p className="Arrow"><MdOutlineArrowRight /></p>
                <p>{props.para}</p></div>
        </div>
    )
}
