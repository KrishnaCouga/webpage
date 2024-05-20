import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";
import Homeherocontent from "../herobox/heroboxhomecontent/Homeherocontent";
import groupImg from "../image/group.jpg";
import { IoMdPlay } from "react-icons/io";
import { ReadmoreCard } from "../readmorecard/Readmorecard";
import { HomepageGraydiv } from "../homepagegraydiv/Homepagegraydiv";
import { IoMdCalendar } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RiChat1Fill } from "react-icons/ri";
import { Footer } from "../footer/Footer";

export function HomePage() {
    return (
        <div className="Main">
            <Navbar />

            <div className="Hbox"><Herobox />
                <div className="HHcontent"><Homeherocontent /></div>
            </div>

            <div className="Welcomediv">
                <div className="Wright">
                    <h1 className="Welcome">Welcome to<br />
                        University</h1>
                    <p className="Welcomepara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum ipsa, minus dolorem quis asperiores? Corrupti repellendus inventore commodi adipisci minus molestiae illum, odit laboriosam explicabo? Harum.</p>
                    <Link className="Read" to={"/"}>Read More</Link>
                </div>
                <div className="Wleft">
                    <img src={groupImg} alt="pg"></img>
                    <div className="Circle">
                        <div className="Icon"><IoMdPlay /></div></div>
                </div>
            </div>

            <ReadmoreCard />
            <HomepageGraydiv />

            <div className="teacherdiv">
                <h2 className="teacherh2">Teachers</h2>
                <p className="teacherpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta magni fugiat tenetur.<br />tempore sapiente.</p>
            </div>

            <div className="Blogmaindiv"><div className="blogdiv">
                <h2 className="blogh2">Blog</h2>
                <p className="blogpara"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, ea. Corporis obcaecati<br /> magnam excepturi quibusdam placeat.</p>
            </div>
                <div className="Blogpicmaindiv">
                    <div className="blogleft">
                        <div className="blogpicleft">
                            <img className="bloggroupImg" src={groupImg} alt="bg" />
                        </div>
                        <div className="blogcontentleft">
                            <p className="blogtopicleft">Even the all-powerful Pointing has no control about the blind texts</p>
                            <div className="blogiconleft"><p className="cal"><IoMdCalendar />May29.2018</p> &nbsp;<p className="ad"> <IoMdPerson />Admin</p>
                                &nbsp;<p className="fill"> <RiChat1Fill />19</p></div>
                        </div>
                    </div>
                    <div className="blogright">
                        <div className="blogrightsmall">
                            <div className="blogpicright">
                                <div className="blogpicrightImgdiv">
                                    <img className="blogpicrightImg" src={groupImg} alt="bg" /></div>
                                <div className="blogcontentright">
                                    <p className="blogtopicright">Even the all-powerful Pointing has no control <br />about the blind texts</p>
                                    <div className="blogiconright"><p className="cal"><IoMdCalendar />May29.2018</p> &nbsp;<p className="ad"> <IoMdPerson />Admin</p>
                                        &nbsp;<p className="fill"> <RiChat1Fill />19</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="blogrightsmall">
                            <div className="blogpicright">
                                <div className="blogpicrightImgdiv">
                                    <img className="blogpicrightImg" src={groupImg} alt="bg" /></div>
                                <div className="blogcontentright">
                                    <p className="blogtopicright">Even the all-powerful Pointing has no control <br />about the blind texts</p>
                                    <div className="blogiconright"><p className="cal"><IoMdCalendar />May29.2018</p> &nbsp;<p className="ad"> <IoMdPerson />Admin</p>
                                        &nbsp;<p className="fill"> <RiChat1Fill />19</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="blogrightsmall">
                            <div className="blogpicright">
                                <div className="blogpicrightImgdiv">
                                    <img className="blogpicrightImg" src={groupImg} alt="bg" /></div>
                                <div className="blogcontentright">
                                    <p className="blogtopicright">Even the all-powerful Pointing has no control <br />about the blind texts</p>
                                    <div className="blogiconright"><p className="cal"><IoMdCalendar />May29.2018</p> &nbsp;<p className="ad"> <IoMdPerson />Admin</p>
                                        &nbsp;<p className="fill"> <RiChat1Fill />19</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="blogrightsmall">
                            <div className="blogpicright">
                                <div className="blogpicrightImgdiv">
                                    <img className="blogpicrightImg" src={groupImg} alt="bg" /></div>
                                <div className="blogcontentright">
                                    <p className="blogtopicright">Even the all-powerful Pointing has no control <br />about the blind texts</p>
                                    <div className="blogiconright"><p className="cal"><IoMdCalendar />May29.2018</p> &nbsp;<p className="ad"> <IoMdPerson />Admin</p>
                                        &nbsp;<p className="fill"> <RiChat1Fill />19</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
