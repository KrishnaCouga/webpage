import React from "react";
import hero from "../image/hero_s.jpg";
import group from "../image/group.jpg";
import female from "../image/grafemale_s.jpg";


const courseDetails = [
    {
        img: group, h2: "Advanced JavaScript Learning", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "2,219/6,000", dollar: "$23", button: "Free"
    },
    {
        img: hero, h2: "Advanced JavaScript Learning", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "2,219/6,000", dollar: "$23", button: "Free"
    },
    {
        img: female, h2: "Introduction to CSS", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "1,903/3,000", dollar: "", button: "$10.99"
    },
    {
        img: group, h2: "Design & Develop", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "23/100", dollar: "$23", button: "Free"
    },
    {
        img: group, h2: "Advanced JavaScript Learning", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "2,219/6,000", dollar: "$23", button: "Free"
    },
    {
        img: hero, h2: "Advanced JavaScript Learning", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "2,219/6,000", dollar: "$23", button: "Free"
    },
    {
        img: female, h2: "Introduction to CSS", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "1,903/3,000", dollar: "", button: "$10.99"
    },
    {
        img: group, h2: "Design & Develop", para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis tempora quaerat dolorum",
        price: "23/100", dollar: "$23", button: "Free"
    },
];

export const CourseCard = () => {
    return (
        <main className="coursecard">
            {courseDetails.map((course, i) => {
                return (
                    <div className="coursemaindiv">
                        <section key={i} className="innercourse">
                            <div className="courseimg">
                                <img src={course.img} />
                            </div>
                            <div className="coursecontent">
                                <h2 className="courseh2">{course.h2}</h2>
                                <p className="coursepara">{course.para}</p>
                                <div className="coursebottom">
                                    <p className="price">{course.price}</p>
                                    <p className="dollar">{course.dollar}</p>
                                    <button className="free">{course.button}</button>
                                </div></div>
                        </section>
                    </div>
                )
            })}
        </main>

    )
}

