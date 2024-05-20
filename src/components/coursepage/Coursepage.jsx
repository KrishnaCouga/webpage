import React from "react";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";

export function CoursePage() {
    return (
        <>
            <Navbar />
            <div className="coursepageHbox"><Herobox />
                <div className="coursepageHcontent">
                    <HeroboxContent h1="Courses" para="Courses"></HeroboxContent>
                </div></div>
        </>
    )
}
