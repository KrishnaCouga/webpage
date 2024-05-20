import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


function Homeherocontent() {
    const [dropDisplay, setDisplay] = useState(true)
    const handeleDropdown = () => {
        console.log(dropDisplay)
        setDisplay(!dropDisplay)
    }
    return (
        <section className="Contentdiv">
            <h2>Find Oneline Courses That Suits You</h2>
            <div className="Heronav">
                <input type="text" placeholder="Keyword Search..."></input>
                <div onClick={handeleDropdown} className="Category"> Category Course <RiArrowDropDownLine />

                </div>
                <div style={{ display: `${dropDisplay ? "none" : "block"}`, background: "red" }}>
                    <option className="option" value>Category Course</option>
                    <option value>Laravel</option>
                    <option value>PHP</option>
                    <option value>JavaScript</option>
                    <option value>Python</option></div>

                {/* <select className="Diff"><RiArrowDropDownLine />
                    <option value>Difficulty</option>
                    <option value>Beginner</option>
                    <option value>Intermediate</option>
                    <option value>Advance</option>
                </select> */}

                <div className="Diff">
                    <div className="Icon">
                    </div>
                    <select className="Dropdown1">
                        <option value>Difficulty</option>
                        <option value>Beginner</option>
                        <option value>Intermediate</option>
                        <option value>Advance</option>
                    </select>
                </div>
                <Link className="Search" to={"/"}>Search</Link>
            </div>
            <p>We have more than 500 courses to improve your skills</p>
            <button className="Reg"> Register Now</button>
        </section>
    )
}
export default Homeherocontent;