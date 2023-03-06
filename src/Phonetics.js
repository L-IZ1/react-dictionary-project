import React from "react";
import "./Phonetics.css";

export default function Phonetics (props){
    return(
        <div className="Phonetics">
            <span>
            <a href={props.phonetic.audio} target="_blank">LISTEN</a>{props.phonetic.text}
        </span></div>
    );
}