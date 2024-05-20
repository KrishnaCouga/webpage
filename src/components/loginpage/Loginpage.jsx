import React from "react";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";

export function LoginPage() {
    return (
        <>
            <Navbar />
            <div className="loginpageHbox"><Herobox />
                <div className="loginpageHcontent">
                    <HeroboxContent h1="Log in" para="Log in"></HeroboxContent>
                </div></div>
        </>
    )
}
