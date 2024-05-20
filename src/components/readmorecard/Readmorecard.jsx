import React from "react";
import book from "../image/book.png";
import student from "../image/graduation.png";
import diploma from "../image/diploma.png";
import professor from "../image/professor.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";



const cardDetails = [
    {
        img: book, heading: "Knowledge is power", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        img: student, heading: "Senior high school", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        img: diploma, heading: "College of Arts & Sciences", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        img: professor, heading: "Unmatched Proffessor", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
];

export const ReadmoreCard = () => {
    return (
        <main className="card">
            {cardDetails.map((card, i) => {
                return (
                    <section key={i} className="innercard">
                        <div className="imgsection">
                            <img src={card.img} />
                        </div>
                        <h2>{card.heading}</h2>
                        <p>{card.content}</p>
                        <Link className="readarrow" to={"/"}>READ MORE <i className="icn"><FaArrowRight /></i></Link>
                    </section>
                );
            })}
        </main>
    );
};


