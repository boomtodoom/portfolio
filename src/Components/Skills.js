import React, { useState } from "react";
import "../css/sitewide.scss";
import "../css/skills.scss";
import { DiJava,DiJavascript1 } from 'react-icons/di'
import {SiCplusplus, SiC, SiPython, SiReact} from 'react-icons/si'

import { FadeInSection } from './Fade.js'

export default function Skills() {
    let skillDetails = [
        {desc: "Java is the programming language that I have the most experience in. It was one of the first programming languages I learned, and it was the focus of my A-Level studies. As part of my A-Levels I developed a flashcard/revision program in Java to allow the user to make, edit and use flashcards all in one app. This project helped me to understand file management within java, as well as how to use java in a larger project rather than just small programs."},
        {desc: "Python is the first purely text based language I studied, and I have a good amount of experience developing software using it. I used Python for most of my GCSE Computer Science, and then later I came to use Python on my own to play around with some simple AI libraries as it was a subject area I became quite interested in."},
        {desc: "Javascript is a language I learned a little about during my A level studies, but I didn't use it much until later. I have mostly used Javascript for simple web development in my free time as an educational exercise."},
        {desc: "C is a language I didn't use at all until University. I joined the Spaceflight society in my first year and the team I joined wanted the software for a simple flight controller to be written in C. To prepare for this I spent a while learning C whenever I had time, however, in the end the project ended up switching to Python."},
        {desc: "React is the language I used to design this website, and I have also been using it a lot in my free time to design websites for fun."}
    ]

    let [previous_val,setPrevious] = useState(0);
    let [choice,setChoice] = useState(0);
    const handleChange = (val) => {
        if(val === choice){return;}
        setPrevious(choice);
        setChoice(val);
        console.log(choice);
        console.log("Previous: " + previous_val);
    }


    return(
        <FadeInSection className="Skills Sec" >
            <div className="anchor" id="Skills"/>
            <h1> Skills: </h1>
            <div className="skills-box">
                <ul className="skills-list" >
                    <li><DiJava onClick={() => handleChange(0)}/></li>
                    <li><SiPython onClick={() => handleChange(1)}/></li>
                    <li><DiJavascript1 onClick={() => handleChange(2)}/></li>
                    <li><SiC onClick={() => handleChange(3)}/></li>
                    {/*<li><SiCplusplus onClick={() => setChoice(4)}/></li>*/}
                    <li><SiReact onClick={() => handleChange(4)}/></li>
                </ul>
                <div className="skill-detail">
                    <p className={"leftFade"} style={{transform: "translateX(-100vw)"}}>{skillDetails[previous_val].desc}</p>
                    <p className={"mainDesc"}> {skillDetails[choice].desc}</p>
                </div>
            </div>
        </FadeInSection>
    )
}