import React, { useState, useRef } from "react";
import { HiMenu } from "react-icons/hi"
import {AiOutlineInstagram} from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import '../css/navbar.scss';

const Navbar = () => {
    const node = useRef(null);
    const [menuCollapse,setMenuCollapse] = useState(false)

    const menuOnClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const closeMenu = () => {
        setMenuCollapse(false)
    }



    // const handleClick = (e) => {
    //     if (node.current && !node.current.contains(e.target)) {
    //         closeMenu();
    //         return;
    //     }
    //
    // }
    //
    // document.addEventListener('mousedown', handleClick, false);
    //

    return(
    <div className="navbar">
        <div className='top-menu'>
            <HiMenu color="white" className="toggle-button" onClick={menuOnClick}></HiMenu>
            <ul>
                <li><a href="#About">Summary</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Contact">Contact me</a></li>
            </ul>
        </div>
        <div className="sidebar" ref={node}>
            <div className={`sidebar-overlay ${menuCollapse === true ? 'active' : ''}`}>
                <p></p>
                <BsFillArrowLeftCircleFill color="black"  className="arrow-icon" onClick={menuOnClick}></BsFillArrowLeftCircleFill>
            </div>
        </div>
    </div>
    );
};

export default Navbar;
