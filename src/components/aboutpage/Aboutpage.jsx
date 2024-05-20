import React from "react";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";

export function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="aboutpageHbox"><Herobox />
                <div className="aboutpageHcontent">
                    <HeroboxContent h1="About Us" para="About Us"></HeroboxContent>
                </div></div>
        </>
    )
}
