import React from "react";
import { Navbar } from "../header/Navbar";
import { Herobox } from "../herobox/Herobox";
import { HeroboxContent } from "../herobox/heroboxcontent/Heroboxcontent";

export function RegisterPage() {
    return (
        <>
            <Navbar />
            <div className="registerpageHbox"><Herobox />
                <div className="registerpageHcontent">
                    <HeroboxContent h1="Register" para="Register"></HeroboxContent>
                </div></div>
        </>
    )
}
