import React, { useState } from "react";
// import { SkillsButton } from './SkillsBtnElements'

export default function SkillsBtn( props ){
    const { children } = props

    const [choice, setState] = React.useState(1);

    return (
        <div
            role="button"
            tabIndex="-3"
        >
            {/*/!*{props.children}*!/*/}
            {/*{hover ? React.Children.forEach(children, (e) => {*/}
            {/*    e.classList.add('hovered');*/}
            {/*}) : React.Children.forEach(children, (e) => {*/}
            {/*    // e.classList.remove('hovered');*/}
            {/*}) }*/}
            {props.children}
        </div>
    );
};

