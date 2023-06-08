import React, {useCallback, useRef} from "react";
import About from "./Components/About.js"
import Contact from "./Components/Contact.js"
import Navbar from "./Components/Navbar.js"
import Projects from "./Components/Projects.js"
import Skills from "./Components/Skills.js"
import './css/sitewide.scss'
import { useInView } from 'react-intersection-observer'

export default function App() {

    document.body.style.background='#2f2f2f';
    document.body.classList.add('main');

    const Observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    return(
            <main>
                <Navbar />
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
    );



}

