import React from "react";
import grafemaleImg from "../image/grafemale_b.jpg";
import { HiMiniBookOpen } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CourseCard } from "../coursecard/Coursecard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import student from "../image/graduationsmall.png";
import bookstack from "../image/bookstack.png";
import university from "../image/university.png";
import gcap from "../image/graduation-cap.png";
import CountUp from "react-countup";



export function HomepageGraydiv() {
    return (
        < div className="Graydiv" >
            <div className="Educationdiv">
                <div className="Eduimgdiv"><img src={grafemaleImg} alt="bg"></img></div>
                <div className="Educontentdiv">
                    <div className="Educontent">
                        <h2 className="Edu">Education is Life</h2>
                        <p className="Edupara"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident enim, reiciendis, beatae expedita maiores eum, at culpa animi eveniet quam cupiditate minima.</p>
                    </div>
                    <div className="Countdowndiv">
                        <div className="Countdown">
                            <img className="countImg" src={student}></img>
                            <div className="countcontent">
                                <p className="counter">
                                    <CountUp start={0} end={12921} duration={10} />
                                </p>
                                <p className="counttext">STUDENTS</p>
                            </div>
                        </div>
                        <div className="Countdown"><img className="countImg" src={bookstack}></img>
                            <div className="countcontent">
                                <p className="counter">
                                    <CountUp start={0} end={3902} duration={10} />
                                </p>
                                <p className="counttext">BOOKS</p>
                            </div></div>
                        <div className="Countdown"><img className="countImg" src={university}></img>
                            <div className="countcontent">
                                <p className="counter">
                                    <CountUp start={0} end={51} duration={10} />
                                </p>
                                <p className="counttext">SCHOOLS</p>
                            </div></div>
                        <div className="Countdown"><img className="countImg" src={gcap}></img>
                            <div className="countcontent">
                                <p className="counter">
                                    <CountUp start={0} end={1921} duration={10} />
                                </p>
                                <p className="counttext">GRADUATES</p>
                            </div></div>
                    </div>
                </div>
            </div>

            <div className="Populardiv">
                <h2 className="Popular">Popular Courses</h2>
                <p className="Popularpara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quia eum cumque neque voluptas<br /> consectetur adipisicing.</p>
                <Link className="Enroll" to={"/"}><i className="bk"><HiMiniBookOpen /></i>&nbsp;&nbsp;Enroll Now</Link>
            </div>
            <CourseCard />
            <div className="arrow"><FaArrowLeft /><FaArrowRight /></div>
        </div>
    )
}
