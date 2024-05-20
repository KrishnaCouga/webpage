import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="Footermaindiv">
            <div className="footerbluediv">
                <div className="footerblueleft">
                    <h2 className="footerblueh2">Create cool websites</h2>
                    <p className="footerbluepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi <br />accusantium optio und.</p>
                </div>
                <div className="footerblueright">
                    <div className="inputSection">
                        <input className="footerenter" type="email" id="email" placeholder="Enter email" />
                        <Link className="footersub" to={"/"}>Subscribe</Link>
                    </div>

                </div>
            </div>
            <div className="Footerbottommain">
                <div className="footeruni">
                    <h2 className="footerunih2">University</h2>
                    <p className="footerunipara">Perferendix eum illum voluptatibus <br />dolore tempora consequatut minus <br />asperiores temporibus.</p></div>
                <div className="footerlink">
                    <h2 className="footerlinkh2">Quick Link</h2>
                    <div className="footerbottomlinks">
                        <Link className="footerlinks" to={"/"}>Home</Link>
                        <Link className="footerlinks" to={"/"}>About us</Link>
                        <Link className="footerlinks" to={"/"}>Courses</Link>
                        <Link className="footerlinks" to={"/"}>Pages</Link>
                        <Link className="footerlinks" to={"/"}>News</Link>
                        <Link className="footerlinks" to={"/"}>Support</Link>
                        <Link className="footerlinks" to={"/"}>Contact</Link>
                        <Link className="footerlinks" to={"/"}>Privacy</Link>

                    </div>
                </div>
                <div className="footerblog">
                    <h2 className="footerblogh2">Blog</h2>
                </div>
                <div className="footercontact">
                    <h2 className="footercontacth2">Contact Information</h2>
                </div>

            </div>
        </div>
    )
}