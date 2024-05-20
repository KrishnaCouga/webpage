import React from "react";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";

export function BlogPage() {
    return (
        <>
            <Navbar />
            <div className="blogpageHbox"><Herobox />
                <div className="blogpageHcontent">
                    <HeroboxContent h1="Our Blog" para="Blog"></HeroboxContent>
                </div></div>
        </>
    )
}
