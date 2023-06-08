import React from "react";
import "../css/sitewide.scss"
import "../css/about.scss"
import { FadeInSection } from './Fade.js'

export default function About() {
    return(
        <FadeInSection className="About Sec">
            <div className="anchor" id="About"/>
            <h1>Summary:</h1>
            <p>I am a Computer Science student with experience developing software in a number of languages, including Java
                , Python and Javascript. I particularly enjoy learning about Cyber-Security and the importance of Cyber Defence
                in almost every industry, and I hope to be able to contribute to this field in the future.</p>
        </FadeInSection>
 );
}