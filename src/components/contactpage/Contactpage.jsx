import React from "react";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";

export function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="contactpageHbox"><Herobox />
                <div className="contactpageHcontent">
                    <HeroboxContent h1="Contact Us" para="Contact Us"></HeroboxContent>
                </div></div>
        </>
    )
}
